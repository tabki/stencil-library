import '../../stencil.core';
export declare function parseBreakpointStr(breakpointString: any): any;
export declare function createGridItemArray(gridItemNodeList: NodeList, totalColumns: any): any[];
export declare function sortGridItemsIntoRows(gridItemsArray: any, totalColumns: any): any[];
export declare function getGridItemRowPosition(row: any, currentIndex: any, gridItemColSize: any, totalColumns: any): any;
export declare function calcGridItemWidth(columnSize: any, gutter: any, totalColumns: any): string;
export declare function setGridItemWidth(gridItemElement: any, columnSize: any, gutter: any, totalColumns: any): void;
export declare function applyGutters(gridItem: any, gutter: any, isLastRow: any, gridItemRowPosition: any): any;
export declare function applyWrapGrid(gridItemRows: any, gutter: any, totalColumns: any): void;
export declare class UIGrid {
    el: HTMLElement;
    cols: number;
    gutter: number;
    wrap: boolean;
    padding: number;
    testing: boolean;
    componentWillLoad(): void;
    registerBreakpointHandlers(): void;
    renderGrid(): void;
    render(): JSX.Element;
}
