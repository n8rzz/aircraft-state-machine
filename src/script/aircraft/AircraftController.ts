import { AircraftAltitudeView } from './AircraftAltitudeView';
import { AircraftModel } from './AircraftModel';
import { DecrementAltitudeContext } from './aircraftContext/DecrementAltitudeContext';
import { IncrementAltitudeContext } from './aircraftContext/IncrementAltitudeContext';
import { NeutralAltitudeContext } from './aircraftContext/NeutralAltitudeContext';
import { ContextAbstract } from './aircraftContext/ContextAbstract';

export class AircraftController {
    private _model: AircraftModel = null;
    private _view: AircraftAltitudeView = null;
    private _context: ContextAbstract = null;
    private _$increaseAltitudeBtn: HTMLButtonElement = null;
    private _$decreaseAltitudeBtn: HTMLButtonElement = null;
    private _onClickDecreaseAltitudeHandler: (event: UIEvent) => void = this._onClickDecreaseAltitude.bind(this);
    private _onClickIncreaseAltitudeHandler: (event: UIEvent) => void = this._onClickIncreaseAltitude.bind(this);

    constructor() {
        this._model = new AircraftModel();
        this._context = new NeutralAltitudeContext(this._model);

        return this._createChildren()
            ._setupHandlers();
    }

    public update(): void {
        this._context.update();
        this._view.update(this._model.contextName, this._model.currentValue, this._model.target);

        if (this._context.shouldMoveToNextContext()) {
            this._updateContext(this._context.getNextContext());
        }
    }

    private _updateContext(NextContext: any): void {
        if (this._context instanceof NextContext) {
            return;
        }

        this._context.onExit();
        this._context = new NextContext(this._model);
    }

    private _createChildren(): this {
        const contextView = document.getElementsByClassName('js-altitudeContextName')[0] as HTMLElement;
        const currentAltitudeValueView = document.getElementsByClassName('js-altitudeCurrentValue')[0] as HTMLElement;
        const altitudeTargetValue = document.getElementsByClassName('js-altitudeTargetValue')[0] as HTMLElement;
        this._$decreaseAltitudeBtn = document.getElementsByClassName('js-btn-decrease')[0] as HTMLButtonElement;
        this._$increaseAltitudeBtn = document.getElementsByClassName('js-btn-increase')[0] as HTMLButtonElement;
        this._view = new AircraftAltitudeView(contextView, currentAltitudeValueView, altitudeTargetValue);

        return this;
    }

    private _setupHandlers(): this {
        this._$decreaseAltitudeBtn.addEventListener('click', this._onClickDecreaseAltitudeHandler);
        this._$increaseAltitudeBtn.addEventListener('click', this._onClickIncreaseAltitudeHandler);

        return this;
    }

    private _onClickDecreaseAltitude(event: UIEvent): void {
        event.preventDefault();

        const nextTarget: number = -5;

        this._model.updateTarget(nextTarget);
        this._updateContext(DecrementAltitudeContext);
    }

    private _onClickIncreaseAltitude(event: UIEvent): void {
        event.preventDefault();

        const nextTarget: number = 5;

        this._model.updateTarget(nextTarget);
        this._updateContext(IncrementAltitudeContext);
    }
}
