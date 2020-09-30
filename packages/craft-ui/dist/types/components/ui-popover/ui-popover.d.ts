import '../../stencil.core';
export declare class UIPopover {
    placement: string;
    trigger: string;
    el: HTMLElement;
    popperInstance: any;
    popperPlacement: any;
    triggerEl: HTMLElement;
    popoverContainerEl: HTMLElement;
    popoverEl: HTMLElement;
    isVisable: boolean;
    initState(): void;
    createPopper(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    registerMouseEnterLeaveEvents(): void;
    registerMouseClickEvents(): void;
    componentDidLoad(): void;
    render(): JSX.Element;
}
