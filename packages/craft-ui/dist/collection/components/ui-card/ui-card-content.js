export class TruCardContent {
    render() {
        return (h("div", { class: "card-content", style: { padding: `${this.padding}rem` } },
            h("slot", null)));
    }
    static get is() { return "ui-card-content"; }
    static get properties() { return { "padding": { "type": Number, "attr": "padding" } }; }
    static get style() { return "/**style-placeholder:ui-card-content:**/"; }
}
