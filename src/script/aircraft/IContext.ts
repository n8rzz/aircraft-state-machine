import { ContextEnum } from './context/ContextEnum';

export interface IContext {
    currentContext: ContextEnum;
    target: number;
    value: number;
    increment: () => void;
    decrement: () => void;
    updateTarget: (targetModifier: number) => void;
}
