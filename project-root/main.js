import './styles/global.css';
import $ from "jquery";

function getNews() {
  $.ajax({
      url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2dc0825f6234474ab137f53b8add4125',
      method: 'GET',
      success: function(response) {
          console.log(response.articles);
          const output = $('#output');
          try {
              response.articles.forEach(article => {
                  output.append(`
                      <div class="card">
                          <div class="card-body">
                              <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}" title="${article.title}"><br>
                              <h2 class="card-title">${article.title}</h2>
                              <div class="card-text">
                                  <p>${article.description}</p>
                              </div>
                          </div>
                      </div>
                      <br>
                  `);
                  console.log(article.title);
              });
          } catch (err) {
              console.log(err);
          }
          $('#copyright').html(response.copyright);
      },
      error: function(err) {
          console.log(err);
      }
  });
}

getNews();