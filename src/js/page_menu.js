import { createElementEx, setPageHeadImage } from "./shared.js";

// Image from Google
import headImg from "../imgs/heading-menu.jpeg";


export default function() {
    let head = createElementEx("div", "page-copy-head");
    let head_h1 = createElementEx("h1", "", "", "Menu");
    head.appendChild(head_h1);

    let body = createElementEx("div", "page-copy-body", [], "Here's some food, go eat it!");
    setPageHeadImage(headImg);
    return [head, body];
}