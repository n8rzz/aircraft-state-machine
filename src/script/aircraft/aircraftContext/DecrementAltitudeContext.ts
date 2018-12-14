import { ContextAbstract } from './ContextAbstract';
import { IContext } from '../IContext';
import { AircraftAltitudeContextEnum } from './AircraftAltitudeContextEnum';
import { NeutralAltitudeContext } from './NeutralAltitudeContext';

export class DecrementAltitudeContext extends ContextAbstract {
    constructor(model: IContext) {
        super(model);

        this.onEnter();
    }

    public getNextContext(): any {
        return NeutralAltitudeContext;
    }

    public onEnter(): void {
        super.onEnter();

        this._model.currentContext = AircraftAltitudeContextEnum.DecrementAltitudeContext;
    }

    public shouldMoveToNextContext(): boolean {
        super.shouldMoveToNextContext();

        return this._model.value <= this._model.target;
    }

    public update(): void {
        this._model.decrement();
    }
}
