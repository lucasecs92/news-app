import $ from "jquery";

const API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '2dc0825f6234474ab137f53b8add4125';

function timeSince(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return `Há ${interval} anos`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `Há ${interval} meses`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `Há ${interval} dias`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `Há ${interval} horas`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `Há ${interval} minutos`;
  }
  return `Há ${Math.floor(seconds)} segundos`;
}

export function loadSportsContent() {
  $.ajax({
    url: `${API_URL}?country=us&category=sports&apiKey=${API_KEY}`,
    method: 'GET',
    success: function(response) {
      try {
        const sportsHTML = response.articles.map((article, index) => {
          if (article.title !== '[Removed]' && article.description !== null) {
            const timeElapsed = timeSince(article.publishedAt);

            return `
              <section class="card news-card" id="news-card-${index}">
                <section class="card-body">
                  <img src="${article.urlToImage}" class="card-img-top news-img" alt="${article.title}" title="${article.title}"><br>
                  <section class="card-text news-text">
                    <h2 class="card-title news-title">${article.title}</h2>
                    <p>${article.description}</p>
                    <p class="news-time-published">${timeElapsed}</p>
                  </section>
                </section>
              </section>
            `;
          }
        }).join('');

        $("#main-content").html(`
          <section id="sports-content">
            <h2 class="news-card-title">Esportes</h2>
            ${sportsHTML}
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

