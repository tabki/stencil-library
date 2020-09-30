import { mapPropsToClasses } from "../common/classMaps/mapPropsToClasses";
import { classMap } from "./classMap";
var labelClassMapper = mapPropsToClasses("ui-badge", classMap);
export class UIBadge {
    constructor() {
        this.size = "m";
        this.color = "primary";
    }
    render() {
        var labelClassName = labelClassMapper(this);
        return (h("span", { class: "ui-badge__container" },
            h("sup", { class: `ui-badge__sup ${labelClassName}` }, this.label)));
    }
    static get is() { return "ui-badge"; }
    static get properties() { return { "color": { "type": String, "attr": "color" }, "label": { "type": String, "attr": "label" }, "size": { "type": String, "attr": "size" } }; }
    static get style() { return "/**style-placeholder:ui-badge:**/"; }
}
