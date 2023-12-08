function updateTime() {
  let lisbonElement = document.querySelector("#lisbon");
  if (lisbonElement) {
    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTimeElement = lisbonElement.querySelector(".time");
    let lisbonTime = moment().tz("Europe/Lisbon");

    lisbonDateElement.innerHTML = lisbonTime.format(" MMMM Do YYYY");

    lisbonTimeElement.innerHTML = lisbonTime.format(
      " h:mm:ss [<small>] A [</small>]"
    );
  }
  let jamaicaElement = document.querySelector("#jamaica");
  if (jamaicaElement) {
    let jamaicaDateElement = jamaicaElement.querySelector(".date");
    let jamaicaTimeElement = jamaicaElement.querySelector(".time");
    let jamaicaTime = moment().tz("America/Jamaica");

    jamaicaDateElement.innerHTML = jamaicaTime.format(" MMMM Do YYYY");

    jamaicaTimeElement.innerHTML = jamaicaTime.format(
      " h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let citiesElement = document.querySelector("#cities");

  clearInterval(window.cityUpdateInterval);

  window.cityUpdateInterval = setInterval(() => {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityTime = moment().tz(cityTimeZone);
    let cityName = event.target.options[event.target.selectedIndex].text;

    citiesElement.innerHTML = ` 
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("LL")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>] "
        )}</div>
      </div>
      <a href="index.html">Homepage</a>
    `;
  }, 1000);
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
