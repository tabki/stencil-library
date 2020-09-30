import { Component, Prop } from "@stencil/core";
import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";
import { classMap } from "./classMap";

var classMapper = mapPropsToClasses("divider", classMap);

@Component({
  tag: "ui-divider",
  styleUrl: "ui-divider.css"
})
export class UIDivider {
  @Prop() line: string = "normal";
  @Prop() label: string;
  @Prop() padding: number = 0;
  @Prop() height: number = 1;

  render() {
    var className = classMapper(this);
    return (
      <hr
        class={className}
        style={{
          paddingLeft: `${this.padding}rem`,
          marginTop: `${this.height}rem`
        }}
      >
        <div class="divider__content">{this.label}</div>
      </hr>
    );
  }
}
