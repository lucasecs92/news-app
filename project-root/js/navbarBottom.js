import $ from 'jquery';
import '../styles/navbarBottom.css';

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
                    <a href="#">Entretenimento</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Business</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Esportes</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Saúde</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Tecnologia</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Ciência</a>
                </li>
            </ul>
        </section>
    `;
    
    $('#navbar-bottom').html(navbarHTML);
}

document.addEventListener('DOMContentLoaded', function() { loadNavbarBottom(); });
