import { createElementEx, setPageHeadImage } from "./shared.js";

// Image from Google
import headImg from "../imgs/heading-contact-us.jpeg";


export default function() {
    let head = createElementEx("div", "page-copy-head");
    let head_h1 = createElementEx("h1", "", "", "Contact Us");
    head.appendChild(head_h1);

    let body = createElementEx("div", "page-copy-body", [], "Reach out to us at +69420-EAT-FOOD");
    setPageHeadImage(headImg);
    return [head, body];
}