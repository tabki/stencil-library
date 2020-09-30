import { Component, Prop, Element, State } from "@stencil/core";

@Component({
  tag: "ui-dropdown-item",
  styleUrl: "ui-dropdown.css",
  host: {
    theme: "mdc-list-item",
    role: "menuitem"
  }
})
export class UIDropdownItem {
  @Prop() tabindex: number = 0;
  @Element() el: HTMLElement;
  render() {
    this.el.setAttribute("tabindex", "0");
    return <slot />;
  }
}
