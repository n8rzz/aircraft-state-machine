import { AircraftController } from './aircraft/AircraftController';

export class App {
    private _aircraftController: AircraftController = null;

    constructor() {
        this._aircraftController = new AircraftController();
    }

    public update(): void {
        this._aircraftController.update();
    }
}
