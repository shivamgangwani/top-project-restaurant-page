import { init, updatePage } from './shared.js';
import homePage from './page_home.js';
import menu from './page_menu.js';
import contactUs from './page_contact.js';

const pageToObjectMap = {
    "home" : homePage,
    "menu" : menu,
    "contact" : contactUs
}

const navBarBtnTextToModuleMap = {
    "Home" : "home",
    "Menu" : "menu",
    "Contact Us" : "contact"
}

const refreshPage = () => updatePage(pageToObjectMap[currentPage]);
const changePage = (newModule) => {
    currentPage = newModule;
    refreshPage();
}

function createNavButton(btnText, module) {
    let btnEl = document.createElement("button");
    btnEl.textContent = btnText;
    btnEl.setAttribute("module", module);
    btnEl.addEventListener('click', () => changePage(module));
    return btnEl;
}

function createNavBar(btnTextToModuleMap) {
    const NavBar = document.querySelector("#page-head-nav");
    for(const [text, module] of Object.entries(btnTextToModuleMap)) {
        let navBtn = createNavButton(text, module);
        NavBar.appendChild(navBtn);
    }
}

// Initially, let's start the homepage
let currentPage = "home";

// Script begins
// Create the structure of the webpage
init();
refreshPage();
createNavBar(navBarBtnTextToModuleMap);