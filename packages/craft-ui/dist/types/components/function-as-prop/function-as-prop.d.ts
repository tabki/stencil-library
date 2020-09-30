import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class FunctionAsProp {
    eventHandler: Function;
    testEvent: EventEmitter;
    emitDomEvent(): void;
    render(): JSX.Element;
}
