import { LitElement, html, css, unsafeCSS } from "lit"
import { customElement, property } from "lit/decorators.js"
import { unsafeHTML } from "lit/directives/unsafe-html.js"
import Prism from "prismjs";

//@ts-ignore
import prismTheme from "../../node_modules/prismjs/themes/prism.css" assert { type: 'css'};

@customElement("be-code")
export class Code extends LitElement {
  static override styles = css`${unsafeCSS(prismTheme)}`;
  @property()
  language = "js";

  @property()
  code = "";

  private highlightedCode = "";

  constructor() {
    super();
    console.log(prismTheme);
  }

  override connectedCallback() {
    super.connectedCallback();
    if (this.code) {
      this.highlightedCode = Prism.highlight(this.code, Prism.languages.js, this.language);
    }
  }

  override render() {
    return html`
      <pre><code class="language-${this.language}">${unsafeHTML(this.highlightedCode)}</pre>
    `
  }
}
