export abstract class ViewAbstract {
    protected _$contextView: HTMLElement = null;
    protected _$valueView: HTMLElement = null;
    protected _$targetValue: HTMLElement = null;
    protected _currentValue: number = 0;

    constructor(contextView: HTMLElement, valueView: HTMLElement, targetValue: HTMLElement) {
        this._$contextView = contextView;
        this._$valueView = valueView;
        this._$targetValue = targetValue;
    }

    public update(currentContext: string, nextValue: number, targetValue: number): void {
        this._updateValue(nextValue);

        this._$contextView.innerText = currentContext;
        this._$valueView.innerText = String(this._currentValue);
        this._$targetValue.innerText = String(targetValue);
    }

    protected _updateValue(nextValue: number): void {
        this._currentValue = nextValue;
    }
}
