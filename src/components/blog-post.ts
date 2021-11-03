import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("blog-post")
export class BlogPost extends LitElement {
  @property()
  postTitle = "My Title"

  @property()
  postBody = ""

  override render() {
    return html`
      <h1>${this.postTitle}</h1>
      <div>${this.postBody}</div>
    `
  }
}
