import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";
import { classMap } from "./classMap";
var classMapper = mapPropsToClasses("list-item", classMap);
export class UIListItem {
    render() {
        var className = classMapper(this);
        return (h("li", { class: className, tabindex: "0" },
            h("slot", null)));
    }
    static get is() { return "ui-list-item"; }
    static get style() { return "/**style-placeholder:ui-list-item:**/"; }
}
