import { FmsContextEnum } from './FmsContextEnum';
import { FmsContextOverride } from './FmsContextOverride';
import { IFmsOverrideContextAndTarget } from './IFmsOverrideContextAndTarget';
import { FmsView } from './FmsView';

export class FmsController {
    private _context: FmsContextEnum = null;
    private _$fmsModeControlBtnList: HTMLCollectionOf<Element> = null;
    private _view: FmsView = null;
    private _onChangeFmsHandler: (contextTargetOverrides: IFmsOverrideContextAndTarget[]) => void = null;
    private _onClickFmsModeControlHandler: (event: UIEvent) => void = this._onClickFmsModeControl.bind(this);

    constructor(onChangeFmsHandler: (contextTargetOverrides: IFmsOverrideContextAndTarget[]) => void) {
        this._onChangeFmsHandler = onChangeFmsHandler;
        this._context = FmsContextEnum.Apron;

        return this._createChildren()
            ._setupHandlers();
    }

    public update(): void {
        this.updateView();
    }

    public updateView(): void {
        this._view.update(this._context);
    }

    private _createChildren(): this {
        const $fmsContextView: HTMLElement = document.getElementsByClassName('js-fmsContextName')[0] as HTMLElement;
        this._$fmsModeControlBtnList = document.getElementsByClassName('js-btn-fmsModeControl');
        this._view = new FmsView($fmsContextView);

        return this;
    }

    private _setupHandlers(): this {
        for (let i = 0; i < this._$fmsModeControlBtnList.length; i++) {
            const element: Element = this._$fmsModeControlBtnList[i];

            element.addEventListener('click', this._onClickFmsModeControlHandler);
        }

        return this;
    }

    private _onClickFmsModeControl(event: UIEvent): void {
        event.preventDefault();

        const target: HTMLButtonElement = event.currentTarget as HTMLButtonElement;
        const nextModeName: FmsContextEnum = target.dataset.fmsMode as FmsContextEnum;
        const nextModeMap: IFmsOverrideContextAndTarget[] = FmsContextOverride[nextModeName];

        this._context = FmsContextEnum[nextModeName];
        this._onChangeFmsHandler(nextModeMap);
    }
}
