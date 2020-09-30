export class UIGrid {
    render() {
        // get array of child elements
        return (h("div", { class: "grid-item", id: "grid-item" },
            h("slot", null)));
    }
    static get is() { return "ui-grid-item"; }
    static get properties() { return { "gutter": { "type": Number, "attr": "gutter" }, "padding": { "type": Number, "attr": "padding" } }; }
    static get style() { return "/**style-placeholder:ui-grid-item:**/"; }
}
