import $ from "jquery";
import "../styles/searchResults.css";

const API_URL = 'https://newsapi.org/v2/everything';
const API_KEY = '2dc0825f6234474ab137f53b8add4125';

function formatDate(date) { 
    const options = { day: 'numeric', month: 'short' }; // Formato de dia e mês abreviado 
    return new Date(date).toLocaleDateString('pt-BR', options); // Formato de data pt-BR 
}

function timeSince(date) {
    const timeElapsed = formatDate(date); 
    return `Publicado em ${timeElapsed}`;
}

function renderSearchResults(articles, query) {
    const resultsHTML = articles.map((article, index) => {
        if (article.title !== '[Removed]' && article.description !== null) {
            const timeElapsed = timeSince(article.publishedAt);

            return `
                <section class="result-search-card" id="result-search-card-${index}">
                    <section class="result-card-body">
                        <img src="${article.urlToImage}" class="result-news-img" alt="${article.title}" title="${article.title}"><br>
                        <section class="result-news-text">
                            <h2 class="result-news-title">${article.title}</h2>
                            <p class="result-news-p">${article.description}</p>
                        </section>
                        <p class="result-news-time-published">${timeElapsed}</p>
                    </section>
                </section>
            `;
        }
    }).join('');

    $("#main-content").html(`
        <section id="search-results-content">
            <h2 class="search-results-card-title">Resultados da Busca: ${query}</h2>
            ${resultsHTML}
        </section>
    `);
}

export function searchArticles(query) {
    $.ajax({
        url: `${API_URL}?q=${query}&apiKey=${API_KEY}`,
        method: 'GET',
        success: function(response) {
            try {
                renderSearchResults(response.articles, query);
            } catch (err) {
                console.error('Erro ao processar artigos: ', err);
            }
        },
        error: function(err) {
            console.error('Erro ao buscar notícias: ', err);
        }
    });
}