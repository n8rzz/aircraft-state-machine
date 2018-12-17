import { FmsContextEnum } from './FmsContextEnum';
import { DecrementAltitudeContext } from '../context/altitude/DecrementAltitudeContext';
import { NeutralAltitudeContext } from '../context/altitude/NeutralAltitudeContext';
import { IncrementAltitudeContext } from '../context/altitude/IncrementAltitudeContext';
import { NeutralHeadingContext } from '../context/heading/NeutralHeadingContext';
import { TurnLeftHeadingContext } from '../context/heading/TurnLeftHeadingContext';
import { DecreaseSpeedContext } from '../context/speed/DecreaseSpeedContext';
import { NeutralSpeedContext } from '../context/speed/NeutralSpeedContext';
import { IncreaseSpeedContext } from '../context/speed/IncreaseSpeedContext';
import { IFmsOverrideContextAndTarget } from './IFmsOverrideContextAndTarget';

export const FmsContextOverride: {[key: string]: IFmsOverrideContextAndTarget[]} = {
    [FmsContextEnum.Apron]: [
        {
            context: NeutralAltitudeContext,
            target: 0,
        },
        {
            context: NeutralHeadingContext,
            target: 0,
        },
        {
            context: NeutralSpeedContext,
            target: 0,
        },
    ],
    [FmsContextEnum.Taxi]: [
        {
            context: NeutralAltitudeContext,
            target: 0,
        },
        {
            context: NeutralHeadingContext,
            target: 0,
        },
        {
            context: NeutralSpeedContext,
            target: 0,
        },
    ],
    [FmsContextEnum.Waiting]: [
        {
            context: NeutralAltitudeContext,
            target: 0,
        },
        {
            context: NeutralHeadingContext,
            target: 0,
        },
        {
            context: NeutralSpeedContext,
            target: 0,
        },
    ],
    [FmsContextEnum.Takeoff]: [
        {
            context: IncrementAltitudeContext,
            target: 5000,
        },
        {
            context: NeutralHeadingContext,
            target: 0,
        },
        {
            context: IncreaseSpeedContext,
            target: 250,
        },
    ],
    [FmsContextEnum.Climb]: [
        {
            context: IncrementAltitudeContext,
            target: 5000,
        },
        {
            context: null,
            target: null,
        },
        {
            context: IncreaseSpeedContext,
            target: 250,
        },
    ],
    [FmsContextEnum.Cruise]: [
        {
            context: NeutralAltitudeContext,
            target: null,
        },
        {
            context: null,
            target: null,
        },
        {
            context: null,
            target: null,
        },
    ],
    [FmsContextEnum.Hold]: [
        {
            context: null,
            target: null,
        },
        {
            context: TurnLeftHeadingContext,
            target: 180,
        },
        {
            context: null,
            target: null,
        },
    ],
    [FmsContextEnum.Descent]: [
        {
            context: DecrementAltitudeContext,
            target: 5000,
        },
        {
            context: null,
            target: null,
        },
        {
            context: DecreaseSpeedContext,
            target: 240,
        },
    ],
    [FmsContextEnum.Approach]: [
        {
            context: DecrementAltitudeContext,
            target: 3000,
        },
        {
            context: null,
            target: null,
        },
        {
            context: DecreaseSpeedContext,
            target: 220,
        },
    ],
    [FmsContextEnum.Landing]: [
        {
            context: DecrementAltitudeContext,
            target: 0,
        },
        {
            context: NeutralHeadingContext,
            target: 0,
        },
        {
            context: DecreaseSpeedContext,
            target: 0,
        },
    ],
};
