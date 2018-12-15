import { ContextEnum } from './ContextEnum';

export interface IModel {
    currentContext: ContextEnum;
    target: number;
    value: number;
    decrement: () => void;
    increment: () => void;
    updateTarget: (targetModifier: number) => void;
}
