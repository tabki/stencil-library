/*! Built with http://stenciljs.com */
const { h } = window.trustyle;

import { mapPropsToClasses } from './chunk3.js';

const classMap = {
    line: {
        none: "divider-style--none",
        normal: "divider-style--normal",
        dashed: "divider-style--dashed"
    }
};

var classMapper = mapPropsToClasses("divider", classMap);
class UIDivider {
    constructor() {
        this.line = "normal";
        this.padding = 0;
        this.height = 1;
    }
    render() {
        var className = classMapper(this);
        return (h("hr", { class: className, style: {
                paddingLeft: `${this.padding}rem`,
                marginTop: `${this.height}rem`
            } },
            h("div", { class: "divider__content" }, this.label)));
    }
    static get is() { return "ui-divider"; }
    static get properties() { return { "height": { "type": Number, "attr": "height" }, "label": { "type": String, "attr": "label" }, "line": { "type": String, "attr": "line" }, "padding": { "type": Number, "attr": "padding" } }; }
    static get style() { return "/*\n  BREAKPOINTS\n*/\n/**\n * Spacing / Font sizes\n */\n/**\n * General\n */\n/**\n * Theme / Colours\n */\n/*\n  Main list of all colours\n*/\n\@keyframes pulse-animation--primary {\n  0% {\n    box-shadow: 0 0 0 0 rgba(43, 181, 253, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(43, 181, 253, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(43, 181, 253, 0.5); } }\n\n\@keyframes pulse-animation--red {\n  0% {\n    box-shadow: 0 0 0 0 rgba(251, 0, 74, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(251, 0, 74, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(251, 0, 74, 0.5); } }\n\n\@keyframes pulse-animation--green {\n  0% {\n    box-shadow: 0 0 0 0 rgba(32, 243, 181, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(32, 243, 181, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(32, 243, 181, 0.5); } }\n\n\@keyframes pulse-animation--blue {\n  0% {\n    box-shadow: 0 0 0 0 rgba(41, 121, 255, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(41, 121, 255, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(41, 121, 255, 0.5); } }\n\n\@keyframes pulse-animation--orange {\n  0% {\n    box-shadow: 0 0 0 0 rgba(253, 126, 9, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(253, 126, 9, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(253, 126, 9, 0.5); } }\n\n\@keyframes pulse-animation--yellow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 220, 40, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(255, 220, 40, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(255, 220, 40, 0.5); } }\n\n\@keyframes pulse-animation--darkpurple {\n  0% {\n    box-shadow: 0 0 0 0 rgba(54, 10, 61, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(54, 10, 61, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(54, 10, 61, 0.5); } }\n\n\@keyframes pulse-animation--primary {\n  0% {\n    box-shadow: 0 0 0 0 rgba(43, 181, 253, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(43, 181, 253, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(43, 181, 253, 0.5); } }\n\n\@keyframes pulse-animation--red {\n  0% {\n    box-shadow: 0 0 0 0 rgba(251, 0, 74, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(251, 0, 74, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(251, 0, 74, 0.5); } }\n\n\@keyframes pulse-animation--green {\n  0% {\n    box-shadow: 0 0 0 0 rgba(32, 243, 181, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(32, 243, 181, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(32, 243, 181, 0.5); } }\n\n\@keyframes pulse-animation--blue {\n  0% {\n    box-shadow: 0 0 0 0 rgba(41, 121, 255, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(41, 121, 255, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(41, 121, 255, 0.5); } }\n\n\@keyframes pulse-animation--orange {\n  0% {\n    box-shadow: 0 0 0 0 rgba(253, 126, 9, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(253, 126, 9, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(253, 126, 9, 0.5); } }\n\n\@keyframes pulse-animation--yellow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 220, 40, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(255, 220, 40, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(255, 220, 40, 0.5); } }\n\n\@keyframes pulse-animation--darkpurple {\n  0% {\n    box-shadow: 0 0 0 0 rgba(54, 10, 61, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(54, 10, 61, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(54, 10, 61, 0.5); } }\n\n/*\n  Main list of all colours\n*/\n.divider {\n  position: relative; }\n\n.divider-style--none {\n  border-bottom: 1px solid rgba(0, 0, 0, 0); }\n\n.divider-style--normal {\n  border-bottom: 1px solid #d0d5d7; }\n\n.divider-style--dashed {\n  border-bottom: 1px dashed #d0d5d7; }\n\n.divider__content {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  background: white;\n  position: absolute;\n  bottom: -0.5rem;\n  font-size: 1rem;\n  line-height: 1rem;\n  font-weight: 500; }"; }
}

export { UIDivider as UiDivider };
