import { AircraftAltitudeController } from './AircraftAltitudeController';
import { AircraftHeadingController } from './AircraftHeadingController';
import { AircraftSpeedController } from './AircraftSpeedController';
import { FmsController } from './fms/FmsController';
import { IFmsOverrideContextAndTarget } from './fms/IFmsOverrideContextAndTarget';

export class AircraftController {
    private _fmsController: FmsController = null;
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
    private _onChangeFmsModeHandler: (contextTargetOverrides: IFmsOverrideContextAndTarget[]) => void = this._onChangeFmsMode.bind(this);

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
        this._fmsController = new FmsController(this._onChangeFmsModeHandler);
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

    private _onChangeFmsMode(contextTargetOverrides: IFmsOverrideContextAndTarget[]): void {
        // console.log('_onChangeFmsMode', contextTargetOverrides);

        const [
            altitudeOverride,
            headingOverride,
            speedOverride,
        ]: IFmsOverrideContextAndTarget[] = contextTargetOverrides;

        this._altitudeController.overrideContextAndTarget(altitudeOverride.context, altitudeOverride.target);
        this._headingController.overrideContextAndTarget(headingOverride.context, headingOverride.target);
        this._speedController.overrideContextAndTarget(speedOverride.context, speedOverride.target);
        this._altitudeController.updateView();
        this._headingController.updateView();
        this._speedController.updateView();
    }

    private _onClickDecreaseAltitude(event: UIEvent): void {
        event.preventDefault();

        this._altitudeController.decreaseAltitude();
        this._altitudeController.updateView();
    }

    private _onClickIncreaseAltitude(event: UIEvent): void {
        event.preventDefault();

        this._altitudeController.increaseAltitude();
        this._altitudeController.updateView();
    }

    private _onClickTurnLeft(event: UIEvent): void {
        event.preventDefault();

        this._headingController.turnLeft();
        this._headingController.updateView();
    }

    private _onClickTurnRight(event: UIEvent): void {
        event.preventDefault();

        this._headingController.turnRight();
        this._headingController.updateView();
    }

    private _onClickDecreaseSpeed(event: UIEvent): void {
        event.preventDefault();

        this._speedController.decreaseSpeed();
        this._speedController.updateView();
    }
    private _onClickIncreaseSpeed(event: UIEvent): void {
        event.preventDefault();

        this._speedController.increaseSpeed();
        this._speedController.updateView();
    }
}
