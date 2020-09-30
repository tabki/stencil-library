import '../../stencil.core';
import { TextElementType } from "./types";
export declare class TruText {
    type: TextElementType;
    weight: string;
    spacing: string;
    transform: string;
    color: string;
    clickable: boolean;
    href: string;
    render(): JSX.Element;
}
