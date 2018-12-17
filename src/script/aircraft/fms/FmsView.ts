export class FmsView {
    private _$contextView: HTMLElement = null;

    constructor(contextView: HTMLElement) {
        this._$contextView = contextView;
    }

    public update(currentContext: string): void {
        this._$contextView.innerText = currentContext;
    }
}
