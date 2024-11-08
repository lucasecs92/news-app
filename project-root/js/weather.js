import $ from "jquery";
import "../styles/weather.css";

$(function () {

  const apiKey = "35204941aef10001e4379b8c20a41230";

  // Verificar se o navegador suporta a API de Geolocalização
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // URL da API com lat e lon
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt`;

      // Fazer a chamada à API para obter os dados do tempo
      $.getJSON(apiUrl, function(weatherData) {
        const tempCelsius = Math.floor(weatherData.main.temp - 273.15);

        const asideWeatherHtml = `
          <section class="aside-weather">
            <h4 class="aside-h4">Previsão do Tempo</h4>
            <section class="aside-weather-wrap">
              <section class="previsao-location">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"/></svg>
                <h5>${weatherData.name}</h5>
              </section>
              
              <section class="previsao-temp-wrap">
                <span>${tempCelsius}&deg;C</span>
                <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" />
              </section>
    
              <section class="previsao-humidity">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20.5q-2.91 0-4.955-2.006T5 13.61q0-1.373.555-2.628t1.487-2.24L12 3.884l4.958 4.858q.933.985 1.487 2.24T19 13.615q0 2.882-2.045 4.884T12 20.5m-6-6.88h12q0-1.176-.45-2.245T16.25 9.5L12 5.3L7.75 9.5q-.85.805-1.3 1.875T6 13.619"/></svg>
                <span>${weatherData.main.humidity}%</span>
                <span>|</span>
                <p>${weatherData.weather[0].description}</p>
              </section>
            </section>
    
            <section class="previsao-footer">
              <a href="https://weather-lucasecs92.vercel.app/" target='_blank' rel='noopener noreferrer'>
                Veja a previsão do tempo
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
              </a>
            </section>
          </section>
        `;

        $("#aside-weather").html(asideWeatherHtml);
      })
      .fail(function() {
        console.error("Erro ao obter os dados de previsão do tempo.");
      });
    }, function(error) {
      console.error("Erro ao obter a localização:", error);
    });
  } else {
    console.error("Geolocalização não é suportada pelo navegador.");
  }

});
