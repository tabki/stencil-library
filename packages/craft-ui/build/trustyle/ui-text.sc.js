/*! Built with http://stenciljs.com */
const { h } = window.trustyle;

import { mapPropsToClasses } from './chunk3.js';

/*
  Semantic Elements
  - - -
  Given a correct TextElementType, getSemanticElement should
  return a functional component which wraps the corresponding
  html5 element.
  This module does not deal with any styling logic
*/
const H1 = ({ className }) => (h("h1", { class: className },
    h("slot", null)));
const H2 = ({ className }) => (h("h2", { class: className },
    h("slot", null)));
const H3 = ({ className }) => (h("h3", { class: className },
    h("slot", null)));
const H4 = ({ className }) => (h("h4", { class: className },
    h("slot", null)));
const H5 = ({ className }) => (h("h5", { class: className },
    h("slot", null)));
const H6 = ({ className }) => (h("h6", { class: className },
    h("slot", null)));
const P = ({ className }) => (h("p", { class: className },
    h("slot", null)));
const Span = ({ className }) => (h("span", { class: className },
    h("slot", null)));
const getSemanticTextElement = (type) => {
    var semanticElement;
    switch (type) {
        case "h1":
            semanticElement = H1;
            break;
        case "h2":
            semanticElement = H2;
            break;
        case "h3":
            semanticElement = H3;
            break;
        case "h4":
            semanticElement = H4;
            break;
        case "h5":
            semanticElement = H5;
            break;
        case "h6":
            semanticElement = H6;
            break;
        case "p":
            semanticElement = P;
            break;
        case "span":
            semanticElement = Span;
            break;
        default:
            semanticElement = P;
    }
    return semanticElement;
};

const classMap = {
    weight: {
        light: "text-weight--light",
        normal: "text-weight--normal",
        bold: "text-weight--bold",
        bolder: "text-weight--bolder"
    },
    spacing: {
        normal: "text-spacing--normal",
        wide: "text-spacing--wide "
    },
    transform: {
        uppercase: "text-transform--upper",
        lowercase: "text-transform--lower",
        caps: "text-transform--caps"
    },
    color: {
        lightest: "text-color--lightest",
        light: "text-color--light",
        normal: "text-color--normal"
    },
    clickable: {
        true: "text--clickable"
    }
};
//TODO: Provide more color options - merge object with global color overrides?

