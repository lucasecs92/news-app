import $ from "jquery";
import "../styles/navbarBottom.css";
import { loadEntertainmentContent } from "./entertainment.js";
import { loadBusinessContent } from "./business.js";
import { loadSportsContent } from "./sports.js";
import { loadHealthContent } from "./health.js";
import { loadTechnologyContent } from "./technology.js";
import { loadScienceContent } from "./science.js";

function loadNavbarBottom() {
  let isMenuOpen = false;

  const navbarHTML = `
        <section id="nav-bottom-wrap">
            <menu id="menu-icons">
                ${
                  isMenuOpen
                    ? '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L17.94 6M18 18L6.06 6"/></svg>'
                    : '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>'
                }
            </menu>
            <ul id="ul-list">
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

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    $("#ul-list").toggle();
    $("#menu-icons").html(
      isMenuOpen
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L17.94 6M18 18L6.06 6"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>'
    );
  };

  const updateMenuVisibility = () => {
    if (window.innerWidth >= 870) {
      $("#ul-list").show();
    } else {
      if (!isMenuOpen) {
        $("#ul-list").hide();
      }
    }
  };

  $("#menu-icons").on("click", toggleMenu); 

  $(window).on("resize", updateMenuVisibility); 

  updateMenuVisibility();

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
