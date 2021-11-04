import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import Prism from "prismjs";

@customElement("be-code")
export class Code extends LitElement {
  @property()
  language = "js";

  private highlightedCode = "";

  constructor() {
    super();
  }

  override firstUpdated() {
    if (this.code) {
      console.log('code content: ', this.code?.textContent);
      this.highlightedCode = Prism.highlight(this.code.textContent!, Prism.languages.js, this.language);
      console.log(this.highlightedCode);
    }
  }

  private get code() {
    return this.shadowRoot?.querySelector('slot')?.assignedNodes({flatten: true})[0];
  }

  override render() {
    return html`
      <slot name="code"></slot>
    `
  }
}
