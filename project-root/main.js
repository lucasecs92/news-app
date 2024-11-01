import './styles/global.css';
import './styles/news-card.css';
import $ from "jquery";

function getNews() {
    $.ajax({
        url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2dc0825f6234474ab137f53b8add4125',
        method: 'GET',
        success: function(response) {
            console.log(response.articles);
            const output = $('#output');
            try {
                response.articles.forEach((article, index) => {
                    if (article.title !== '[Removed]' && article.description !== null) { 
                        output.append(`
                            <div class="card news-card" id="news-card-${index}">
                                <div class="card-body">
                                    <img src="${article.urlToImage}" class="card-img-top news-img" alt="${article.title}" title="${article.title}"><br>
                                    <div class="card-text news-text">
                                        <h2 class="card-title news-title">${article.title}</h2>
                                        <p>${article.description}</p>
                                    </div>
                                </div>
                            </div>
                        `);
                        console.log(article.title);
                    }
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