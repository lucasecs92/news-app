import $ from "jquery";
import "../styles/navbarMain.css";

function loadNavbarMain() {
  const navbarHTML = `
    <section id="navbar-main-wrap">
      <section id="nav-logo">
        <a href="/">
          <h1>News App</h1>
        </a>
      </section>
    </section>
  `;
  $("#navbar-main").html(navbarHTML);
}

document.addEventListener("DOMContentLoaded", function () {
    loadNavbarMain();
});
