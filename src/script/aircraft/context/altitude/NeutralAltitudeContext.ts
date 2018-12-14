import { ContextAbstract } from '../ContextAbstract';
import { IContext } from '../../IContext';
import { ContextEnum } from '../ContextEnum';

export class NeutralAltitudeContext extends ContextAbstract {
    constructor(model: IContext) {
        super(model);

        this.onEnter();
    }

    public getNextContext(): any {
        return NeutralAltitudeContext;
    }

    public onEnter(): void {
        super.onEnter();

        this._model.currentContext = ContextEnum.NeutralAltitudeContext;
    }

    public shouldMoveToNextContext(): boolean {
        super.shouldMoveToNextContext();

        return false;
    }

    public update(): void {
        return;
    }
}
