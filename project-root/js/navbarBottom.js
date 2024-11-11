import $ from "jquery";
import "../styles/navbarBottom.css";
import { loadEntertainmentContent } from "./entertainment.js";
import { loadBusinessContent } from "./business.js";
import { loadSportsContent } from "./sports.js";
import { loadHealthContent } from "./health.js";
import { loadTechnologyContent } from "./technology.js";
import { loadScienceContent } from "./science.js";

function loadNavbarBottom() {
    const navbarHTML = `
        <section id="nav-bottom-wrap">
            <ul>
                <li>
                    <a href="entretenimento" id="entertainment">Entretenimento</a>
                </li>
                <li>
                    <a href="negocios" id="business">Negócios</a>
                </li>
                <li>
                    <a href="esportes" id="sports">Esportes</a>
                </li>
                <li>
                    <a href="saude" id="health">Saúde</a>
                </li>
                <li>
                    <a href="tecnologia" id="technology">Tecnologia</a>
                </li>
                <li>
                    <a href="ciencia" id="science">Ciência</a>
                </li>
            </ul>
        </section>
    `;

    $("#navbar-bottom").html(navbarHTML);

    $("#entertainment").on("click", function (event) {
        event.preventDefault();
        loadEntertainmentContent();
    });

    $("#business").on("click", function (event) {
        event.preventDefault();
        loadBusinessContent();
    });

    $("#sports").on("click", function (event) {
        event.preventDefault();
        loadSportsContent();
    });

    $("#health").on("click", function (event) {
        event.preventDefault();
        loadHealthContent();
    });

    $("#technology").on("click", function (event) {
        event.preventDefault();
        loadTechnologyContent();
    });

    $("#science").on("click", function (event) {
        event.preventDefault();
        loadScienceContent();
    });
}

function fixNavbarOnScroll() {
  const navbarMain = document.querySelector("#navbar-main");
  const navbarBottomWrap = document.querySelector("#nav-bottom-wrap");

  window.addEventListener("scroll", () => {
    const navbarMainHeight = navbarMain.offsetHeight;
    if (window.scrollY >= navbarMainHeight) {
      navbarBottomWrap.classList.add("fixed");
    } else {
      navbarBottomWrap.classList.remove("fixed");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  loadNavbarBottom();
  fixNavbarOnScroll();
});
