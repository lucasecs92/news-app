import $ from "jquery";

const API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '2dc0825f6234474ab137f53b8add4125';

export function loadBusinessContent() {
  $.ajax({
    url: `${API_URL}?country=us&category=business&apiKey=${API_KEY}`,
    method: 'GET',
    success: function(response) {
      try {
        const businessHTML = response.articles.map((article, index) => {
          if (article.title !== '[Removed]' && article.description !== null) {
            return `
              <section class="card news-card" id="news-card-${index}">
                <section class="card-body">
                  <img src="${article.urlToImage}" class="card-img-top news-img" alt="${article.title}" title="${article.title}"><br>
                  <section class="card-text news-text">
                    <h2 class="card-title news-title">${article.title}</h2>
                    <p>${article.description}</p>
                  </section>
                </section>
              </section>
            `;
          }
        }).join('');

        $("#main-content").html(`
          <section id="business-content">
            <h2 class="news-card-title">Negócios</h2>
            ${businessHTML}
          </section>
        `);

      } catch (err) {
        console.error('Erro ao processar artigos: ', err);
      }
    },
    error: function(err) {
      console.error('Erro ao buscar notícias: ', err);
    }
  });
}

