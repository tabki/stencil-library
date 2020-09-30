import { Component, Prop } from "@stencil/core";

@Component({
  tag: "ui-card-content",
  styleUrl: "ui-card.css"
})
export class TruCardContent {
  @Prop() padding: number;
  render() {
    return (
      <div class="card-content" style={{ padding: `${this.padding}rem` }}>
        <slot />
      </div>
    );
  }
}
