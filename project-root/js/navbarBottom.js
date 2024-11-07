import $ from "jquery";
import "../styles/navbarBottom.css";
import { loadEntertainmentContent } from "./entertainment.js";
import { loadBusinessContent } from "./business.js";

function loadNavbarBottom() {
  const navbarHTML = `
        <section id="nav-bottom-wrap">
            <ul>
                <li>
                    <a href="#">Geral</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="entretenimento" id="entertainment">Entretenimento</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="negocios" id="business">Negócios</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#" id="esportes">Esportes</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#" id="saude">Saúde</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#" id="tecnologia">Tecnologia</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#" id="ciencia">Ciência</a>
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
