import { ControllerAbstract } from '../abstract/ControllerAbstract';
import { AircraftSpeedModel } from './AircraftSpeedModel';
import { AircraftSpeedView } from './AircraftSpeedView';
import { DecreaseSpeedContext } from './context/speed/DecreaseSpeedContext';
import { IncreaseSpeedContext } from './context/speed/IncreaseSpeedContext';
import { NeutralSpeedContext } from './context/speed/NeutralSpeedContext';

export class AircraftSpeedController extends ControllerAbstract {
    constructor() {
        super('aircraftSpeedController');

        this._model = new AircraftSpeedModel();
        this._context = new NeutralSpeedContext(this._model);

        return this._createChildren();
    }

    public decreaseSpeed(): void {
        const nextTarget: number = -5;

        this.updateContext(DecreaseSpeedContext);
        this._model.updateTarget(nextTarget);
    }

    public increaseSpeed(): void {
        const nextTarget: number = 5;

        this.updateContext(IncreaseSpeedContext);
        this._model.updateTarget(nextTarget);
    }

    private _createChildren(): this {
        const contextView = document.getElementsByClassName('js-speedContextName')[0] as HTMLElement;
        const valueView = document.getElementsByClassName('js-speedCurrentValue')[0] as HTMLElement;
        const targetValue = document.getElementsByClassName('js-speedTargetValue')[0] as HTMLElement;

        this._view = new AircraftSpeedView(contextView, valueView, targetValue);

        return this;
    }
}
