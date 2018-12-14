import { ModelAbstract } from './ModelAbstract';

export class AircraftHeadingModel extends ModelAbstract {
    constructor() {
        super('aircraftHeadingModel');
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
