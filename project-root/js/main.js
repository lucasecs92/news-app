import $ from "jquery";
import { API_URL, API_KEY, COUNTRY, CATEGORY_GENERAL } from "../js/config.js";
import { timeSince, displayError } from "../js/utils.js";
import "../styles/mainNews.css";

function appendArticle(article, index) {
  if (article.title !== "[Removed]" && article.description) {
    const timeElapsed = timeSince(article.publishedAt);
    $("#main-news").append(`
      <section class="main-news-card" id="main-news-card-${index}">
        <section class="card-body">
          <img src="${article.image}" class="main-news-img" alt="${article.title}" title="${article.title}">
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
    url: `${API_URL}?token=${API_KEY}&country=${COUNTRY}&topic=${CATEGORY_GENERAL}`,
    method: "GET",
    success: function (response) {
      try {
        response.articles.forEach((article, index) => {
          appendArticle(article, index);
          console.log(article.title);
        });
      } catch (err) {
        displayError("Erro ao processar artigos.");
        console.error("Erro ao processar artigos: ", err);
      }
    },
    error: function (err) {
      console.error("Erro ao buscar notícias: ", err);
      displayError(
        "Erro ao buscar notícias. Por favor, tente novamente mais tarde."
      );
    },
  });
}
getNews();

// CONFIG PARA EVITAR O CONSUMO DESNECESSÁRIO DA API, DURANTE O DESENVOLVIMENTO
// function getNews() {
//   // Verifica se os dados já estão armazenados no sessionStorage
//   if (sessionStorage.getItem("newsData")) {
//     const newsData = JSON.parse(sessionStorage.getItem("newsData"));
//     newsData.forEach((article, index) => {
//       appendArticle(article, index);
//     });
//   } else {
//     $.ajax({
//       url: `${API_URL}?token=${API_KEY}&country=${COUNTRY}&topic=${CATEGORY_GENERAL}`,
//       method: "GET", success: function (response) {
//         try {
//           // Armazena os dados no sessionStorage
//           sessionStorage.setItem("newsData", JSON.stringify(response.articles));
//           response.articles.forEach((article, index) => {
//             appendArticle(article, index);
//             console.log(article.title);
//           });
//         } catch (err) {
//           displayError("Erro ao processar artigos.");
//           console.error("Erro ao processar artigos: ", err);
//         }
//       }, error: function (err) {
//         console.error("Erro ao buscar notícias: ", err);
//         displayError(
//           "Erro ao buscar notícias. Por favor, tente novamente mais tarde."
//         );
//       },
//     });
//   }
// }

// getNews();