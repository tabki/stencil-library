import Popper from "popper.js";
const hideElement = (element) => {
    element.style.display = "none";
};
const showElement = (element, displayType = "block") => {
    element.style.display = displayType;
};
export class UIPopover {
    constructor() {
        this.placement = "top";
        this.trigger = "hover";
    }
    // call when component has loaded
    initState() {
        this.popperPlacement = this.placement;
        this.popoverEl = this.el.querySelector(".ui-popover");
        this.triggerEl = this.el.querySelector(".ui-popover__trigger-area");
        this.popoverContainerEl = this.el.querySelector(".ui-popover__container");
    }
    createPopper() {
        var arrow = this.el.querySelector("ui-arrow-box").getArrowElement();
        var placement = this.placement;
        var uiPopper = this;
        //TODO: Break this out into seperate function
        this.popperInstance = new Popper(this.popoverContainerEl, this.popoverEl, {
            placement: placement,
            modifiers: {
                arrow: {
                    enabled: true,
                    element: arrow
                }
            },
            onCreate() {
                uiPopper.popperPlacement = uiPopper.popoverEl.getAttribute("x-placement");
            },
            onUpdate() {
                uiPopper.popperPlacement = uiPopper.popoverEl.getAttribute("x-placement");
            }
        });
    }
    show() {
        if (typeof this.popperInstance === "undefined") {
            this.createPopper();
        }
        if (!this.isVisable) {
            showElement(this.popoverEl);
            this.popperInstance.update();
        }
        this.isVisable = true;
    }
    hide() {
        hideElement(this.popoverEl);
        this.isVisable = false;
    }
    toggle() {
        if (!this.isVisable) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    registerMouseEnterLeaveEvents() {
        this.triggerEl.addEventListener("mouseover", () => {
            this.show();
        });
        this.triggerEl.addEventListener("mouseout", () => {
            this.hide();
        });
    }
    registerMouseClickEvents() {
        this.triggerEl.addEventListener("click", () => {
            this.toggle();
            //this.triggerEl.active();
            this.popoverEl.focus();
        });
        this.popoverEl.addEventListener("focusout", () => {
            console.warn("do something");
            this.toggle();
        });
    }
    componentDidLoad() {
        this.initState();
        this.hide();
        switch (this.trigger) {
            case "hover":
                this.registerMouseEnterLeaveEvents();
            case "click":
                this.registerMouseClickEvents();
        }
    }
    render() {
        return (h("div", { class: "ui-popover__container" },
            h("div", { class: "ui-popover__trigger-area" },
                h("ui-button", null, "Open")),
            h("div", { class: "ui-popover", tabindex: "-1" },
                h("ui-arrow-box", { placement: this.popperPlacement }, "Popover"))));
    }
    static get is() { return "ui-popover"; }
    static get properties() { return { "el": { "elementRef": true }, "isVisable": { "state": true }, "placement": { "type": String, "attr": "placement" }, "popoverContainerEl": { "state": true }, "popoverEl": { "state": true }, "popperInstance": { "state": true }, "popperPlacement": { "state": true }, "trigger": { "type": String, "attr": "trigger" }, "triggerEl": { "state": true } }; }
    static get style() { return "/**style-placeholder:ui-popover:**/"; }
}
