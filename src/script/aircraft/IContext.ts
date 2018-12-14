import { AircraftAltitudeContextEnum } from './aircraftContext/AircraftAltitudeContextEnum';

export interface IContext {
    currentContext: AircraftAltitudeContextEnum;
    target: number;
    value: number;
    increment: () => void;
    decrement: () => void;
    updateTarget: (targetModifier: number) => void;
}
