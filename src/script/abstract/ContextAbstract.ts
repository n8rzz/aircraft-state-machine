// tslint:disable
import { IModel } from './IModel';
import { ContextEnum } from './ContextEnum';

export abstract class ContextAbstract {
    protected _model: IModel = null;
    protected _name: string = '';

    constructor(model: IModel) {
        this._model = model;
    }

    public getNextContext(): ContextAbstract {
        return null;
    }

    public onEnter(nextContext: ContextEnum): void {
        console.log('+++ onEnter', ContextEnum[nextContext]);

        this._model.currentContext = nextContext;
    }

    public onExit(): void {
        console.log('--- onExit', ContextEnum[this._model.currentContext]);
    }

    public shouldMoveToNextContext(): boolean {
        // console.log(`${this._model.target}:${this._model.value}`, ContextEnum[this._model.currentContext]);

        return;
    }

    public update(): void {
        throw new Error('ContextAbstract#update not implemented');
    }
}
