import { IModel } from './IModel';
import { ContextEnum } from './ContextEnum';

export abstract class ModelAbstract implements IModel {
    public currentContext: ContextEnum = ContextEnum.NeutralAltitudeContext;
    public target: number = 0;
    public value: number = 0;

    protected _name: string = null;

    get contextName(): string {
        return ContextEnum[this.currentContext];
    }

    get currentValue(): number {
        return this.value;
    }

    constructor(name: string) {
        this._name = name;
    }

    public decrement(): void {
        return;
    }

    public increment(): void {
        return;
    }

    public updateTarget(targetModifier: number): void {
        this.target += targetModifier;
    }
}
