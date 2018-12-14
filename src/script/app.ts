import { AircraftController } from './aircraft/AircraftController';

export class App {
    private _counterController: AircraftController = null;

    constructor() {
        this._counterController = new AircraftController();
    }

    public update(): void {
        this._counterController.update();
    }
}
