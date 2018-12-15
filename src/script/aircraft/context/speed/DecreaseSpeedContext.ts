import { ContextAbstract } from '../ContextAbstract';
import { IContext } from '../../IContext';
import { ContextEnum } from '../ContextEnum';
import { NeutralSpeedContext } from './NeutralSpeedContext';

export class DecreaseSpeedContext extends ContextAbstract {
    constructor(model: IContext) {
        super(model);

        this.onEnter();
    }

    public getNextContext(): any {
        return NeutralSpeedContext;
    }

    public onEnter(): void {
        super.onEnter(ContextEnum.DecreaseSpeedContext);
    }

    public shouldMoveToNextContext(): boolean {
        super.shouldMoveToNextContext();

        return this._model.value <= this._model.target;
    }

    public update(): void {
        this._model.decrement();
    }
}
