///// IMPORTS /////
// Shared functions to manage application
import {
    init as createSkeleton, 
    updatePage,
    getPageNavBarElement
} from './js/shared.js';

// Page-specific modules
import homePage from './js/page_home.js';
import menu from './js/page_menu.js';
import contactUs from './js/page_contact.js';

import './css/style.css';


// Script begins
createSkeleton(); // This creates the skeleton of the page, with elements that we will now populate


class Pages {
    static allPages = [];
    static currentPage = null;
    static NavBar = getPageNavBarElement(); // This needs to be called after createSkeleton!

    constructor(slug, btnText, pageObj) {
        this.slug = slug;
        this.btnText = btnText;
        this.pageObj = pageObj;

        // Add to list of all pages - we use this list 
        Pages.allPages.push(this);

        // Add button to visit page
        let navBtn = Pages.createNavButton(btnText, slug);
        Pages.NavBar.appendChild(navBtn);
    }

    // UI management
    static createNavButton(btnText, module) {
        let btnEl = document.createElement("button");
        btnEl.textContent = btnText;
        btnEl.setAttribute("module", module);
        btnEl.addEventListener('click', () => Pages.changePage(module));
        return btnEl;
    }

    // State management
    static getPageFromSlug(slug) {
        for(let pg of Pages.allPages) {
            if(pg.slug == slug) return pg;
        }
        return null;
    }

    static changePage(newSlug) {
        Pages.currentPage = Pages.getPageFromSlug(newSlug);
        updatePage(Pages.currentPage.pageObj);
    }

    static init() {
        // Add pages
        let home = new Pages("home", "Homepage", homePage);
        new Pages("menu", "Menu", menu);
        new Pages("contactUs", "Contact Us", contactUs);
        
        Pages.changePage(home.slug);
    }
}

Pages.init();