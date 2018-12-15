import { ContextAbstract } from '../../../abstract/ContextAbstract';
import { IModel } from '../../../abstract/IModel';
import { ContextEnum } from '../../../abstract/ContextEnum';

export class NeutralAltitudeContext extends ContextAbstract {
    constructor(model: IModel) {
        super(model);

        this.onEnter();
    }

    public getNextContext(): any {
        return NeutralAltitudeContext;
    }

    public onEnter(): void {
        super.onEnter(ContextEnum.NeutralAltitudeContext);
    }

    public shouldMoveToNextContext(): boolean {
        super.shouldMoveToNextContext();

        return false;
    }

    public update(): void {
        return;
    }
}
