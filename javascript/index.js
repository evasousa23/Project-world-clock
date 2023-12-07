setInterval(function () {
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  let lisbonTime = moment().tz("Europe/Lisbon");

  lisbonDateElement.innerHTML = lisbonTime.format(" MMMM Do YYYY");

  lisbonTimeElement.innerHTML = lisbonTime.format(
    " h:mm:ss [<small>]A[</small>]"
  );

  let jamaicaElement = document.querySelector("#jamaica");
  let jamaicaDateElement = jamaicaElement.querySelector(".date");
  let jamaicaTimeElement = jamaicaElement.querySelector(".time");
  let jamaicaTime = moment().tz("America/Jamaica");

  jamaicaDateElement.innerHTML = jamaicaTime.format(" MMMM Do YYYY");

  jamaicaTimeElement.innerHTML = jamaicaTime.format(
    " h:mm:ss [<small>]A[</small>]"
  );
}, 1000);
