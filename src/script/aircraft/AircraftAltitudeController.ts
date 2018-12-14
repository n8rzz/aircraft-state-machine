import { AircraftAltitudeModel } from './AircraftAltitudeModel';
import { AircraftAltitudeView } from './AircraftAltitudeView';
import { ContextAbstract } from './context/ContextAbstract';
import { DecrementAltitudeContext } from './context/altitude/DecrementAltitudeContext';
import { IncrementAltitudeContext } from './context/altitude/IncrementAltitudeContext';
import { NeutralAltitudeContext } from './context/altitude/NeutralAltitudeContext';

export class AircraftAltitudeController {
    private _model: AircraftAltitudeModel = null;
    private _context: ContextAbstract = null;
    private _view: AircraftAltitudeView = null;

    constructor() {
        this._model = new AircraftAltitudeModel();
        this._context = new NeutralAltitudeContext(this._model);

        return this._createChildren();
    }

    public decreaseAltitude(): void {
        const nextTarget: number = -5;

        this.updateContext(DecrementAltitudeContext);
        this._model.updateTarget(nextTarget);
    }

    public increaseAltitude(): void {
        const nextTarget: number = 5;

        this.updateContext(IncrementAltitudeContext);
        this._model.updateTarget(nextTarget);
    }

    public update(): void {
        this._context.update();
        this._view.update(this._model.contextName, this._model.currentValue, this._model.target);

        if (this._context.shouldMoveToNextContext()) {
            this.updateContext(this._context.getNextContext());
        }
    }

    public updateContext(NextContext: any): void {
        if (this._context instanceof NextContext) {
            return;
        }

        this._context.onExit();
        this._context = new NextContext(this._model);
    }

    private _createChildren(): this {
        const contextView = document.getElementsByClassName('js-altitudeContextName')[0] as HTMLElement;
        const valueView = document.getElementsByClassName('js-altitudeCurrentValue')[0] as HTMLElement;
        const targetValue = document.getElementsByClassName('js-altitudeTargetValue')[0] as HTMLElement;

        this._view = new AircraftAltitudeView(contextView, valueView, targetValue);

        return this;
    }
}
