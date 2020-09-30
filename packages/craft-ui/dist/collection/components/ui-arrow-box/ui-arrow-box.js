import { mapPropsToClasses } from "../common/classMaps/mapPropsToClasses";
import { arrowBoxClassMap } from "./classMaps";
var arrowBoxClassMapper = mapPropsToClasses("ui-arrow-box", arrowBoxClassMap);
export class UIArrowBox {
    getArrowDirection() {
        var direction;
        switch (this.placement) {
            case "top":
                direction = "down";
                break;
            case "bottom":
                direction = "up";
                break;
            case "right":
                direction = "left";
                break;
            case "left":
                direction = "right";
                break;
        }
        return direction;
    }
    setArrowDirection() {
        this.arrowDirection = this.getArrowDirection();
    }
    componentDidLoad() {
        this.setArrowDirection();
    }
    watchPlacement() {
        this.setArrowDirection();
    }
    getArrowElement() {
        var arrowEl = this.el.querySelector("#ui-arrow");
        return arrowEl;
    }
    render() {
        var arrowBoxClass = arrowBoxClassMapper(this);
        return (h("div", { class: arrowBoxClass, style: { position: "relative" } },
            h("div", { id: "ui-arrow", class: `ui-arrow-box__arrow ui-arrow ui-arrow-direction--${this.arrowDirection}` },
                h("svg", { class: `ui-arrow__svg ui-arrow__svg--${this.arrowDirection}`, viewBox: "0 0 30 30" },
                    h("path", { class: "arrow-border", d: "M8.11 6.302c1.015-.936  1.887-2.922 1.887-4.297v26c0-1.378-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z" }),
                    h("path", { class: "arrow-fill", d: "M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z" }))),
            h("ui-card", { elevation: 3 },
                h("ui-card-content", { padding: this.padding },
                    h("slot", null)))));
    }
    static get is() { return "ui-arrow-box"; }
    static get host() { return { "theme": "ui-arrow" }; }
    static get properties() { return { "arrowDirection": { "state": true }, "color": { "type": String, "attr": "color" }, "el": { "elementRef": true }, "getArrowElement": { "method": true }, "padding": { "type": Number, "attr": "padding" }, "placement": { "type": String, "attr": "placement", "watchCallbacks": ["watchPlacement"] } }; }
    static get style() { return "/**style-placeholder:ui-arrow-box:**/"; }
}
