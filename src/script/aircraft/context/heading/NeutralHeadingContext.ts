import { ContextAbstract } from '../ContextAbstract';
import { IContext } from '../../IContext';
import { ContextEnum } from '../ContextEnum';

export class NeutralHeadingContext extends ContextAbstract {
    constructor(model: IContext) {
        super(model);

        this.onEnter();
    }

    public getNextContext(): any {
        return NeutralHeadingContext;
    }

    public onEnter(): void {
        super.onEnter();

        this._model.currentContext = ContextEnum.NeutralHeadingContext;
    }

    public shouldMoveToNextContext(): boolean {
        super.shouldMoveToNextContext();

        return false;
    }

    public update(): void {
        return;
    }
}
