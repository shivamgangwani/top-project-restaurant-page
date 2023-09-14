import { createElementEx } from "./shared.js";

export default function() {
    let head = createElementEx("div", "page-copy-head");
    let head_h1 = createElementEx("h1", "", "", "Menu");
    head.appendChild(head_h1);

    let body = createElementEx("div", "page-copy-body", [], "Here's some food, go eat it!");
    return [head, body];
}