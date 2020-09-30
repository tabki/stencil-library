import { getSemanticButtonElement } from "./SemanticButtonElements";
import { mapPropsToClasses } from "../common/classMaps/mapPropsToClasses";
import { classMap } from "./classMap";
var classMapper = mapPropsToClasses("button", classMap);
export class TruButton {
    constructor() {
        this.color = "primary";
        this.type = "full";
        this.usage = "button";
        this.size = "normal";
    }
    render() {
        var SemanticElementWrapper = getSemanticButtonElement(this.usage);
        var className = classMapper(this);
        return (h(SemanticElementWrapper, { className: className, href: this.href },
            h("slot", null)));
    }
    static get is() { return "ui-button"; }
    static get properties() { return { "color": { "type": String, "attr": "color" }, "href": { "type": String, "attr": "href" }, "size": { "type": String, "attr": "size" }, "type": { "type": String, "attr": "type" }, "usage": { "type": "Any", "attr": "usage" } }; }
    static get style() { return "/**style-placeholder:ui-button:**/"; }
}
