import "../styles/home.css";

export default () => {
    let page = document.createElement("div");
    
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
    
    return page;
};