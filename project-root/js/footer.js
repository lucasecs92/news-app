import $ from "jquery";
import "../styles/footer.css";

$(function () {
    const footerContent = ` 
        <section class="footer-container"> 
            <p><span>&copy;</span> 2023 - News App</p> 
            <nav class="footer-nav"> 
                <ul> 
                    <li>
                        <a href="#">Sobre</a>
                    </li> 
                    <li>
                        <a href="#">Contato</a>
                    </li> 
                    <li>
                        <a href="#">Política de Privacidade</a>
                    </li> 
                </ul> 
            </nav> 
        </section> 
    `;

    $("#footer").html(footerContent);
});
