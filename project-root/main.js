import './styles/global.css';
import './styles/news-card.css';
import $ from "jquery";

const API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '2dc0825f6234474ab137f53b8add4125';

function appendArticle(article, index) {
    if (article.title !== '[Removed]' && article.description !== null) {
        $('#output').append(`
            <div class="card news-card" id="news-card-${index}">
                <div class="card-body">
                    <img src="${article.urlToImage}" class="card-img-top news-img" alt="${article.title}" title="${article.title}"><br>
                    <div class="card-text news-text">
                        <h2 class="card-title news-title">${article.title}</h2>
                        <p>${article.description}</p>
                    </div>
                </div>
            </div>
        `);
    }
}

function getNews() {
    $.ajax({
        url: `${API_URL}?country=us&apiKey=${API_KEY}`,
        method: 'GET',
        success: function(response) {
            try {
                response.articles.forEach((article, index) => {
                    appendArticle(article, index);
                    console.log(article.title);
                });
            } catch (err) {
                console.error('Erro ao processar artigos: ', err);
            }
            $('#copyright').html(response.copyright);
        },
        error: function(err) {
            console.error('Erro ao buscar notícias: ', err);
        }
    });
}

getNews();
