import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";
import { getSemanticTextElement } from "./SemanticTextElements";
import { classMap } from "./classMap";
var classMapper = mapPropsToClasses("text", classMap);
export class TruText {
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
    static get style() { return "/**style-placeholder:ui-text:**/"; }
}
