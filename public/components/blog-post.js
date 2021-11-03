var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators";
let BlogPost = class BlogPost extends LitElement {
    constructor() {
        super(...arguments);
        this.postTitle = "My Title";
        this.postBody = "";
    }
    render() {
        return html `
      <h1>${this.postTitle}</h1>
      <div>${this.postBody}</div>
    `;
    }
};
__decorate([
    property()
], BlogPost.prototype, "postTitle", void 0);
__decorate([
    property()
], BlogPost.prototype, "postBody", void 0);
BlogPost = __decorate([
    customElement("blog-post")
], BlogPost);
export { BlogPost };
//# sourceMappingURL=blog-post.js.map