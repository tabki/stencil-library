import { Component, Prop } from "@stencil/core";
import { TextElementType } from "./types";
import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";
import { getSemanticTextElement } from "./SemanticTextElements";
import { classMap } from "./classMap";

var classMapper = mapPropsToClasses("text", classMap);

@Component({
  tag: "ui-text",
  styleUrl: "ui-text.css",
  shadow: true
})
export class TruText {
  @Prop() type: TextElementType = "span";
  @Prop() weight: string = "normal";
  @Prop() spacing: string = "normal";
  @Prop() transform: string;
  @Prop() color: string = "normal";
  @Prop() clickable: boolean;
  @Prop() href: string;
  render() {
    var SemanticElementWrapper = getSemanticTextElement(this.type);
    var className = classMapper(this);

    if (this.href) {
      this.clickable = true;
    }

    return (
      <SemanticElementWrapper className={className}>
        <slot />
      </SemanticElementWrapper>
    );
  }
}
