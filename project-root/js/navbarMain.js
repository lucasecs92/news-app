import $ from "jquery";
import "../styles/navbarMain.css";

function loadNavbarMain() {
  const navbarHTML = `
        <section id="navbar-wrap">
            <section id="nav-date-wrap">
                <span id="nav-date"></span>
            </section>

            <section id="nav-logo">
                <a href="/">
                  <h1>News App</h1>
                </a>
            </section>

            <section id="nav-search">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045l4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242zm-2.076-9.15a6 6 0 1 1-8.485 8.485a6 6 0 0 1 8.485-8.485"/>
                </svg>
                <input 
                    ref="searchField"
                    id="search-field" 
                    type="text" 
                    placeholder="BUSCAR"
                >
            </section>
        </section>
    `;

  $("#navbar-main").html(navbarHTML);
}

// API de data, World Time API
function loadDate() {
  $.ajax({
    url: "https://worldtimeapi.org/api/timezone/America/Sao_Paulo",
    method: "GET",
    success: function (response) {
      const currentDateTime = new Date(response.datetime);
      const formattedDate = currentDateTime.toLocaleString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      $("#nav-date").html(`${formattedDate}`);
    },
    error: function (err) {
      console.error("Erro ao obter a data: ", err);
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  loadNavbarMain();
  loadDate();
});
