import { Component, Prop, Element, State } from "@stencil/core";
import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";
/// <reference path="node_module/popper.js/index.d.ts" />
import Popper from "popper.js";

const hideElement = (element: HTMLElement) => {
  element.style.display = "none";
};

const showElement = (element: HTMLElement, displayType: string = "block") => {
  element.style.display = displayType;
};

@Component({
  tag: "ui-tooltip",
  styleUrl: "ui-tooltip.css"
})
export class UITooltip {
  @Element() el: HTMLElement;
  @State() popper: any;
  @Prop() placement: any;
  @State() popperPlacement: any;
  @State() tooltipNode: any;

  createPopper() {
    var container = this.el.querySelector(".tooltip__container");
    container.appendChild(this.tooltipNode);

    var button = this.el.querySelector(".tooltip__container");
    var arrow = this.el.querySelector("ui-arrow-box").getArrowElement();
    var popout = this.el.querySelector(".tippy") as HTMLElement;

    console.warn(arrow);
    showElement(popout);

    if (this.popper) return;
    var popper = this.el;
    var uiTooltip = this;
    this.popper = new Popper(button, popout, {
      placement: this.placement,
      modifiers: {
        arrow: {
          enabled: true,
          element: arrow
        }
      },
      onCreate() {
        uiTooltip.popperPlacement = popout.getAttribute("x-placement");
      },
      onUpdate() {
        uiTooltip.popperPlacement = popout.getAttribute("x-placement");
      }
    });
  }
  componentDidLoad() {
    var tooltipElement = this.el.querySelector(".tippy") as HTMLElement;
    this.tooltipNode = tooltipElement;
    tooltipElement.remove();
    console.warn(this.tooltipNode);

    this.popperPlacement = this.placement;
    var button = this.el.querySelector("ui-button");

    button.addEventListener("mouseover", () => {
      this.createPopper();
    });

    button.addEventListener("mouseout", () => {
      var tippy = this.el.querySelector(".tippy") as HTMLElement;
      console.warn("tippy", tippy);
      hideElement(tippy);
      tooltipElement.remove();
      this.popper.destroy();
    });
  }

  render() {
    return (
      <div class="tooltip__container">
        <ui-button>hello</ui-button>
        <div class="tippy" style={{ zIndex: "99", display: "none" }}>
          <ui-arrow-box placement={this.popperPlacement}>
            s is some content
          </ui-arrow-box>
        </div>
      </div>
    );
  }
}
