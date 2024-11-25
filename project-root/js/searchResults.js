import $ from "jquery";
import "../styles/searchResults.css";
import { API_URL, API_KEY } from "./config"; 
import { timeSince as utilsTimeSince, displayError } from "./utils";

function renderSearchResults(articles, query) {
    const resultsHTML = articles.map((article, index) => {
        if (article.title !== '[Removed]' && article.description !== null) {
            const timeElapsed = localTimeSince(article.publishedAt);

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

function formatDate(date) { 
    const options = { day: 'numeric', month: 'short' }; // Formato de dia e mês abreviado 
    return new Date(date).toLocaleDateString('pt-BR', options); // Formato de data pt-BR 
}

function localTimeSince(date) {
    const timeElapsed = formatDate(date); 
    return `Publicado em ${timeElapsed}`;
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
                displayError('Erro ao processar artigos.');
            }
        },
        error: function(err) {
            console.error('Erro ao buscar notícias: ', err);
            displayError('Erro ao buscar notícias.');
        }
    });
}