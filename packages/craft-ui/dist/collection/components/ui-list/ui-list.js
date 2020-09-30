import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";
import { classMap } from "./classMap";
var classMapper = mapPropsToClasses("list", classMap);
export class UIList {
    render() {
        var className = classMapper(this);
        return (h("div", { class: className },
            h("slot", null)));
    }
    static get is() { return "ui-list"; }
    static get properties() { return { "comps": { "type": "Any", "attr": "comps" }, "elevation": { "type": Number, "attr": "elevation" }, "interactive": { "type": Boolean, "attr": "interactive" } }; }
    static get style() { return "/**style-placeholder:ui-list:**/"; }
}
