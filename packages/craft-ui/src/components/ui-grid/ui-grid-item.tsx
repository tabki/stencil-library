import { Component, Prop } from "@stencil/core";
import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";

@Component({
  tag: "ui-grid-item",
  styleUrl: "ui-grid.css"
})
export class UIGrid {
  @Prop() gutter: number;
  @Prop() padding: number;

  render() {
    // get array of child elements

    return (
      <div class="grid-item" id="grid-item">
        <slot />
      </div>
    );
  }
}
