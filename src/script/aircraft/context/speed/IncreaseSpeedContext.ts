import { ContextAbstract } from '../../../abstract/ContextAbstract';
import { IModel } from '../../../abstract/IModel';
import { ContextEnum } from '../../../abstract/ContextEnum';
import { NeutralSpeedContext } from './NeutralSpeedContext';

export class IncreaseSpeedContext extends ContextAbstract {
    constructor(model: IModel) {
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
