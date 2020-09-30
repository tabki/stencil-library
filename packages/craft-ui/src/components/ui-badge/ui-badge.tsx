import { Component, Prop } from "@stencil/core";
import { mapPropsToClasses } from "../common/classMaps/mapPropsToClasses";
import { classMap } from "./classMap";

var labelClassMapper = mapPropsToClasses("ui-badge", classMap);

@Component({
  tag: "ui-badge",
  styleUrl: "ui-badge.css",
  shadow: false
})
export class UIBadge {
  @Prop() label: string;
  @Prop() size: string = "m";
  @Prop() color: string = "primary";
  render() {
    var labelClassName = labelClassMapper(this);
    return (
      <span class="ui-badge__container">
        <sup class={`ui-badge__sup ${labelClassName}`}>{this.label}</sup>
      </span>
    );
  }
}
