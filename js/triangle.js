//Here is the logic for the Triangle calculator

// Geting values from the user
const inputA = document.getElementById("side-a");
let sideA = 0;

const inputB = document.getElementById("side-b");
let sideB = 0;

const inputC = document.getElementById("side-c");
let sideC = 0;

// Declaring variables to set the value later
let perimeter = 0;
let area = 0;
let oppositeToA = 0;
let oppositeToB = 0;
let oppositeToC = 0;

// Getting fields where the answer will be shown
// Perimeter
const perimeterField = document.getElementById("perimeter");

// Area
const areaField = document.getElementById("area");

// Angles fields
const oppositeAField = document.getElementById("opposite-a");
const oppositeBField = document.getElementById("opposite-b");
const oppositeCField = document.getElementById("opposite-c");

// ***first of all, validate that the numbers correspon with the sides of a triangle***
function isTriangle(sideA, sideB, sideC) {
  // here we will use the 'Triangle inequality theorem' https://www.wikihow.com/Determine-if-Three-Side-Lengths-Are-a-Triangle
  const firstInequality = sideA + sideB > sideC;
  const secondInequality = sideB + sideC > sideA;
  const thirdInequality = sideC + sideA > sideB;

  return firstInequality && secondInequality && thirdInequality;
}

function perimeterTriangel(sideA, sideB, sideC) {
  return sideA + sideB + sideC;
}

function getSides() {
  sideA = parseFloat(inputA.value);
  sideB = parseFloat(inputB.value);
  sideC = parseFloat(inputC.value);
  calculate();
}

function angleBetween(sideVertice1, sideVertice2, sideOpositeToAngle) {
  // This function uses the he cosin law to find the angle between to side of the triangle.
  // Parameters: side1 and side2 are the side other vértice to find the angle.
  // Side3 is the opposite side to the angle
  // C^ = A^2 + B^2 - 2ABcos(∆)
  // After math
  //Cos(∆) = (A^2 + B^2 -C^2)/(2AB)

  let deltaInradians = Math.acos(
    (sideVertice1 ** 2 + sideVertice2 ** 2 - sideOpositeToAngle ** 2) /
      (2 * sideVertice1 * sideVertice2)
  );

  //let deltaInDecigrades = (deltaInradians * 360) / (2 * Math.PI);
  /*console.log(
    Math.acos((vertice1 ** 2 + vertice2 ** 2 - sideOpositeToAngle ** 2) / 2)
  );*/

  return deltaInradians;
}

function areaValue(side1, side2, side3) {
  /* in order to calculate the area of any triangle with the 3 sides
  we need to know the angle between two side (above funtion)
  Then the area would be: H * B / 2
  where B: any side 
        H: other side of the triangle multiplied by sen(delta)
        delta: the angle between the two choosen sides
  */
  const delta = angleBetween(side1, side2, side3);
  const base = side1;
  const heigth = side2 * Math.sin(delta);
  const area = (base * heigth) / 2;

  return area;
}

function calculate() {
  if (isTriangle(sideA, sideB, sideC)) {
    // calculate the perimeter
    perimeter = perimeterTriangel(sideA, sideB, sideC);
    perimeterField.innerText = perimeter;

    //calculate de area
    area = areaValue(sideA, sideB, sideC);
    areaField.innerText = area;

    // calculate angles for the triangle
    oppositeToA = angleBetween(sideB, sideC, sideA);
    oppositeToA = (oppositeToA * 180) / Math.PI;
    oppositeToA = oppositeToA.toFixed(2);
    oppositeAField.innerText = oppositeToA;

    oppositeToB = angleBetween(sideA, sideC, sideB);
    oppositeToB = (oppositeToB * 180) / Math.PI;
    oppositeToB = oppositeToB.toFixed(2);
    oppositeBField.innerText = oppositeToB;

    oppositeToC = angleBetween(sideA, sideB, sideC);
    oppositeToC = (oppositeToC * 180) / Math.PI;
    oppositeToC = oppositeToC.toFixed(2);
    oppositeCField.innerText = oppositeToC;
  } else {
    console.log("The numbers that you type do not make a triangle. ");
  }
}
