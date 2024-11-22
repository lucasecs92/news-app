import $ from "jquery";
import "./styles/global.css";
import "./styles/mainNews.css";

const API_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = "2dc0825f6234474ab137f53b8add4125";

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

function appendArticle(article, index) {
  if (article.title !== "[Removed]" && article.description !== null) {
    const timeElapsed = timeSince(article.publishedAt);

    $("#main-news").append(`
      <section class="main-news-card" id="main-news-card-${index}">
        <section class="card-body">
          <img src="${article.urlToImage}" class="main-news-img" alt="${article.title}" title="${article.title}"><br>
          <section class="main-news-text">
            <h2 class="main-news-title">${article.title}</h2>
            <p class="main-news-description">${article.description}</p>
            <p class="main-news-time-published">${timeElapsed}</p>
          </section>
        </section>
      </section>
    `);
  }
}

function getNews() {
  $.ajax({
    url: `${API_URL}?country=us&category=general&apiKey=${API_KEY}`,
    method: "GET",
    success: function (response) {
      try {
        response.articles.forEach((article, index) => {
          appendArticle(article, index);
          console.log(article.title);
        });
      } catch (err) {
        console.error("Erro ao processar artigos: ", err);
      }
    },
    error: function (err) {
      console.error("Erro ao buscar notícias: ", err);
    },
  });
}

getNews();
