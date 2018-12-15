import { ContextAbstract } from '../ContextAbstract';
import { IContext } from '../../IContext';
import { ContextEnum } from '../ContextEnum';
import { NeutralSpeedContext } from './NeutralSpeedContext';

export class IncreaseSpeedContext extends ContextAbstract {
    constructor(model: IContext) {
        super(model);

        this.onEnter();
    }

    public getNextContext(): any {
        return NeutralSpeedContext;
    }

    public onEnter(): void {
        super.onEnter(ContextEnum.IncreaseSpeedContext);
    }

    public shouldMoveToNextContext(): boolean {
        super.shouldMoveToNextContext();

        return Math.abs(this._model.value) >= this._model.target;
    }

    public update(): void {
        this._model.increment();
    }
}
