import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";
import { classMap } from "./classMap";
var classMapper = mapPropsToClasses("divider", classMap);
export class UIDivider {
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
    static get style() { return "/**style-placeholder:ui-divider:**/"; }
}
