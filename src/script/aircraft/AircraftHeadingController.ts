import { ControllerAbstract } from '../abstract/ControllerAbstract';
import { AircraftHeadingModel } from './AircraftHeadingModel';
import { AircraftHeadingView } from './AircraftHeadingView';
import { TurnLeftHeadingContext } from './context/heading/TurnLeftHeadingContext';
import { TurnRightHeadingContext } from './context/heading/TurnRightHeadingContext';
import { NeutralHeadingContext } from './context/heading/NeutralHeadingContext';

export class AircraftHeadingController extends ControllerAbstract {
    constructor() {
        super('aircraftHeadingController');

        this._model = new AircraftHeadingModel();
        this._context = new NeutralHeadingContext(this._model);

        return this._createChildren();
    }

    public turnLeft(): void {
        const nextTarget: number = -5;

        this.updateContext(TurnLeftHeadingContext);
        this._model.updateTarget(nextTarget);
    }

    public turnRight(): void {
        const nextTarget: number = 5;

        this.updateContext(TurnRightHeadingContext);
        this._model.updateTarget(nextTarget);
    }

    private _createChildren(): this {
        const contextView = document.getElementsByClassName('js-headingContextName')[0] as HTMLElement;
        const valueView = document.getElementsByClassName('js-headingCurrentValue')[0] as HTMLElement;
        const targetValue = document.getElementsByClassName('js-headingTargetValue')[0] as HTMLElement;

        this._view = new AircraftHeadingView(contextView, valueView, targetValue);

        return this;
    }
}
