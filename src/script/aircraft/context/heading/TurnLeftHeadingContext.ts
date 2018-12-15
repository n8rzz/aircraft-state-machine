import { ContextAbstract } from '../../../abstract/ContextAbstract';
import { IModel } from '../../../abstract/IModel';
import { ContextEnum } from '../../../abstract/ContextEnum';
import { NeutralHeadingContext } from './NeutralHeadingContext';

export class TurnLeftHeadingContext extends ContextAbstract {
    constructor(model: IModel) {
        super(model);

        this.onEnter();
    }

    public getNextContext(): any {
        return NeutralHeadingContext;
    }

    public onEnter(): void {
        super.onEnter(ContextEnum.TurnLeftHeadingContext);
    }

    public shouldMoveToNextContext(): boolean {
        super.shouldMoveToNextContext();

        return this._model.value <= this._model.target;
    }

    public update(): void {
        this._model.decrement();
    }
}
