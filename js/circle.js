// getting the elements to show the answer

let areaResult = document.getElementById("area");
let perimeterResult = document.getElementById("perimeter");
let radio = document.getElementById("radio");
let radioValue = 0;

function getRadio() {
  radioValue = parseFloat(radio.value);

  showAnswers(radioValue);
}

function area(radio) {
  return (Math.PI * radio ** 2).toFixed(2);
}

function perimeter(radio) {
  return (2 * radio * Math.PI).toFixed(2);
}

function showAnswers(radio) {
  areaResult.innerText = area(radio);
  perimeterResult.innerText = perimeter(radio);
}
