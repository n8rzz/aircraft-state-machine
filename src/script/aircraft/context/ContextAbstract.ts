import { IContext } from '../IContext';

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
        console.log('onEnter');
    }

    public onExit(): void {
        console.log('onExit');
    }

    public shouldMoveToNextContext(): boolean {
        console.log('T', this._model.target, this._model.value);

        return;
    }

    public update(): void {
        throw new Error('ContextAbstract#update not implemented');
    }
}
