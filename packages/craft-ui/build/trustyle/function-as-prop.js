/*! Built with http://stenciljs.com */
const { h } = window.trustyle;

class FunctionAsProp {
    emitDomEvent() {
        this.testEvent.emit("custom event fired from stencil!");
    }
    render() {
        return (h("div", null,
            h("button", { onClick: () => this.eventHandler() }, "Fire event - Prop"),
            h("button", { onClick: this.emitDomEvent }, "Fire event - Custom Dom Event")));
    }
    static get is() { return "function-as-prop"; }
    static get properties() { return { "eventHandler": { "type": "Any", "attr": "event-handler" } }; }
    static get events() { return [{ "name": "testEvent", "method": "testEvent", "bubbles": true, "cancelable": true, "composed": true }]; }
}

export { FunctionAsProp };
