import { ControllerAbstract } from '../abstract/ControllerAbstract';
import { AircraftAltitudeModel } from './AircraftAltitudeModel';
import { AircraftAltitudeView } from './AircraftAltitudeView';
import { DecrementAltitudeContext } from './context/altitude/DecrementAltitudeContext';
import { IncrementAltitudeContext } from './context/altitude/IncrementAltitudeContext';
import { NeutralAltitudeContext } from './context/altitude/NeutralAltitudeContext';

export class AircraftAltitudeController extends ControllerAbstract {
    constructor() {
        super('aircraftAltitudeController');

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

    private _createChildren(): this {
        const contextView = document.getElementsByClassName('js-altitudeContextName')[0] as HTMLElement;
        const valueView = document.getElementsByClassName('js-altitudeCurrentValue')[0] as HTMLElement;
        const targetValue = document.getElementsByClassName('js-altitudeTargetValue')[0] as HTMLElement;

        this._view = new AircraftAltitudeView(contextView, valueView, targetValue);

        return this;
    }
}
