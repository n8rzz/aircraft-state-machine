import { ContextAbstract } from './context/ContextAbstract';
import { ModelAbstract } from './ModelAbstract';
import { ViewAbstract } from './ViewAbstract';

export abstract class ControllerAbstract {
    protected _context: ContextAbstract = null;
    protected _model: ModelAbstract = null;
    protected _name: string = null;
    protected _view: ViewAbstract = null;

    constructor(name: string) {
        this._name = name;
    }

    public update(): void {
        this._context.update();
        this._view.update(this._model.contextName, this._model.currentValue, this._model.target);

        if (this._context.shouldMoveToNextContext()) {
            this.updateContext(this._context.getNextContext());
        }
    }

    public updateContext(NextContext: any): void {
        if (this._context instanceof NextContext) {
            return;
        }

        this._context.onExit();
        this._context = new NextContext(this._model);
    }
}
