import { Component, Prop } from "@stencil/core";
import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";
import { classMap } from "./classMap";

var classMapper = mapPropsToClasses("card", classMap);

@Component({
  tag: "ui-card",
  styleUrl: "ui-card.css"
})
export class TruCard {
  @Prop() elevation: number = 0;
  @Prop() interactive: boolean;
  render() {
    var className = classMapper(this);
    return (
      <div class={className}>
        <slot />
      </div>
    );
  }
}
