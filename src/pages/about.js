import "../styles/about.css";

export default () => {
    let page = document.createElement("div");
    page.id = "about-content";

    let aboutMainContainer = document.createElement("div");
    aboutMainContainer.id = "about-main-container";

    let aboutHeading = document.createElement("div");
    aboutHeading.id = "about-heading";
    aboutHeading.textContent = "About us";
    aboutMainContainer.appendChild(aboutHeading);

    let aboutDescription = document.createElement("div");
    aboutDescription.id = "about-description";
    aboutDescription.textContent = "At Odin Dining, we craft legendary dining experiences inspired by the grandeur of Norse mythology. Each dish is a tribute to the feasts of Valhalla, blending artistry, fire, and the finest ingredients to create flavors worthy of the gods. From exquisite starters to divine desserts, every bite tells a story of indulgence and mastery. Step into our hall, where myth meets modern fine dining, and savor a meal destined for legends.";
    aboutMainContainer.appendChild(aboutDescription);

    let contactHeading = document.createElement("div");
    contactHeading.id = "contact-heading";
    contactHeading.textContent = "Contact";
    aboutMainContainer.appendChild(contactHeading);

    let contactInfo = document.createElement("div");
    contactInfo.id = "contact-info";
    contactInfo.textContent = "Visit us at 9 Asgard Avenue, Valhalla District, or reach out at contact@odindining.com | +1 (999) 555-ODIN.";
    aboutMainContainer.appendChild(contactInfo);

    let aboutImageContainer = document.createElement("div");
    aboutImageContainer.id = "about-image-container";

    page.appendChild(aboutMainContainer);
    page.appendChild(aboutImageContainer);

    document.body.className = '';
    document.body.classList.add("body-about");
    
    return page;
}