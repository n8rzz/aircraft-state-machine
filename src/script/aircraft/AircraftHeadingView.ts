import { ViewAbstract } from '../abstract/ViewAbstract';

export class AircraftHeadingView extends ViewAbstract {
    constructor(contextView: HTMLElement, valueView: HTMLElement, targetValue: HTMLElement) {
        super(contextView, valueView, targetValue);
    }
}
