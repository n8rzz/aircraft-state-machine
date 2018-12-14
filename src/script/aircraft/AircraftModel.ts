import { IContext } from './IContext';
import { AircraftAltitudeContextEnum } from './aircraftContext/AircraftAltitudeContextEnum';

export class AircraftModel implements IContext {
    public currentContext: AircraftAltitudeContextEnum = AircraftAltitudeContextEnum.NeutralAltitudeContext;
    public target: number = 0;
    public value: number = 0;

    get contextName(): string {
        return AircraftAltitudeContextEnum[this.currentContext];
    }

    get currentValue(): number {
        return this.value;
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
