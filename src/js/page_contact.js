import { createElementEx } from "./shared.js";

export default function() {
    let head = createElementEx("div", "page-copy-head");
    let head_h1 = createElementEx("h1", "", "", "Contact Us");
    head.appendChild(head_h1);

    let body = createElementEx("div", "page-copy-body", [], "Reach out to us at +69420-EAT-FOOD");
    return [head, body];
}