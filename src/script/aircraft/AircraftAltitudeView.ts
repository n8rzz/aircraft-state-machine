export class AircraftAltitudeView {
    private _$contextView: HTMLElement = null;
    private _$currentValueView: HTMLElement = null;
    private _$altitudeTargetValue: HTMLElement = null;
    private _currentValue: number = 0;

    constructor(contextView: HTMLElement, currentValueView: HTMLElement, altitudeTargetValue: HTMLElement) {
        this._$contextView = contextView;
        this._$currentValueView = currentValueView;
        this._$altitudeTargetValue = altitudeTargetValue;
    }

    public update(currentContext: string, nextValue: number, currentTargetValue: number): void {
        this._updateCurrentValue(nextValue);

        this._$contextView.innerText = currentContext;
        this._$currentValueView.innerText = String(this._currentValue);
        this._$altitudeTargetValue.innerText = String(currentTargetValue);
    }

    private _updateCurrentValue(nextValue: number): void {
        this._currentValue = nextValue;
    }
}
