import "../styles/menu.css";

export default () => {
    let page = document.createElement("div");
    page.id = "menu-content";

    let imagesContainer = document.createElement("div");
    imagesContainer.id = "menu-images-container";

    let image1 = document.createElement("div");
    image1.id = "menu-image-1";

    let image2 = document.createElement("div");
    image2.id = "menu-image-2";

    imagesContainer.appendChild(image1);
    imagesContainer.appendChild(image2);

    page.appendChild(imagesContainer);

    let menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";

    page.appendChild(menuContainer);

    document.body.className = '';
    document.body.classList.add("body-menu");
    
    return page;
}