/// <reference path="node_module/popper.js/index.d.ts" />
import Popper from "popper.js";
const hideElement = (element) => {
    element.style.display = "none";
};
const showElement = (element, displayType = "block") => {
    element.style.display = displayType;
};
export class UITooltip {
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
    static get style() { return "/**style-placeholder:ui-tooltip:**/"; }
}
