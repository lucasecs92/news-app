import $ from 'jquery';
import '../styles/navbar.css';

function loadNavbarMain() {
    const navbarHTML = `
        <section id="navbar-wrap">
            <section id="nav-menu">
                <a id="nav-menu-left" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h12M6 12h12M6 16h12"/>
                    </svg>
                    <span>MENU</span>
                </a>
            </section>
            <section id="nav-logo">
                <h1>News App</h1>
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
    
    $('#navbar-main').html(navbarHTML);
}

document.addEventListener('DOMContentLoaded', function() { loadNavbarMain(); });
