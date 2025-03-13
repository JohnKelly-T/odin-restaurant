import "../styles/home.css";

export default () => {
    let page = document.createElement("div");
    page.id = "homeContent";
    
    let blurDiv = document.createElement("div");
    blurDiv.id = "blur";

    page.appendChild(blurDiv);

    let welcomeMessageContainer = document.createElement("div");
    welcomeMessageContainer.id = "welcome-message-container";

    let welcomeMessage = document.createElement("div");
    welcomeMessage.id = "welcome-message";
    welcomeMessage.textContent = "Welcome to";
    welcomeMessageContainer.appendChild(welcomeMessage);

    let restaurantName = document.createElement("div");
    restaurantName.id = "restaurant-name";
    restaurantName.textContent = "Odin Dining";
    welcomeMessageContainer.appendChild(restaurantName);

    page.appendChild(welcomeMessageContainer);
    
    // add attribution to background image in footer
    let backgroundAttribution = document.createElement("div");
    backgroundAttribution.id = "background-attribution";
    let attributionLink = document.createElement("a");
    attributionLink.href = "https://www.pexels.com/photo/clear-long-stemmed-wine-glass-on-brown-table-1484516/";
    attributionLink.textContent = "Photo by Valeria Boltneva from pexels.com";
    backgroundAttribution.appendChild(attributionLink);

    page.appendChild(backgroundAttribution);

    // add class to body
    document.body.className = '';
    document.body.classList.add("body-home");

    return page;
};