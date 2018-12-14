import {ModelAbstract} from './ModelAbstract';

export class AircraftAltitudeModel extends ModelAbstract {
    constructor() {
        super('AircraftModel');
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
