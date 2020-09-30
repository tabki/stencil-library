/*! Built with http://stenciljs.com */
const { h } = window.trustyle;

import Popper from './chunk4.js';

/// <reference path="node_module/popper.js/index.d.ts" />
const hideElement = (element) => {
    element.style.display = "none";
};
const showElement = (element, displayType = "block") => {
    element.style.display = displayType;
};
class UITooltip {
    createPopper() {
        var container = this.el.querySelector(".tooltip__container");
        container.appendChild(this.tooltipNode);
        var button = this.el.querySelector(".tooltip__container");
        var arrow = this.el.querySelector("ui-arrow-box").getArrowElement();
        var popout = this.el.querySelector(".tippy");
        console.warn(arrow);
        showElement(popout);
        if (this.popper)
            return;
        var popper = this.el;
        var uiTooltip = this;
        this.popper = new Popper(button, popout, {
            placement: this.placement,
            modifiers: {
                arrow: {
                    enabled: true,
                    element: arrow
                }
            },
            onCreate() {
                uiTooltip.popperPlacement = popout.getAttribute("x-placement");
            },
            onUpdate() {
                uiTooltip.popperPlacement = popout.getAttribute("x-placement");
            }
        });
    }
    componentDidLoad() {
        var tooltipElement = this.el.querySelector(".tippy");
        this.tooltipNode = tooltipElement;
        tooltipElement.remove();
        console.warn(this.tooltipNode);
        this.popperPlacement = this.placement;
        var button = this.el.querySelector("ui-button");
        button.addEventListener("mouseover", () => {
            this.createPopper();
        });
        button.addEventListener("mouseout", () => {
            var tippy = this.el.querySelector(".tippy");
            console.warn("tippy", tippy);
            hideElement(tippy);
            tooltipElement.remove();
            this.popper.destroy();
        });
    }
    render() {
        return (h("div", { class: "tooltip__container" },
            h("ui-button", null, "hello"),
            h("div", { class: "tippy", style: { zIndex: "99", display: "none" } },
                h("ui-arrow-box", { placement: this.popperPlacement }, "s is some content"))));
    }
    static get is() { return "ui-tooltip"; }
    static get properties() { return { "el": { "elementRef": true }, "placement": { "type": "Any", "attr": "placement" }, "popper": { "state": true }, "popperPlacement": { "state": true }, "tooltipNode": { "state": true } }; }
    static get style() { return "/*\n  BREAKPOINTS\n*/\n/**\n * Spacing / Font sizes\n */\n/**\n * General\n */\n/**\n * Theme / Colours\n */\n/*\n  Main list of all colours\n*/\n\@keyframes pulse-animation--primary {\n  0% {\n    box-shadow: 0 0 0 0 rgba(43, 181, 253, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(43, 181, 253, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(43, 181, 253, 0.5); } }\n\n\@keyframes pulse-animation--red {\n  0% {\n    box-shadow: 0 0 0 0 rgba(251, 0, 74, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(251, 0, 74, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(251, 0, 74, 0.5); } }\n\n\@keyframes pulse-animation--green {\n  0% {\n    box-shadow: 0 0 0 0 rgba(32, 243, 181, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(32, 243, 181, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(32, 243, 181, 0.5); } }\n\n\@keyframes pulse-animation--blue {\n  0% {\n    box-shadow: 0 0 0 0 rgba(41, 121, 255, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(41, 121, 255, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(41, 121, 255, 0.5); } }\n\n\@keyframes pulse-animation--orange {\n  0% {\n    box-shadow: 0 0 0 0 rgba(253, 126, 9, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(253, 126, 9, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(253, 126, 9, 0.5); } }\n\n\@keyframes pulse-animation--yellow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 220, 40, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(255, 220, 40, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(255, 220, 40, 0.5); } }\n\n\@keyframes pulse-animation--darkpurple {\n  0% {\n    box-shadow: 0 0 0 0 rgba(54, 10, 61, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(54, 10, 61, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(54, 10, 61, 0.5); } }\n\n\@keyframes pulse-animation--primary {\n  0% {\n    box-shadow: 0 0 0 0 rgba(43, 181, 253, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(43, 181, 253, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(43, 181, 253, 0.5); } }\n\n\@keyframes pulse-animation--red {\n  0% {\n    box-shadow: 0 0 0 0 rgba(251, 0, 74, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(251, 0, 74, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(251, 0, 74, 0.5); } }\n\n\@keyframes pulse-animation--green {\n  0% {\n    box-shadow: 0 0 0 0 rgba(32, 243, 181, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(32, 243, 181, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(32, 243, 181, 0.5); } }\n\n\@keyframes pulse-animation--blue {\n  0% {\n    box-shadow: 0 0 0 0 rgba(41, 121, 255, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(41, 121, 255, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(41, 121, 255, 0.5); } }\n\n\@keyframes pulse-animation--orange {\n  0% {\n    box-shadow: 0 0 0 0 rgba(253, 126, 9, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(253, 126, 9, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(253, 126, 9, 0.5); } }\n\n\@keyframes pulse-animation--yellow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 220, 40, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(255, 220, 40, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(255, 220, 40, 0.5); } }\n\n\@keyframes pulse-animation--darkpurple {\n  0% {\n    box-shadow: 0 0 0 0 rgba(54, 10, 61, 0.5); }\n  70% {\n    box-shadow: 0 0 0 0.4rem rgba(54, 10, 61, 0); }\n  100% {\n    box-shadow: 0 0 0 0.17rem rgba(54, 10, 61, 0.5); } }\n\n/*\n  Main list of all colours\n*/\n.tooltip__container {\n  display: inline-block; }\n  .tooltip__container > * {\n    margin: 0; }\n\nui-tooltip {\n  margin-bottom: 1rem;\n  display: inline-block; }\n  ui-tooltip {\n    margin-right: 1rem; }\n\n.tippy {\n  position: absolute; }"; }
}

export { UITooltip as UiTooltip };
