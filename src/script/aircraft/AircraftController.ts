import { AircraftAltitudeController } from './AircraftAltitudeController';

export class AircraftController {
    private _altitudeController: AircraftAltitudeController = null;
    private _$increaseAltitudeBtn: HTMLButtonElement = null;
    private _$decreaseAltitudeBtn: HTMLButtonElement = null;
    private _onClickDecreaseAltitudeHandler: (event: UIEvent) => void = this._onClickDecreaseAltitude.bind(this);
    private _onClickIncreaseAltitudeHandler: (event: UIEvent) => void = this._onClickIncreaseAltitude.bind(this);

    constructor() {
        return this._createChildren()
            ._setupHandlers();
    }

    public update(): void {
        this._altitudeController.update();
    }

    private _createChildren(): this {
        this._$decreaseAltitudeBtn = document.getElementsByClassName('js-btn-decrease')[0] as HTMLButtonElement;
        this._$increaseAltitudeBtn = document.getElementsByClassName('js-btn-increase')[0] as HTMLButtonElement;
        this._altitudeController = new AircraftAltitudeController();

        return this;
    }

    private _setupHandlers(): this {
        this._$decreaseAltitudeBtn.addEventListener('click', this._onClickDecreaseAltitudeHandler);
        this._$increaseAltitudeBtn.addEventListener('click', this._onClickIncreaseAltitudeHandler);

        return this;
    }

    private _onClickDecreaseAltitude(event: UIEvent): void {
        event.preventDefault();

        this._altitudeController.decreaseAltitude();
    }

    private _onClickIncreaseAltitude(event: UIEvent): void {
        event.preventDefault();

        this._altitudeController.increaseAltitude();
    }
}
