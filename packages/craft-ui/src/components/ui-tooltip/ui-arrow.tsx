import { Component, Prop, Element, State, Watch } from "@stencil/core";
import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";

@Component({
  tag: "ui-arrow",
  styleUrl: "ui-tooltip.css"
})
export class UIArrow {
  @Prop() placement: string;
  @Prop() direction: string;
  @Prop() color: string;
  @Element() el: HTMLElement;

  render() {
    return (
      <div class={`ui-arrow ui-arrow-direction--${this.direction}`}>
        <svg
          class={`ui-arrow__svg ui-arrow__svg--${this.direction}`}
          viewBox="0 0 30 30"
        >
          <path
            class="arrow-border"
            d="M8.11 6.302c1.015-.936  1.887-2.922 1.887-4.297v26c0-1.378-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z"
          />
          <path
            class="arrow-fill"
            d="M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z"
          />
        </svg>
      </div>
    );
  }
}
