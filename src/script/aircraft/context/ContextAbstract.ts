// tslint:disable
import { IContext } from '../IContext';
import { ContextEnum } from './ContextEnum';

export abstract class ContextAbstract {
    protected _model: IContext = null;
    protected _name: string = '';

    constructor(model: IContext) {
        this._model = model;
    }

    public getNextContext(): ContextAbstract {
        return null;
    }

    public onEnter(): void {
        console.log('+++ onEnter', ContextEnum[this._model.currentContext]);
    }

    public onExit(): void {
        console.log('--- onExit', ContextEnum[this._model.currentContext]);
    }

    public shouldMoveToNextContext(): boolean {
        console.log(`${this._model.target}:${this._model.value}`, ContextEnum[this._model.currentContext]);

        return;
    }

    public update(): void {
        throw new Error('ContextAbstract#update not implemented');
    }
}
