import { ContextAbstract } from '../ContextAbstract';
import { IContext } from '../../IContext';
import { ContextEnum } from '../ContextEnum';

export class NeutralSpeedContext extends ContextAbstract {
    constructor(model: IContext) {
        super(model);

        this.onEnter();
    }

    public getNextContext(): any {
        return NeutralSpeedContext;
    }

    public onEnter(): void {
        super.onEnter(ContextEnum.NeutralSpeedContext);
    }

    public shouldMoveToNextContext(): boolean {
        super.shouldMoveToNextContext();

        return false;
    }

    public update(): void {
        return;
    }
}