var classMapper = mapPropsToClasses("text", classMap);
class TruText {
    constructor() {
        this.type = "span";
        this.weight = "normal";
        this.spacing = "normal";
        this.color = "normal";
    }
    render() {
        var SemanticElementWrapper = getSemanticTextElement(this.type);
        var className = classMapper(this);
        if (this.href) {
            this.clickable = true;
        }
        return (h(SemanticElementWrapper, { className: className },
            h("slot", null)));
    }
    static get is() { return "ui-text"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "clickable": { "type": Boolean, "attr": "clickable" }, "color": { "type": String, "attr": "color" }, "href": { "type": String, "attr": "href" }, "spacing": { "type": String, "attr": "spacing" }, "transform": { "type": String, "attr": "transform" }, "type": { "type": "Any", "attr": "type" }, "weight": { "type": String, "attr": "weight" } }; }
    static get style() { return "\@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\n\@keyframes pulse-animation--primary {\n  0% {\n    box-shadow: 0 0 0 0 rgba(43, 181, 253, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(43, 181, 253, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(43, 181, 253, 0.5); } }\n\n\@keyframes pulse-animation--red {\n  0% {\n    box-shadow: 0 0 0 0 rgba(251, 0, 74, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(251, 0, 74, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(251, 0, 74, 0.5); } }\n\n\@keyframes pulse-animation--green {\n  0% {\n    box-shadow: 0 0 0 0 rgba(32, 243, 181, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(32, 243, 181, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(32, 243, 181, 0.5); } }\n\n\@keyframes pulse-animation--blue {\n  0% {\n    box-shadow: 0 0 0 0 rgba(41, 121, 255, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(41, 121, 255, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(41, 121, 255, 0.5); } }\n\n\@keyframes pulse-animation--orange {\n  0% {\n    box-shadow: 0 0 0 0 rgba(253, 126, 9, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(253, 126, 9, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(253, 126, 9, 0.5); } }\n\n\@keyframes pulse-animation--yellow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 220, 40, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(255, 220, 40, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(255, 220, 40, 0.5); } }\n\n\@keyframes pulse-animation--darkpurple {\n  0% {\n    box-shadow: 0 0 0 0 rgba(54, 10, 61, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(54, 10, 61, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(54, 10, 61, 0.5); } }\n\n\@keyframes pulse-animation--primary {\n  0% {\n    box-shadow: 0 0 0 0 rgba(43, 181, 253, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(43, 181, 253, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(43, 181, 253, 0.5); } }\n\n\@keyframes pulse-animation--red {\n  0% {\n    box-shadow: 0 0 0 0 rgba(251, 0, 74, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(251, 0, 74, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(251, 0, 74, 0.5); } }\n\n\@keyframes pulse-animation--green {\n  0% {\n    box-shadow: 0 0 0 0 rgba(32, 243, 181, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(32, 243, 181, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(32, 243, 181, 0.5); } }\n\n\@keyframes pulse-animation--blue {\n  0% {\n    box-shadow: 0 0 0 0 rgba(41, 121, 255, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(41, 121, 255, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(41, 121, 255, 0.5); } }\n\n\@keyframes pulse-animation--orange {\n  0% {\n    box-shadow: 0 0 0 0 rgba(253, 126, 9, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(253, 126, 9, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(253, 126, 9, 0.5); } }\n\n\@keyframes pulse-animation--yellow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 220, 40, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(255, 220, 40, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(255, 220, 40, 0.5); } }\n\n\@keyframes pulse-animation--darkpurple {\n  0% {\n    box-shadow: 0 0 0 0 rgba(54, 10, 61, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(54, 10, 61, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(54, 10, 61, 0.5); } }\n\n\n.text[data-ui-text] {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal; }\n\nh1[data-ui-text], .h1[data-ui-text] {\n  font-size: 6.8541rem;\n  line-height: 7rem !important; }\n\nh2[data-ui-text], .h2[data-ui-text] {\n  font-size: 4.23607rem;\n  line-height: 5rem !important; }\n\nh3[data-ui-text], .h3[data-ui-text] {\n  font-size: 2.61803rem;\n  line-height: 3rem !important; }\n\nh4[data-ui-text], .h4[data-ui-text] {\n  font-size: 1.61803rem;\n  line-height: 2rem !important; }\n\nh5[data-ui-text], .h5[data-ui-text] {\n  font-size: 1rem;\n  line-height: 1rem !important; }\n\nh6[data-ui-text], .h6[data-ui-text] {\n  font-size: 1rem;\n  line-height: 1rem !important; }\n\np[data-ui-text], span[data-ui-text], .p[data-ui-text] {\n  font-size: 1rem;\n  line-height: 1rem !important; }\n\n.text-weight--light[data-ui-text] {\n  font-weight: 300; }\n\n.text-weight--normal[data-ui-text] {\n  font-weight: 400; }\n\n.text-weight--bold[data-ui-text] {\n  font-weight: 600; }\n\n.text-weight--bolder[data-ui-text] {\n  font-weight: 700; }\n\n.text-spacing--normal[data-ui-text] {\n  letter-spacing: normal; }\n\n.text-spacing--wide[data-ui-text] {\n  letter-spacing: 0.2rem; }\n\n.text-transform--upper[data-ui-text] {\n  text-transform: uppercase; }\n\n.text-transform--lower[data-ui-text] {\n  text-transform: lowercase; }\n\n.text-transform--caps[data-ui-text] {\n  text-transform: capitalize; }\n\n.text-color--lightest[data-ui-text] {\n  color: #707d85; }\n\n.text-color--light[data-ui-text] {\n  color: #5b6c77; }\n\n.text-color--normal[data-ui-text] {\n  color: #1f3a4a; }\n\n.text--clickable[data-ui-text] {\n  color: #5b6c77 !important;\n  -webkit-touch-callout: none;\n  \n  -webkit-user-select: none;\n  \n  -khtml-user-select: none;\n  \n  -moz-user-select: none;\n  \n  -ms-user-select: none;\n  \n  user-select: none;\n   }\n  .text--clickable[data-ui-text]:hover {\n    color: #1f3a4a !important;\n    cursor: pointer; }"; }
}

export { TruText as UiText };
