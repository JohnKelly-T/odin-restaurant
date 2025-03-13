import "../styles/home.css";

export default () => {
    let page = document.createElement("div");
    
    let blurDiv = document.createElement("div");
    blurDiv.id = "blur";

    page.appendChild(blurDiv);

    return page;
};