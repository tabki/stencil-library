import { Component, Prop, Element, State } from "@stencil/core";
import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";
import Popper from "popper.js";

@Component({
  tag: "ui-input",
  styleUrl: "ui-input.css"
})
export class UIInput {
  @Element() el: HTMLElement;
  componentDidLoad() {
    var arrow = this.el.querySelector("ui-arrow");
    var input = this.el.querySelector("input");
    var popout = this.el.querySelector("ui-card");
    var popper = new Popper(input, popout);
    console.warn(arrow);
  }
  render() {
    return (
      <div>
        <input />
        <ui-arrow />
        <ui-card>
          <ui-card-content>Hello</ui-card-content>
        </ui-card>
      </div>
    );
  }
}
