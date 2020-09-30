import { Component, Prop, Element, State } from "@stencil/core";
import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";
import Popper from "popper.js";

const hideElement = (element: HTMLElement) => {
  element.style.display = "none";
};

const showElement = (element: HTMLElement, displayType: string = "block") => {
  element.style.display = displayType;
};

@Component({
  tag: "ui-popover",
  styleUrl: "ui-popover.css"
})
export class UIPopover {
  @Prop() placement: string = "top";
  @Prop() trigger: string = "hover";
  @Element() el: HTMLElement;
  @State() popperInstance: any;
  @State() popperPlacement: any;
  @State() triggerEl: HTMLElement;
  @State() popoverContainerEl: HTMLElement;
  @State() popoverEl: HTMLElement;
  @State() isVisable: boolean;

  // call when component has loaded
  initState() {
    this.popperPlacement = this.placement;
    this.popoverEl = this.el.querySelector(".ui-popover") as HTMLElement;

    this.triggerEl = this.el.querySelector(
      ".ui-popover__trigger-area"
    ) as HTMLElement;

    this.popoverContainerEl = this.el.querySelector(
      ".ui-popover__container"
    ) as HTMLElement;
  }

  createPopper() {
    var arrow = this.el.querySelector("ui-arrow-box").getArrowElement();

    var placement = this.placement as Popper.Placement;
    var uiPopper = this;
    //TODO: Break this out into seperate function
    this.popperInstance = new Popper(this.popoverContainerEl, this.popoverEl, {
      placement: placement,
      modifiers: {
        arrow: {
          enabled: true,
          element: arrow
        }
      },
      onCreate() {
        uiPopper.popperPlacement = uiPopper.popoverEl.getAttribute(
          "x-placement"
        );
      },
      onUpdate() {
        uiPopper.popperPlacement = uiPopper.popoverEl.getAttribute(
          "x-placement"
        );
      }
    });
  }

  show() {
    if (typeof this.popperInstance === "undefined") {
      this.createPopper();
    }
    if (!this.isVisable) {
      showElement(this.popoverEl);
      this.popperInstance.update();
    }
    this.isVisable = true;
  }

  hide() {
    hideElement(this.popoverEl);
    this.isVisable = false;
  }

  toggle() {
    if (!this.isVisable) {
      this.show();
    } else {
      this.hide();
    }
  }

  registerMouseEnterLeaveEvents() {
    this.triggerEl.addEventListener("mouseover", () => {
      this.show();
    });
    this.triggerEl.addEventListener("mouseout", () => {
      this.hide();
    });
  }

  registerMouseClickEvents() {
    this.triggerEl.addEventListener("click", () => {
      this.toggle();
      //this.triggerEl.active();
      this.popoverEl.focus();
    });

    this.popoverEl.addEventListener("focusout", () => {
      console.warn("do something");
      this.toggle();
    });
  }

  componentDidLoad() {
    this.initState();
    this.hide();
    switch (this.trigger) {
      case "hover":
        this.registerMouseEnterLeaveEvents();
      case "click":
        this.registerMouseClickEvents();
    }
  }

  render() {
    return (
      <div class="ui-popover__container">
        <div class="ui-popover__trigger-area">
          <ui-button>Open</ui-button>
        </div>

        <div class="ui-popover" tabindex="-1">
          <ui-arrow-box placement={this.popperPlacement}>Popover</ui-arrow-box>
        </div>
      </div>
    );
  }
}
