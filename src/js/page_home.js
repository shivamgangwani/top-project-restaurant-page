import { createElementEx, setPageHeadImage } from "./shared.js";

// Image from https://www.squarespace.com/blog/how-to-make-a-website-for-your-restaurant-or-online-food-business
import headImg from "../imgs/heading-home.jpeg";

export default function() {
    let head = createElementEx("div", "page-copy-head");
    let head_h1 = createElementEx("h1", "", [], "Homepage");
    head.appendChild(head_h1);

    let body = createElementEx("div", "page-copy-body", [], "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sequi veritatis accusamus ut assumenda ipsum incidunt commodi, culpa aspernatur, unde, praesentium rerum quasi a eos fugiat nulla magnam tempore. Obcaecati?");
    setPageHeadImage(headImg);
    return [head, body];
}