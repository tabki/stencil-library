/*! Built with http://stenciljs.com */
const { h } = window.trustyle;

import { mapPropsToClasses } from './chunk3.js';

const classMap = {
    elevation: {
        0: "card-elevation--0",
        1: "card-elevation--1",
        2: "card-elevation--2",
        3: "card-elevation--3"
    },
    interactive: {
        true: "card-interactive"
    }
};

var classMapper = mapPropsToClasses("card", classMap);
class TruCard {
    constructor() {
        this.elevation = 0;
    }
    render() {
        var className = classMapper(this);
        return (h("div", { class: className },
            h("slot", null)));
    }
    static get is() { return "ui-card"; }
    static get properties() { return { "elevation": { "type": Number, "attr": "elevation" }, "interactive": { "type": Boolean, "attr": "interactive" } }; }
    static get style() { return "/*\n  BREAKPOINTS\n*/\n/**\n * Spacing / Font sizes\n */\n/**\n * General\n */\n/**\n * Theme / Colours\n */\n/*\n  Main list of all colours\n*/\n\@keyframes pulse-animation--primary {\n  0% {\n    box-shadow: 0 0 0 0 rgba(43, 181, 253, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(43, 181, 253, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(43, 181, 253, 0.5); } }\n\n\@keyframes pulse-animation--red {\n  0% {\n    box-shadow: 0 0 0 0 rgba(251, 0, 74, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(251, 0, 74, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(251, 0, 74, 0.5); } }\n\n\@keyframes pulse-animation--green {\n  0% {\n    box-shadow: 0 0 0 0 rgba(32, 243, 181, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(32, 243, 181, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(32, 243, 181, 0.5); } }\n\n\@keyframes pulse-animation--blue {\n  0% {\n    box-shadow: 0 0 0 0 rgba(41, 121, 255, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(41, 121, 255, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(41, 121, 255, 0.5); } }\n\n\@keyframes pulse-animation--orange {\n  0% {\n    box-shadow: 0 0 0 0 rgba(253, 126, 9, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(253, 126, 9, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(253, 126, 9, 0.5); } }\n\n\@keyframes pulse-animation--yellow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 220, 40, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(255, 220, 40, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(255, 220, 40, 0.5); } }\n\n\@keyframes pulse-animation--darkpurple {\n  0% {\n    box-shadow: 0 0 0 0 rgba(54, 10, 61, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(54, 10, 61, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(54, 10, 61, 0.5); } }\n\n\@keyframes pulse-animation--primary {\n  0% {\n    box-shadow: 0 0 0 0 rgba(43, 181, 253, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(43, 181, 253, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(43, 181, 253, 0.5); } }\n\n\@keyframes pulse-animation--red {\n  0% {\n    box-shadow: 0 0 0 0 rgba(251, 0, 74, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(251, 0, 74, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(251, 0, 74, 0.5); } }\n\n\@keyframes pulse-animation--green {\n  0% {\n    box-shadow: 0 0 0 0 rgba(32, 243, 181, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(32, 243, 181, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(32, 243, 181, 0.5); } }\n\n\@keyframes pulse-animation--blue {\n  0% {\n    box-shadow: 0 0 0 0 rgba(41, 121, 255, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(41, 121, 255, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(41, 121, 255, 0.5); } }\n\n\@keyframes pulse-animation--orange {\n  0% {\n    box-shadow: 0 0 0 0 rgba(253, 126, 9, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(253, 126, 9, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(253, 126, 9, 0.5); } }\n\n\@keyframes pulse-animation--yellow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 220, 40, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(255, 220, 40, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(255, 220, 40, 0.5); } }\n\n\@keyframes pulse-animation--darkpurple {\n  0% {\n    box-shadow: 0 0 0 0 rgba(54, 10, 61, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(54, 10, 61, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(54, 10, 61, 0.5); } }\n\n/*\n  Main list of all colours\n*/\n.card-elevation--0 {\n  box-shadow: 0 0 0 1px rgba(31, 58, 74, 0.13), 0 0 0 rgba(31, 58, 74, 0), 0 1px 1px rgba(31, 58, 74, 0.13); }\n\n.card-elevation--1 {\n  box-shadow: 0 0 0 1px rgba(31, 58, 74, 0.13), 0 1px 1px rgba(31, 58, 74, 0.13), 0 3px 7px rgba(31, 58, 74, 0.13); }\n\n.card-elevation--2 {\n  box-shadow: 0 0 0 1px rgba(31, 58, 74, 0.13), 0 2px 4px rgba(31, 58, 74, 0.13), 0 8px 24px rgba(31, 58, 74, 0.13); }\n\n.card-elevation--3 {\n  box-shadow: 0 0 0 1px rgba(31, 58, 74, 0.13), 0 4px 8px rgba(31, 58, 74, 0.13), 0 10px 30px 5px rgba(31, 58, 74, 0.13); }\n\n.card {\n  box-sizing: border-box;\n  display: block;\n  border-radius: 0.25rem;\n  min-height: 2rem;\n  max-width: 100%;\n  background-color: white;\n  transition: transform 0.1s ease-in, box-shadow 0.1s ease-in; }\n\n.card-content {\n  box-sizing: border-box;\n  display: block;\n  padding: 1rem;\n  width: 100%;\n  height: 100%; }\n\n.card.card-interactive:hover {\n  box-shadow: 0 0 0 1px rgba(31, 58, 74, 0.13), 0 4px 8px rgba(31, 58, 74, 0.13), 0 10px 30px 5px rgba(31, 58, 74, 0.13);\n  cursor: pointer; }\n\n.card.card-interactive:active {\n  opacity: 0.9;\n  box-shadow: 0 0 0 1px rgba(31, 58, 74, 0.13), 0 0 0 rgba(31, 58, 74, 0), 0 1px 1px rgba(31, 58, 74, 0.13);\n  transition-duration: 0; }\n\nui-card {\n  display: block; }"; }
}

