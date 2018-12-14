import { AircraftAltitudeController } from './AircraftAltitudeController';
import { AircraftHeadingController } from './AircraftHeadingController';

export class AircraftController {
    private _altitudeController: AircraftAltitudeController = null;
    private _headingController: AircraftHeadingController = null;
    private _$increaseAltitudeBtn: HTMLButtonElement = null;
    private _$decreaseAltitudeBtn: HTMLButtonElement = null;
    private _$turnLeftBtn: HTMLButtonElement = null;
    private _$turnRightBtn: HTMLButtonElement = null;
    private _onClickDecreaseAltitudeHandler: (event: UIEvent) => void = this._onClickDecreaseAltitude.bind(this);
    private _onClickIncreaseAltitudeHandler: (event: UIEvent) => void = this._onClickIncreaseAltitude.bind(this);
    private _onClickTurnLeftHandler: (event: UIEvent) => void = this._onClickTurnLeft.bind(this);
    private _onClickTurnRightHandler: (event: UIEvent) => void = this._onClickTurnRight.bind(this);

    constructor() {
        return this._createChildren()
            ._setupHandlers();
    }

    public update(): void {
        this._altitudeController.update();
        this._headingController.update();
    }

    private _createChildren(): this {
        this._$decreaseAltitudeBtn = document.getElementsByClassName('js-btn-decrease')[0] as HTMLButtonElement;
        this._$increaseAltitudeBtn = document.getElementsByClassName('js-btn-increase')[0] as HTMLButtonElement;
        this._$turnLeftBtn = document.getElementsByClassName('js-btn-turnLeft')[0] as HTMLButtonElement;
        this._$turnRightBtn = document.getElementsByClassName('js-btn-turnRight')[0] as HTMLButtonElement;
        this._altitudeController = new AircraftAltitudeController();
        this._headingController = new AircraftHeadingController();

        return this;
    }

    private _setupHandlers(): this {
        this._$decreaseAltitudeBtn.addEventListener('click', this._onClickDecreaseAltitudeHandler);
        this._$increaseAltitudeBtn.addEventListener('click', this._onClickIncreaseAltitudeHandler);
        this._$turnLeftBtn.addEventListener('click', this._onClickTurnLeftHandler);
        this._$turnRightBtn.addEventListener('click', this._onClickTurnRightHandler);

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

    private _onClickTurnLeft(event: UIEvent): void {
        event.preventDefault();

        this._headingController.turnLeft();
    }

    private _onClickTurnRight(event: UIEvent): void {
        event.preventDefault();

        this._headingController.turnRight();
    }
}
