export class AircraftAltitudeView {
    private _$contextView: HTMLElement = null;
    private _$valueView: HTMLElement = null;
    private _$targetValue: HTMLElement = null;
    private _currentValue: number = 0;

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

    private _updateValue(nextValue: number): void {
        this._currentValue = nextValue;
    }
}
