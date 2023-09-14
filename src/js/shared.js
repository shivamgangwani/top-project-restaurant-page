const NAV_ID = "page-head-nav";
const COPY_ID = "page-copy";

function createPageHead() {
    let tmpDiv = createElementEx("div", "page-head", [], "");
    let tmpH1 = document.createElement("h1");
    tmpH1.textContent = "Project: Restaurant Page";
    tmpDiv.appendChild(tmpH1);

    let navBtns = createElementEx("div", NAV_ID, [], "");
    tmpDiv.appendChild(navBtns);
    return tmpDiv;
}

// Export functions
export function createElementEx(tagName, id="", classList=[], text="") {
    const el = document.createElement(tagName);
    if(id) el.id = id;
    if(classList.length > 0) el.classList.add(...classList);
    if(text) el.textContent = text;
    return el;
}

export function init() {
    const ContentDiv = document.querySelector("div#content");
    ContentDiv.appendChild(createPageHead());
    ContentDiv.appendChild(createElementEx("div", COPY_ID, [], ""));
}

export const getPageNavBarElement = () => document.querySelector(`#${NAV_ID}`);
export const getPageCopyElement = () => document.querySelector(`#${COPY_ID}`);

export function updatePage(newChildren) {
    const ContentCopyDiv = getPageCopyElement();
    ContentCopyDiv.replaceChildren(...newChildren);
}