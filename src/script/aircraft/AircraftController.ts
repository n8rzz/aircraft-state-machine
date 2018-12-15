import { AircraftAltitudeController } from './AircraftAltitudeController';
import { AircraftHeadingController } from './AircraftHeadingController';
import { AircraftSpeedController } from './AircraftSpeedController';

export class AircraftController {
    private _altitudeController: AircraftAltitudeController = null;
    private _headingController: AircraftHeadingController = null;
    private _speedController: AircraftSpeedController = null;
    private _$increaseAltitudeBtn: HTMLButtonElement = null;
    private _$decreaseAltitudeBtn: HTMLButtonElement = null;
    private _$turnLeftBtn: HTMLButtonElement = null;
    private _$turnRightBtn: HTMLButtonElement = null;
    private _$decreaseSpeedBtn: HTMLButtonElement = null;
    private _$increaseSpeedBtn: HTMLButtonElement = null;
    private _onClickDecreaseAltitudeHandler: (event: UIEvent) => void = this._onClickDecreaseAltitude.bind(this);
    private _onClickIncreaseAltitudeHandler: (event: UIEvent) => void = this._onClickIncreaseAltitude.bind(this);
    private _onClickTurnLeftHandler: (event: UIEvent) => void = this._onClickTurnLeft.bind(this);
    private _onClickTurnRightHandler: (event: UIEvent) => void = this._onClickTurnRight.bind(this);
    private _onClickDecreaseSpeedHandler: (event: UIEvent) => void = this._onClickDecreaseSpeed.bind(this);
    private _onClickIncreaseSpeedHandler: (event: UIEvent) => void = this._onClickIncreaseSpeed.bind(this);

    constructor() {
        return this._createChildren()
            ._setupHandlers();
    }

    public update(): void {
        this._altitudeController.update();
        this._headingController.update();
        this._speedController.update();
    }

    private _createChildren(): this {
        this._$decreaseAltitudeBtn = document.getElementsByClassName('js-btn-decreaseAltitude')[0] as HTMLButtonElement;
        this._$increaseAltitudeBtn = document.getElementsByClassName('js-btn-increaseAltitude')[0] as HTMLButtonElement;
        this._$turnLeftBtn = document.getElementsByClassName('js-btn-turnLeft')[0] as HTMLButtonElement;
        this._$turnRightBtn = document.getElementsByClassName('js-btn-turnRight')[0] as HTMLButtonElement;
        this._$decreaseSpeedBtn = document.getElementsByClassName('js-btn-decreaseSpeed')[0] as HTMLButtonElement;
        this._$increaseSpeedBtn = document.getElementsByClassName('js-btn-increaseSpeed')[0] as HTMLButtonElement;
        this._altitudeController = new AircraftAltitudeController();
        this._headingController = new AircraftHeadingController();
        this._speedController = new AircraftSpeedController();

        return this;
    }

    private _setupHandlers(): this {
        this._$decreaseAltitudeBtn.addEventListener('click', this._onClickDecreaseAltitudeHandler);
        this._$increaseAltitudeBtn.addEventListener('click', this._onClickIncreaseAltitudeHandler);
        this._$turnLeftBtn.addEventListener('click', this._onClickTurnLeftHandler);
        this._$turnRightBtn.addEventListener('click', this._onClickTurnRightHandler);
        this._$decreaseSpeedBtn.addEventListener('click', this._onClickDecreaseSpeedHandler);
        this._$increaseSpeedBtn.addEventListener('click', this._onClickIncreaseSpeedHandler);

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

    private _onClickDecreaseSpeed(event: UIEvent): void {
        event.preventDefault();

        this._speedController.decreaseSpeed();
    }
    private _onClickIncreaseSpeed(event: UIEvent): void {
        event.preventDefault();

        this._speedController.increaseSpeed();
    }
}
