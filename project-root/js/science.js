import $ from "jquery";
import "../styles/newsCard.css";
import { API_URL, API_KEY, COUNTRY, CATEGORY_SCIENCE } from "./config";
import { timeSince, displayError } from "./utils";

export function loadScienceContent() {
  $.ajax({
    url: `${API_URL}?country=${COUNTRY}&category=${CATEGORY_SCIENCE}&apiKey=${API_KEY}`,
    method: 'GET',
    success: function(response) {
      try {
        const scienceHTML = response.articles.map((article, index) => {
          if (article.title !== '[Removed]' && article.description !== null) {
            const timeElapsed = timeSince(article.publishedAt);

            return `
              <section class="news-card" id="news-card-${index}">
                <section class="card-body">
                  <img src="${article.urlToImage}" class="news-img" alt="${article.title}" title="${article.title}"><br>
                  <section class="news-text">
                    <h2 class="news-title">${article.title}</h2>
                    <p>${article.description}</p>
                    <p class="news-time-published">${timeElapsed}</p>
                  </section>
                </section>
              </section>
            `;
          }
        }).join('');

        $("#main-content").html(`
          <section id="science-content">
            <h2 class="news-card-title">Ciência</h2>
            ${scienceHTML}
          </section>
        `);

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