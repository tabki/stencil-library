import { Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "function-as-prop"
})
export class FunctionAsProp {
  @Prop() eventHandler: Function;
  @Event() testEvent: EventEmitter;

  emitDomEvent() {
    this.testEvent.emit("custom event fired from stencil!");
  }
  render() {
    return (
      <div>
        <button onClick={() => this.eventHandler()}>Fire event - Prop</button>

        <button onClick={this.emitDomEvent}>
          Fire event - Custom Dom Event
        </button>
      </div>
    );
  }
}
