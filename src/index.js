import "./styles/reset.css";
import "./styles/global.css";
import createHomePage from "./pages/home";
import createMenuPage from "./pages/menu";

let contentDiv = document.querySelector("#content");
let homePage = createHomePage();

contentDiv.appendChild(homePage);