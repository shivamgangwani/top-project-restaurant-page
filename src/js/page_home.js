import { createElementEx } from "./shared.js";

export default function() {
    let head = createElementEx("div", "page-copy-head");
    let head_h1 = createElementEx("h1", "", [], "Homepage");
    head.appendChild(head_h1);

    let body = createElementEx("div", "page-copy-body", [], "Welcome to the Homepage!");
    return [head, body];
}