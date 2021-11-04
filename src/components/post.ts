import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("be-post")
export class Post extends LitElement {
  override render() {
    return html`
      <slot name="title"></slot>
      <slot name="body"></slot>
    `
  }
}
