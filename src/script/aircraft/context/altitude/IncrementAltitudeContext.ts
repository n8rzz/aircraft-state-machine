import { ContextAbstract } from '../ContextAbstract';
import { IContext } from '../../IContext';
import { ContextEnum } from '../ContextEnum';
import { NeutralAltitudeContext } from './NeutralAltitudeContext';

export class IncrementAltitudeContext extends ContextAbstract {
    constructor(model: IContext) {
        super(model);

        this.onEnter();
    }

    public getNextContext(): any {
        return NeutralAltitudeContext;
    }

    public onEnter(): void {
        super.onEnter();

        this._model.currentContext = ContextEnum.IncrementAltitudeContext;
    }

    public shouldMoveToNextContext(): boolean {
        super.shouldMoveToNextContext();

        return Math.abs(this._model.value) >= this._model.target;
    }

    public update(): void {
        this._model.increment();
    }
}
