import $ from 'jquery';

function loadNavbarBottom() {
    const navbarHTML = `
        <section id="nav-bottom-wrap">
            
        </section>
    `;
    
    $('#navbar-bottom').html(navbarHTML);
}

document.addEventListener('DOMContentLoaded', function() { loadNavbarBottom(); });
