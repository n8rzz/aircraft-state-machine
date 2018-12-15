import { ContextAbstract } from '../../../abstract/ContextAbstract';
import { IModel } from '../../../abstract/IModel';
import { ContextEnum } from '../../../abstract/ContextEnum';
import { NeutralAltitudeContext } from './NeutralAltitudeContext';

export class IncrementAltitudeContext extends ContextAbstract {
    constructor(model: IModel) {
        super(model);

        this.onEnter();
    }

    public getNextContext(): any {
        return NeutralAltitudeContext;
    }

    public onEnter(): void {
        super.onEnter(ContextEnum.IncrementAltitudeContext);
    }

    public shouldMoveToNextContext(): boolean {
        super.shouldMoveToNextContext();

        return Math.abs(this._model.value) >= Math.abs(this._model.target);
    }

    public update(): void {
        this._model.increment();
    }
}
