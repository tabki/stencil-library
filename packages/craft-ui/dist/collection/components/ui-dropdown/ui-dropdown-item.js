export class UIDropdownItem {
    constructor() {
        this.tabindex = 0;
    }
    render() {
        this.el.setAttribute("tabindex", "0");
        return h("slot", null);
    }
    static get is() { return "ui-dropdown-item"; }
    static get host() { return { "theme": "mdc-list-item", "role": "menuitem" }; }
    static get properties() { return { "el": { "elementRef": true }, "tabindex": { "type": Number, "attr": "tabindex" } }; }
    static get style() { return "/**style-placeholder:ui-dropdown-item:**/"; }
}
