// getting the field for the data
let side = document.getElementById("side");
let sideValue = 0;

//getting the place to show the answer
let areaField = document.getElementById("area");
let perimeterField = document.getElementById("perimeter");

function getSide() {
  sideValue = parseFloat(side.value);
  showResult(sideValue);
}
function area(side) {
  return (side ** 2).toFixed(2);
}

function perimeter(side) {
  return (side * 4).toFixed(2);
}

function showResult(side) {
  areaField.innerText = area(side);
  perimeterField.innerText = perimeter(side);
}
