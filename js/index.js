function toggleTheme() {
    const body = document.querySelector("body");
    const header = document.querySelector(".header-title");

    const currentBg = window.getComputedStyle(body).backgroundColor;
    const isLight = currentBg === "rgb(243, 240, 239)";

    body.style.backgroundColor = isLight ? "#202020" : "#f3f0ef";
    header.style.backgroundColor = isLight ? "#202020" : "#f3f0ef";

    const elements = document.querySelectorAll("h1, h2, p");
    elements.forEach(el => {
        el.style.color = isLight ? "#f3f0ef" : "#202020";
    });
}

let fontSizeLevel = 0;
function changeFontSize() {
    const elements = document.querySelectorAll("h1, h2, p");
    
    fontSizeLevel = (fontSizeLevel + 1) % 6;

    elements.forEach(el => {
        switch(fontSizeLevel) {
            case 0:
                el.style.fontSize = "";
                break;
            case 1:
                el.style.fontSize = "1.2em";
                break;
            case 2:
                el.style.fontSize = "1.5em";
                break;
            case 3:
                el.style.fontSize = "1.8em";
                break;
            case 4:
                el.style.fontSize = "2.1em";
                break;
            case 5:
                el.style.fontSize = "2.4em";
                break;
        }
    });
}
