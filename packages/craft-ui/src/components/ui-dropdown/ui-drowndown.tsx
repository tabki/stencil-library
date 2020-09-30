import { Component, Prop, Element, State } from "@stencil/core";
import { mapPropsToClasses } from "../common/utils/mapPropsToClasses";
import { MDCMenu, Corner } from "@material/menu";
@Component({
  tag: "ui-dropdown",
  styleUrl: "ui-dropdown.css"
})
export class UIDropdown {
  @Prop() line: string = "normal";
  @Prop() label: string;
  @Prop() padding: number = 0;
  @Element() el: HTMLElement;
  @State() mdcMenu: any;

  componentDidLoad() {
    var menu = this.el.querySelector(".mdc-menu");
    this.mdcMenu = new MDCMenu(menu);
    this.mdcMenu.setAnchorCorner(Corner.BOTTOM_START);
  }

  toggleMenu() {
    console.warn(this.mdcMenu);
    if (this.mdcMenu) this.mdcMenu.open = !this.mdcMenu.open;
  }
  render() {
    return (
      <div id="demo-menu" class="mdc-menu-anchor">
        <div onClick={() => this.toggleMenu()}>
          <slot name="ui-dropdown-toggle" />
        </div>

        <div class="mdc-menu" tabindex="-1">
          <ul class="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
            <slot />
          </ul>
        </div>
      </div>
    );
  }
}
