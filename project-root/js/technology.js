import $ from "jquery";
import "../styles/newsCard.css";
import { API_URL, API_KEY, COUNTRY, CATEGORY_TECHNOLOGY } from "./config";
import { timeSince, displayError } from "./utils";

export function loadTechnologyContent() {
  $.ajax({
    url: `${API_URL}?token=${API_KEY}&country=${COUNTRY}&topic=${CATEGORY_TECHNOLOGY}`,
    method: 'GET',
    success: function(response) {
      try {
        const technologyHTML = response.articles.map((article, index) => {
          if (article.title !== '[Removed]' && article.description !== null) {
            const timeElapsed = timeSince(article.publishedAt);

            return `
              <section class="news-card" id="news-card-${index}">
                <section class="card-body">
                  <img src="${article.image}" class="news-img" alt="${article.title}" title="${article.title}"><br>
                  <section class="news-text">
                    <h2 class="nav-news-title">${article.title}</h2>
                    <p class="nav-news-description">${article.description}</p>
                    <p class="nav-news-time-published">${timeElapsed}</p>
                  </section>
                </section>
              </section>
            `;
          }
        }).join('');

        $("#main-content").html(`
          <section id="technology-content">
            <h2 class="news-card-title">Tecnologia</h2>
            ${technologyHTML}
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