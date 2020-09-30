import { Component, Prop } from "@stencil/core";
import { ButtonElementType } from "./types";
import { getSemanticButtonElement } from "./SemanticButtonElements";
import { mapPropsToClasses } from "../common/classMaps/mapPropsToClasses";
import { classMap } from "./classMap";

var classMapper = mapPropsToClasses("button", classMap);

@Component({
  tag: "ui-button",
  styleUrl: "ui-button.css"
})
export class TruButton {
  @Prop() color: string = "primary";
  @Prop() type: string = "full";
  @Prop() usage: ButtonElementType = "button";
  @Prop() href: string;
  @Prop() size: string = "normal";
  render() {
    var SemanticElementWrapper = getSemanticButtonElement(this.usage);
    var className = classMapper(this);
    return (
      <SemanticElementWrapper className={className} href={this.href}>
        <slot />
      </SemanticElementWrapper>
    );
  }
}
