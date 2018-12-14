import { ContextAbstract } from '../ContextAbstract';
import { IContext } from '../../IContext';
import { ContextEnum } from '../ContextEnum';
import { NeutralHeadingContext } from './NeutralHeadingContext';

export class TurnRightHeadingContext extends ContextAbstract {
    constructor(model: IContext) {
        super(model);

        this.onEnter();
    }

    public getNextContext(): any {
        return NeutralHeadingContext;
    }

    public onEnter(): void {
        super.onEnter();

        this._model.currentContext = ContextEnum.TurnRightHeadingContext;
    }

    public shouldMoveToNextContext(): boolean {
        super.shouldMoveToNextContext();

        return Math.abs(this._model.value) >= Math.abs(this._model.target);
    }

    public update(): void {
        this._model.increment();
    }
}
