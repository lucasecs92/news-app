import $ from "jquery";
import { API_URL, API_KEY, COUNTRY, CATEGORY } from "../js/config.js";
import { timeSince, displayError } from "../js/utils.js";
import "../styles/mainNews.css";

function appendArticle(article, index) {
  if (article.title !== "[Removed]" && article.description) {
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

async function getNews() {
  try {
    const response = await fetch(`${API_URL}?country=${COUNTRY}&category=${CATEGORY}&apiKey=${API_KEY}`);
    const data = await response.json();
    if (data.articles) {
      data.articles.forEach((article, index) => {
        appendArticle(article, index);
        console.log(article.title);
      });
    } else {
      displayError("Nenhuma notícia encontrada.");
    }
  } catch (err) {
    console.error("Erro ao buscar notícias: ", err);
    displayError("Erro ao buscar notícias. Por favor, tente novamente mais tarde.");
  }
}

getNews();
