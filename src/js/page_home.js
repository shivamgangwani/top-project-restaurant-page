import { createElementEx, setPageHeadImage } from "./shared.js";

// Image from https://www.squarespace.com/blog/how-to-make-a-website-for-your-restaurant-or-online-food-business
import headImg from "../imgs/heading-home.jpeg";

export default function() {
    let head = createElementEx("div", "page-copy-head");
    let head_h1 = createElementEx("h1", "", [], "Homepage");
    head.appendChild(head_h1);

    let body = createElementEx("div", "page-copy-body", [], "Welcome to the Homepage!");
    setPageHeadImage(headImg);
    return [head, body];
}