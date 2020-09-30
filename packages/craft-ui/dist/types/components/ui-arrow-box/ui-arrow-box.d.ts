import '../../stencil.core';
export declare class UIArrowBox {
    placement: string;
    color: string;
    padding: number;
    el: HTMLElement;
    arrowDirection: string;
    getArrowDirection(): any;
    setArrowDirection(): void;
    componentDidLoad(): void;
    watchPlacement(): void;
    getArrowElement(): Element;
    render(): JSX.Element;
}
