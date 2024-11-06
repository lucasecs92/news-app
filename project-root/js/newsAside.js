import $ from "jquery";
import '../styles/newsAside.css';

const API_URL_ASIDE = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '2dc0825f6234474ab137f53b8add4125';

function appendAside(article, index) {
    if (article.title !== '[Removed]' && article.description !== null) {
        $('.card-aside').append(`
            <section class="card news-card-aside" id="news-card-aside-${index}">
                <section class="card-body-aside">
                    <img src="${article.urlToImage}" class="card-img-top news-img-aside" alt="${article.title}" title="${article.title}"><br>
                    <section class="card-text news-text-aside">
                        <h2 class="news-title-aside">${article.title}</h2>
                        <p>${article.description}</p>
                    </section>
                </section>
            </section>
        `);
    }
}

function getNews() {
    $.ajax({
        url: `${API_URL_ASIDE}?country=us&category=sports&apiKey=${API_KEY}`,
        method: 'GET',
        success: function(response) {
            try {
                response.articles.forEach((article, index) => {
                    appendAside(article, index);
                    console.log(article.title);
                });
            } catch (err) {
                console.error('Erro ao processar artigos: ', err);
            }
        },
        error: function(err) {
            console.error('Erro ao buscar notícias: ', err);
        }
    });
}

getNews();
