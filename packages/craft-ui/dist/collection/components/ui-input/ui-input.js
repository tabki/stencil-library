import Popper from "popper.js";
export class UIInput {
    componentDidLoad() {
        var arrow = this.el.querySelector("ui-arrow");
        var input = this.el.querySelector("input");
        var popout = this.el.querySelector("ui-card");
        var popper = new Popper(input, popout);
        console.warn(arrow);
    }
    render() {
        return (h("div", null,
            h("input", null),
            h("ui-arrow", null),
            h("ui-card", null,
                h("ui-card-content", null, "Hello"))));
    }
    static get is() { return "ui-input"; }
    static get properties() { return { "el": { "elementRef": true } }; }
    static get style() { return "/**style-placeholder:ui-input:**/"; }
}
