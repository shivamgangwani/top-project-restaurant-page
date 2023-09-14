function createElementWithId(tagName, id) {
    let el = document.createElement(tagName);
    el.id = id;
    return el;
}

function createPageHead() {
    let tmpDiv = createElementWithId("div", "page-head");
    let tmpH1 = document.createElement("h1");
    tmpH1.textContent = "Project: Restaurant Page";
    tmpDiv.appendChild(tmpH1);

    let navBtns = createElementWithId("div", "page-head-nav");
    tmpDiv.appendChild(navBtns);
    return tmpDiv;
}

function createPageCopy() {
    let tmpDiv = createElementWithId("div", "page-copy");
    let copyHeadDiv = createElementWithId("div", "page-copy-head");
    let copyHeadText = createElementWithId("div", "page-copy-body");

    tmpDiv.appendChild(copyHeadDiv);
    tmpDiv.appendChild(copyHeadText);
    return tmpDiv;
}

function setPageCopy(head, text) {
    let ContentCopyDiv = document.querySelector("div#page-copy");
    ContentCopyDiv.querySelector("#page-copy-head").textContent = head;
    ContentCopyDiv.querySelector("#page-copy-body").textContent = text;
}



// Export functions
export function updatePage(updateObj) {
    setPageCopy(updateObj.head, updateObj.body);
}

export function init() {
    const ContentDiv = document.querySelector("div#content");
    ContentDiv.appendChild(createPageHead());
    ContentDiv.appendChild(createPageCopy());
}