function nav() {
    let links = {
        index: "Home",
        page1: "page 1",
        page2: "page 2",
        page3: "page 3",
        page4: "page 4",
    }
    document.write(`<div class="nav"><ul>`);

    for (link in links) {
        document.write(`<li><a href="${link}.html">${links[link]}</a></li>`);

    }
    document.write(`</ul ></div >`);
}







