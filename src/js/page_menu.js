import { createElementEx, setPageHeadImage } from "./shared.js";

// Image from Google
import headImg from "../imgs/heading-menu.jpeg";


class MenuItem {
    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }

    getDOMElement() {
        let tmpEl = createElementEx("div", "", ['menu-item'], "");
        let itemName = createElementEx("div", "", ['menu-item-name'], this.name);
        let itemPrice = createElementEx("div", "", ['menu-item-price'], `₹${this.price}`)
        let itemCalories = createElementEx("div", "", ['menu-item-calories'], `${this.calories} kcals`);
        tmpEl.replaceChildren(itemName, itemCalories);
        return tmpEl;
    }
}


export default function() {

    const menuItems = {
        "Appetizers" : [
            new MenuItem("French Fries", 140, 244),
            new MenuItem("Chicken Strips", 210, 320),
            new MenuItem("Bruschetta", 180, 265)
        ],

        "Main Course" : [
            new MenuItem("Chicken Pizza", 650, 850),
            new MenuItem("Club Sandwich", 600, 788),
            new MenuItem("Chicken Steak", 620, 815)
        ],
        "Drinks" : [
            new MenuItem("Nimbu Paani", 80, 45),
            new MenuItem("Masala Coke", 65, 120)
        ],
        "Desserts" : [
            new MenuItem("Chocolate Noir Ice Cream", 180, 210),
            new MenuItem("Chocolate Raspberry Cheesecake", 240, 365)
        ]
    }

    let head = createElementEx("div", "page-copy-head");
    let head_h1 = createElementEx("h1", "", "", "Menu");
    head.appendChild(head_h1);

    let body = createElementEx("div", "page-copy-body", [], "");
    let menu = createElementEx("div", "menu", [], "");

    for(const [sectionName, items] of Object.entries(menuItems)) {
        let section = createElementEx("div", "", ['menu-section'], "");
        let secNameEl = createElementEx("div", "", ['menu-section-name'], sectionName);
        let sectionItems = createElementEx("div", "", ['menu-section-items'], "");
        for(let item of items) {
            sectionItems.appendChild(item.getDOMElement());
        }
        section.replaceChildren(secNameEl, sectionItems);
        menu.appendChild(section);
    }
    body.appendChild(menu);
    setPageHeadImage(headImg);
    return [head, body];
}