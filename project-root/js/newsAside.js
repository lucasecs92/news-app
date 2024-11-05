import $ from "jquery";
import '../styles/news-aside.css';

const API_URL_ASIDE = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '2dc0825f6234474ab137f53b8add4125';

function appendAside(article, index) {
    if (article.title !== '[Removed]' && article.description !== null) {
        $('.card-aside').append(`
            <div class="card news-card-aside" id="news-card-aside-${index}">
                <div class="card-body-aside">
                    <img src="${article.urlToImage}" class="card-img-top news-img" alt="${article.title}" title="${article.title}"><br>
                    <div class="card-text news-text">
                        <h2 class="card-title news-title-aside">${article.title}</h2>
                        <p>${article.description}</p>
                    </div>
                </div>
            </div>
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
