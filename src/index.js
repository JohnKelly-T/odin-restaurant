import "./styles/reset.css";
import "./styles/global.css";
import createHomePage from "./pages/home";

let contentDiv = document.querySelector("#content");
let homePage = createHomePage();

contentDiv.appendChild(homePage);
document.body.classList.add("body-home");