import "./styles/reset.css";
import "./styles/global.css";
import createHomePage from "./pages/home";
import createMenuPage from "./pages/menu";
import createAboutPage from "./pages/about";

let contentDiv = document.querySelector("#content");
let homePage = createHomePage();

let homeNav = document.querySelector("#home");
let menuNav = document.querySelector("#menu");

homeNav.addEventListener("click", () => {
    contentDiv.textContent = '';
    contentDiv.appendChild(createHomePage());
});

menuNav.addEventListener("click", () => {
    contentDiv.textContent = '';
    contentDiv.appendChild(createMenuPage());
});

contentDiv.appendChild(homePage);