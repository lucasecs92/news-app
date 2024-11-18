import $ from "jquery";
import "../styles/newsAside.css";

const API_URL_ASIDE = "https://newsapi.org/v2/top-headlines";
const API_KEY = "2dc0825f6234474ab137f53b8add4125";

// Variável de ambiente para controlar o modo de desenvolvimento
// const isDevelopment = true; // Ajuste para true quando estiver desenvolvendo
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

function appendAside(article, index) {
  if (article.title !== "[Removed]" && article.description !== null) {
    const timeElapsed = timeSince(article.publishedAt);

    $("#aside-news").append(`
      <section class="news-card-aside" id="news-card-aside-${index}">
        <section class="card-body-aside">
          <img src="${article.urlToImage}" class="news-img-aside" alt="${article.title}" title="${article.title}">
          
          <section class="card-text news-text-aside">
            <h2 class="news-title-aside">${article.title}</h2>
            <p class="news-description">${article.description}</p>
            <p class="news-time-published">${timeElapsed}</p>
          </section>
          
        </section>
      </section>
    `);
  }
}

// function getMockNews() {
//   const mockData = {
//     articles: [
//       {
//         title: "Título de Teste 1",
//         description: "Descrição de teste 1",
//         urlToImage: "https://via.placeholder.com/150",
//       },
//       {
//         title: "Título de Teste 2",
//         description: "Descrição de teste 2",
//         urlToImage: "https://via.placeholder.com/150",
//       },
//     ],
//   };
//   mockData.articles.forEach((article, index) => {
//     appendAside(article, index);
//     console.log(article.title);
//   });
// }

function getNews() {
  $.ajax({
    url: `${API_URL_ASIDE}?country=us&category=general&apiKey=${API_KEY}`,
    method: "GET",
    success: function (response) {
      try {
        response.articles.forEach((article, index) => {
          appendAside(article, index);
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

// Executa getNews ou getMockNews com base no modo de desenvolvimento
// if (isDevelopment) {
//     getMockNews();
// } else {
//     getNews();
// }
