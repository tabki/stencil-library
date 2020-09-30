import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";
import { classMap } from "./classMap";
var classMapper = mapPropsToClasses("card", classMap);
export class TruCard {
    constructor() {
        this.elevation = 0;
    }
    render() {
        var className = classMapper(this);
        return (h("div", { class: className },
            h("slot", null)));
    }
    static get is() { return "ui-card"; }
    static get properties() { return { "elevation": { "type": Number, "attr": "elevation" }, "interactive": { "type": Boolean, "attr": "interactive" } }; }
    static get style() { return "/**style-placeholder:ui-card:**/"; }
}
