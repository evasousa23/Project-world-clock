function updateTime() {
  let lisbonElement = document.querySelector("#lisbon");
  if (lisbonElement) {
    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTimeElement = lisbonElement.querySelector(".time");
    let lisbonTime = moment().tz("Europe/Lisbon");

    lisbonDateElement.innerHTML = lisbonTime.format(" MMMM Do YYYY");

    lisbonTimeElement.innerHTML = lisbonTime.format(
      " h:mm:ss [<small>]A[</small>]"
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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();

setInterval(updateTime, 1000);


let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