class TruCardContent {
    render() {
        return (h("div", { class: "card-content", style: { padding: `${this.padding}rem` } },
            h("slot", null)));
    }
    static get is() { return "ui-card-content"; }
    static get properties() { return { "padding": { "type": Number, "attr": "padding" } }; }
    static get style() { return "/*\n  BREAKPOINTS\n*/\n/**\n * Spacing / Font sizes\n */\n/**\n * General\n */\n/**\n * Theme / Colours\n */\n/*\n  Main list of all colours\n*/\n\@keyframes pulse-animation--primary {\n  0% {\n    box-shadow: 0 0 0 0 rgba(43, 181, 253, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(43, 181, 253, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(43, 181, 253, 0.5); } }\n\n\@keyframes pulse-animation--red {\n  0% {\n    box-shadow: 0 0 0 0 rgba(251, 0, 74, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(251, 0, 74, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(251, 0, 74, 0.5); } }\n\n\@keyframes pulse-animation--green {\n  0% {\n    box-shadow: 0 0 0 0 rgba(32, 243, 181, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(32, 243, 181, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(32, 243, 181, 0.5); } }\n\n\@keyframes pulse-animation--blue {\n  0% {\n    box-shadow: 0 0 0 0 rgba(41, 121, 255, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(41, 121, 255, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(41, 121, 255, 0.5); } }\n\n\@keyframes pulse-animation--orange {\n  0% {\n    box-shadow: 0 0 0 0 rgba(253, 126, 9, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(253, 126, 9, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(253, 126, 9, 0.5); } }\n\n\@keyframes pulse-animation--yellow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 220, 40, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(255, 220, 40, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(255, 220, 40, 0.5); } }\n\n\@keyframes pulse-animation--darkpurple {\n  0% {\n    box-shadow: 0 0 0 0 rgba(54, 10, 61, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(54, 10, 61, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(54, 10, 61, 0.5); } }\n\n\@keyframes pulse-animation--primary {\n  0% {\n    box-shadow: 0 0 0 0 rgba(43, 181, 253, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(43, 181, 253, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(43, 181, 253, 0.5); } }\n\n\@keyframes pulse-animation--red {\n  0% {\n    box-shadow: 0 0 0 0 rgba(251, 0, 74, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(251, 0, 74, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(251, 0, 74, 0.5); } }\n\n\@keyframes pulse-animation--green {\n  0% {\n    box-shadow: 0 0 0 0 rgba(32, 243, 181, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(32, 243, 181, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(32, 243, 181, 0.5); } }\n\n\@keyframes pulse-animation--blue {\n  0% {\n    box-shadow: 0 0 0 0 rgba(41, 121, 255, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(41, 121, 255, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(41, 121, 255, 0.5); } }\n\n\@keyframes pulse-animation--orange {\n  0% {\n    box-shadow: 0 0 0 0 rgba(253, 126, 9, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(253, 126, 9, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(253, 126, 9, 0.5); } }\n\n\@keyframes pulse-animation--yellow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 220, 40, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(255, 220, 40, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(255, 220, 40, 0.5); } }\n\n\@keyframes pulse-animation--darkpurple {\n  0% {\n    box-shadow: 0 0 0 0 rgba(54, 10, 61, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(54, 10, 61, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(54, 10, 61, 0.5); } }\n\n/*\n  Main list of all colours\n*/\n.card-elevation--0 {\n  box-shadow: 0 0 0 1px rgba(31, 58, 74, 0.13), 0 0 0 rgba(31, 58, 74, 0), 0 1px 1px rgba(31, 58, 74, 0.13); }\n\n.card-elevation--1 {\n  box-shadow: 0 0 0 1px rgba(31, 58, 74, 0.13), 0 1px 1px rgba(31, 58, 74, 0.13), 0 3px 7px rgba(31, 58, 74, 0.13); }\n\n.card-elevation--2 {\n  box-shadow: 0 0 0 1px rgba(31, 58, 74, 0.13), 0 2px 4px rgba(31, 58, 74, 0.13), 0 8px 24px rgba(31, 58, 74, 0.13); }\n\n.card-elevation--3 {\n  box-shadow: 0 0 0 1px rgba(31, 58, 74, 0.13), 0 4px 8px rgba(31, 58, 74, 0.13), 0 10px 30px 5px rgba(31, 58, 74, 0.13); }\n\n.card {\n  box-sizing: border-box;\n  display: block;\n  border-radius: 0.25rem;\n  min-height: 2rem;\n  max-width: 100%;\n  background-color: white;\n  transition: transform 0.1s ease-in, box-shadow 0.1s ease-in; }\n\n.card-content {\n  box-sizing: border-box;\n  display: block;\n  padding: 1rem;\n  width: 100%;\n  height: 100%; }\n\n.card.card-interactive:hover {\n  box-shadow: 0 0 0 1px rgba(31, 58, 74, 0.13), 0 4px 8px rgba(31, 58, 74, 0.13), 0 10px 30px 5px rgba(31, 58, 74, 0.13);\n  cursor: pointer; }\n\n.card.card-interactive:active {\n  opacity: 0.9;\n  box-shadow: 0 0 0 1px rgba(31, 58, 74, 0.13), 0 0 0 rgba(31, 58, 74, 0), 0 1px 1px rgba(31, 58, 74, 0.13);\n  transition-duration: 0; }\n\nui-card {\n  display: block; }"; }
}

export { TruCard as UiCard, TruCardContent as UiCardContent };