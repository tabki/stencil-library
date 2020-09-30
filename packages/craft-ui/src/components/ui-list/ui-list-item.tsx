import { Component, Prop } from "@stencil/core";
import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";
import { classMap } from "./classMap";

var classMapper = mapPropsToClasses("list-item", classMap);

@Component({
  tag: "ui-list-item",
  styleUrl: "ui-list.css"
})
export class UIListItem {
  render() {
    var className = classMapper(this);
    return (
      <li class={className} tabindex="0">
        <slot />
      </li>
    );
  }
}
