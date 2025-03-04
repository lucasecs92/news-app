import $ from "jquery";
import "../styles/newsAside.css";
import { API_URL, API_KEY, COUNTRY, CATEGORY_ENTERTAINMENT } from "./config";
import { timeSince, displayError } from "./utils";

function appendAside(article, index) {
  if (article.title !== "[Removed]" && article.description !== null) {
    const timeElapsed = timeSince(article.publishedAt);

    $("#aside-news").append(`
      <section class="news-card-aside" id="news-card-aside-${index}">
        <section class="card-body-aside">
          <img src="${article.image}" class="news-img-aside" alt="${article.title}" title="${article.title}">
          <section class="news-text-aside">
            <p class="news-author">${article.author || ""}</p>
            <h2 class="news-title-aside">${article.title}</h2>
            <p class="news-description">${article.description}</p>
            <p class="news-time-published">${timeElapsed}</p>
          </section>
        </section>
      </section>
    `);
  }
}

function getNews() {
  $.ajax({
    url: `${API_URL}?token=${API_KEY}&country=${COUNTRY}&topic=${CATEGORY_ENTERTAINMENT}`,
    method: "GET",
    success: function (response) {
      try {
        response.articles.forEach((article, index) => {
          appendAside(article, index);
          console.log(article.title);
        });
      } catch (err) {
        console.error("Erro ao processar artigos: ", err);
        displayError("Erro ao processar artigos.");
      }
    },
    error: function (err) {
      console.error("Erro ao buscar notícias: ", err);
      displayError("Erro ao buscar notícias.");
    },
  });
}
getNews();

// CONFIG PARA EVITAR O CONSUMO DESNECESSÁRIO DA API, DURANTE O DESENVOLVIMENTO
// function getNews() {
//   // Verifica se os dados já estão armazenados no sessionStorage
//   if (sessionStorage.getItem("newsAsideData")) {
//     const newsData = JSON.parse(sessionStorage.getItem("newsAsideData"));
//     newsData.forEach((article, index) => {
//       appendAside(article, index);
//     });
//   } else {
//     $.ajax({
//       url: `${API_URL}?token=${API_KEY}&country=${COUNTRY}&topic=${CATEGORY_ENTERTAINMENT}`,
//       method: "GET",
//       success: function (response) {
//         try {
//           // Armazena os dados no sessionStorage
//           sessionStorage.setItem("newsAsideData", JSON.stringify(response.articles));
//           response.articles.forEach((article, index) => {
//             appendAside(article, index);
//             console.log(article.title);
//           });
//         } catch (err) {
//           console.error("Erro ao processar artigos: ", err);
//           displayError("Erro ao processar artigos.");
//         }
//       },
//       error: function (err) {
//         console.error("Erro ao buscar notícias: ", err);
//         displayError("Erro ao buscar notícias.");
//       },
//     });
//   }
// }

// getNews();
