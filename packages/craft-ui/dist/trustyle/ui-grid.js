/*! Built with http://stenciljs.com */
const { h } = window.trustyle;

import ClassMap, { mapPropsToClasses } from './chunk1.js';

const _classMap = {
    testing: {
        true: "grid--testing"
    }
};
const classMap = new ClassMap(_classMap);

var classMapper = mapPropsToClasses("grid", classMap);
// MUST ORDERED FROM SMALLEST -> LARGEST
var GRID_BREAKPOINTS = [
    { key: "xs", query: "(max-width: 499px)" },
    { key: "sm", query: "(min-width: 500px)" },
    { key: "md", query: "(min-width: 700px)" },
    { key: "lg", query: "(min-width: 900px)" },
    { key: "xl", query: "(min-width: 1440px)" }
];
// forEach method, could be shipped as part of an Object Literal/Module
var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]); // passes back stuff we need
    }
};
function createGridItemArray(gridItemNodeList, totalColumns) {
    var gridItemArray = [];
    forEach(gridItemNodeList, function (index, gridItem) {
        var columnSize = gridItem.getAttribute("size");
        for (var i = 0; i < GRID_BREAKPOINTS.length; i++) {
            if (window.matchMedia(GRID_BREAKPOINTS[i].query).matches) {
                var sizeAtBreakpoint = gridItem.getAttribute(GRID_BREAKPOINTS[i].key);
                if (sizeAtBreakpoint) {
                    columnSize = sizeAtBreakpoint;
                }
            }
        }
        if (columnSize > totalColumns) {
            columnSize = totalColumns;
        }
        gridItemArray.push({
            element: gridItem,
            size: Number(columnSize)
        });
    }, this);
    return gridItemArray;
}
function sortGridItemsIntoRows(gridItemsArray, totalColumns) {
    var rows = [];
    var _gridItemsArray = gridItemsArray;
    var i = _gridItemsArray.length;
    while (i--) {
        let newRow = [];
        var totalRowSum = 0;
        var j = 0;
        while (totalRowSum < totalColumns) {
            if (!_gridItemsArray[j])
                break;
            totalRowSum += _gridItemsArray[j].size;
            if (totalRowSum <= totalColumns) {
                newRow.push(Object.assign({}, _gridItemsArray[j]));
            }
            j++;
        }
        if (newRow.length > 0)
            rows.push(newRow);
        _gridItemsArray.splice(0, newRow.length);
    }
    return rows;
}
function getGridItemRowPosition(row, currentIndex, gridItemColSize, totalColumns) {
    var gridItemRowPosition;
    var rowLastIndex = row.length - 1;
    switch (currentIndex) {
        case 0:
            gridItemRowPosition = "START";
            break;
        case rowLastIndex:
            gridItemRowPosition = "END";
            break;
        default:
            gridItemRowPosition = "MIDDLE";
            break;
    }
    if (totalColumns === gridItemColSize) {
        gridItemRowPosition = "FULL";
    }
    return gridItemRowPosition;
}
function calcGridItemWidth(columnSize, gutter, totalColumns) {
    /*
  
    consider 3 grid items in a row - each grid item will have a
    gutter between itself and the next grid item:
  
    | I | - | I | - | I |
  
    I = grid item
    - = grid gutter
  
  
    | I | | I | | I | - -
  
    if you line up an n number of grid items together, the total gutterSpace
    will equal (n - 1) * gutterSize
  
    However, we do not need to know the number of items in the row. Instead,
    we can just take the width of the grid (100% in this case), and subtract
    the maximum possible gutterSpace , which will be  (totalColumns - 1 ) * gutter
  
    what we are left with is the minimum available space  (minAvailableSpace):
  
    | I | | I | | I | ... C            <gutter space subtracted>  | <-- End of Row
    where   C = total number of grid columns
  
    this is also the total length of C number of columns with size of 1
    lined up together.
    this is because we have subtracted the max possible gutter space, meaning that
    the remaining space left would have to be occupied by 12 columns with a column
    size of 1.
  
    equation for minimumAvailableSpace is:
  
    minAvailableSpace = 100% -  (C - 1) * g
    where c = total columns
          g = gutter size
  
    to calculate the width of the item we would need to
    multiply the minAvailableSpace  value by (columnSize / totalColumns)
    and then add on the remaining gutters
    that were previously subtracted from the minimum available space.
  
    consider this:
  
    | I | - | I | - | I | - | I |
  
    |     I     | - |     I     |
  
    suppose we have two rows in a 4 column grid. the top row has 4 grid items
    inside that span a single column, whereas the bottom row has 2 grid items
    that have a size of 2.
  
    in the bottom row, the size of the item is the same as 2 grid items + 1 gutter
  
    therefore, to calculate the size of any grid item you would have this
    equation:
  
    Width = (A * (n / C)) + ((n -1) * g)
    where A = minAvailableSpace
          n = column size of grid item
          C = total columns
          g = gutter
  
    */
    var maxGutterSpace = (totalColumns - 1) * gutter;
    var minAvailableSpace = `(100% - ${maxGutterSpace}rem)`;
    return `calc( ${minAvailableSpace}
    * ${columnSize / totalColumns}
    + ${(columnSize - 1) * gutter}rem)`;
}
function setGridItemWidth(gridItemElement, columnSize, gutter, totalColumns) {
    var gridItemWidth = calcGridItemWidth(columnSize, gutter, totalColumns);
    gridItemElement.style.width = gridItemWidth;
}
function applyGutters(gridItem, gutter, isLastRow, gridItemRowPosition) {
    switch (true) {
        case gridItemRowPosition == "START":
        case gridItemRowPosition == "MIDDLE":
            gridItem.element.style.marginRight = `${gutter}rem`;
            gridItem.element.style.marginBottom = "0";
            break;
        case gridItemRowPosition == "END":
        case gridItemRowPosition == "FULL":
            gridItem.element.style.marginRight = "0";
    }
    if (!isLastRow) {
        gridItem.element.style.marginBottom = `${gutter}rem`;
    }
    return gridItem;
}
function applyWrapGrid(gridItemRows, gutter, totalColumns) {
    for (let currentRowIndex = 0; currentRowIndex < gridItemRows.length; currentRowIndex++) {
        var currentRow = gridItemRows[currentRowIndex];
        currentRow.forEach((gridItem, gridItemIndex) => {
            var gridItemSize = gridItem.size;
            var isLastRow = currentRowIndex + 1 == gridItemRows.length;
            var gridItemRowPosition = getGridItemRowPosition(currentRow, gridItemIndex, gridItemSize, totalColumns);
            setGridItemWidth(gridItem.element, gridItemSize, gutter, totalColumns);
            applyGutters(gridItem, gutter, isLastRow, gridItemRowPosition);
        });
    }
}
class UIGrid {
    constructor() {
        this.cols = 12;
        this.gutter = 1;
        this.wrap = true;
        this.padding = 0;
    }
    componentWillLoad() {
        this.registerBreakpointHandlers();
    }
    registerBreakpointHandlers() {
        for (let i = 0; i < GRID_BREAKPOINTS.length; i++) {
            window.matchMedia(GRID_BREAKPOINTS[i].query).addListener(breakpointsE => {
                this.renderGrid();
            });
        }
    }
    renderGrid() {
        var myNodeList = this.el.querySelectorAll("ui-grid-item");
        var gridItemArray = createGridItemArray(myNodeList, this.cols);
        var gridItemRows = sortGridItemsIntoRows(gridItemArray, this.cols);
        applyWrapGrid(gridItemRows, this.gutter, this.cols);
    }
    render() {
        this.renderGrid();
        var className = classMapper(this);
        return (h("div", { class: className },
            h("slot", null)));
    }
    static get is() { return "ui-grid"; }
    static get properties() { return { "cols": { "type": Number, "attr": "cols" }, "el": { "elementRef": true }, "gutter": { "type": Number, "attr": "gutter" }, "padding": { "type": Number, "attr": "padding" }, "testing": { "type": Boolean, "attr": "testing" }, "wrap": { "type": Boolean, "attr": "wrap" } }; }
    static get style() { return "/*\n  BREAKPOINTS\n*/\n/**\n * Spacing / Font sizes\n */\n/**\n * General\n */\n/**\n * Theme / Colours\n */\n/*\n  Main list of all colours\n*/\n\@keyframes pulse-animation--primary {\n  0% {\n    box-shadow: 0 0 0 0 rgba(43, 181, 253, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(43, 181, 253, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(43, 181, 253, 0.5); } }\n\n\@keyframes pulse-animation--red {\n  0% {\n    box-shadow: 0 0 0 0 rgba(251, 0, 74, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(251, 0, 74, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(251, 0, 74, 0.5); } }\n\n\@keyframes pulse-animation--green {\n  0% {\n    box-shadow: 0 0 0 0 rgba(32, 243, 181, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(32, 243, 181, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(32, 243, 181, 0.5); } }\n\n\@keyframes pulse-animation--blue {\n  0% {\n    box-shadow: 0 0 0 0 rgba(41, 121, 255, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(41, 121, 255, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(41, 121, 255, 0.5); } }\n\n\@keyframes pulse-animation--orange {\n  0% {\n    box-shadow: 0 0 0 0 rgba(253, 126, 9, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(253, 126, 9, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(253, 126, 9, 0.5); } }\n\n\@keyframes pulse-animation--yellow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 220, 40, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(255, 220, 40, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(255, 220, 40, 0.5); } }\n\n\@keyframes pulse-animation--darkpurple {\n  0% {\n    box-shadow: 0 0 0 0 rgba(54, 10, 61, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(54, 10, 61, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(54, 10, 61, 0.5); } }\n\n\@keyframes pulse-animation--primary {\n  0% {\n    box-shadow: 0 0 0 0 rgba(43, 181, 253, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(43, 181, 253, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(43, 181, 253, 0.5); } }\n\n\@keyframes pulse-animation--red {\n  0% {\n    box-shadow: 0 0 0 0 rgba(251, 0, 74, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(251, 0, 74, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(251, 0, 74, 0.5); } }\n\n\@keyframes pulse-animation--green {\n  0% {\n    box-shadow: 0 0 0 0 rgba(32, 243, 181, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(32, 243, 181, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(32, 243, 181, 0.5); } }\n\n\@keyframes pulse-animation--blue {\n  0% {\n    box-shadow: 0 0 0 0 rgba(41, 121, 255, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(41, 121, 255, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(41, 121, 255, 0.5); } }\n\n\@keyframes pulse-animation--orange {\n  0% {\n    box-shadow: 0 0 0 0 rgba(253, 126, 9, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(253, 126, 9, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(253, 126, 9, 0.5); } }\n\n\@keyframes pulse-animation--yellow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 220, 40, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(255, 220, 40, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(255, 220, 40, 0.5); } }\n\n\@keyframes pulse-animation--darkpurple {\n  0% {\n    box-shadow: 0 0 0 0 rgba(54, 10, 61, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(54, 10, 61, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(54, 10, 61, 0.5); } }\n\n/*\n  Main list of all colours\n*/\n.grid {\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.grid-item {\n  width: 100%;\n  height: 100%; }\n\n.grid--testing {\n  border: 2px dashed #ad63ff; }\n  .grid--testing > ui-grid-item {\n    border: 2px solid #360a3d; }"; }
}

export { UIGrid as UiGrid };
