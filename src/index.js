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

class Page {
    constructor(slug, btnText, pageObj) {
        this.slug = slug;
        this.btnText = btnText;
        this.pageObj = pageObj;
    }
}

// Module for managing the navigation
(function() {
    createSkeleton(); // This creates the skeleton of the page, i.e, page-head and page-copy

    const allPages = [];
    let currentPage = null;
    const navBar = getPageNavBarElement();

    function addPage(slug, btnText, pageObj) {
        const page = new Page(slug, btnText, pageObj);

        // Add to list of all pages - we use this list 
        allPages.push(page);

        // Add button to visit page
        let navBtn = createNavButton(btnText, slug);
        navBar.appendChild(navBtn);

        return page;
    }

    function createNavButton(btnText, module) {
        let btnEl = document.createElement("button");
        btnEl.textContent = btnText;
        btnEl.setAttribute("module", module);
        btnEl.addEventListener('click', () => changePage(module));
        return btnEl;
    }

    // State management
    function getPageFromSlug(slug) {
        return allPages.find((pg) => pg.slug === slug);
    }

    function changePage(newSlug) {
        currentPage = getPageFromSlug(newSlug);
        updatePage(currentPage.pageObj);
    }

    function init() {
        // Add pages
        let home = addPage("home", "Homepage", homePage);
        addPage("menu", "Menu", menu);
        addPage("contactUs", "Contact Us", contactUs);
        
        // Load home as default
        changePage(home.slug);
    }

    init();
})();