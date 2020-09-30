import { Component, Prop } from "@stencil/core";
import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";
import { classMap } from "./classMap";

var classMapper = mapPropsToClasses("list", classMap);

@Component({
  tag: "ui-list",
  styleUrl: "ui-list.css"
})
export class UIList {
  @Prop() elevation: number;
  @Prop() interactive: boolean;
  @Prop() comps: any;
  render() {
    var className = classMapper(this);

    return (
      <div class={className}>
        <slot />
      </div>
    );
  }
}
