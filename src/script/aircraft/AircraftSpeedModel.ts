import { ModelAbstract } from './ModelAbstract';

export class AircraftSpeedModel extends ModelAbstract {
    constructor() {
        super('aircraftSpeedModel');
    }

    public decrement(): void {
        this.value -= 1;
    }

    public increment(): void {
        this.value += 1;
    }

    public updateTarget(targetModifier: number): void {
        this.target += targetModifier;
    }
}
