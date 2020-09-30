import { MDCMenu, Corner } from "@material/menu";
export class UIDropdown {
    constructor() {
        this.line = "normal";
        this.padding = 0;
    }
    componentDidLoad() {
        var menu = this.el.querySelector(".mdc-menu");
        this.mdcMenu = new MDCMenu(menu);
        this.mdcMenu.setAnchorCorner(Corner.BOTTOM_START);
    }
    toggleMenu() {
        console.warn(this.mdcMenu);
        if (this.mdcMenu)
            this.mdcMenu.open = !this.mdcMenu.open;
    }
    render() {
        return (h("div", { id: "demo-menu", class: "mdc-menu-anchor" },
            h("div", { onClick: () => this.toggleMenu() },
                h("slot", { name: "ui-dropdown-toggle" })),
            h("div", { class: "mdc-menu", tabindex: "-1" },
                h("ul", { class: "mdc-menu__items mdc-list", role: "menu", "aria-hidden": "true" },
                    h("slot", null)))));
    }
    static get is() { return "ui-dropdown"; }
    static get properties() { return { "el": { "elementRef": true }, "label": { "type": String, "attr": "label" }, "line": { "type": String, "attr": "line" }, "mdcMenu": { "state": true }, "padding": { "type": Number, "attr": "padding" } }; }
    static get style() { return "/**style-placeholder:ui-dropdown:**/"; }
}
