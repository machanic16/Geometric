//Here is the logic for the calculator

// geting values from the user
const inputA = document.getElementById("side-a");
const sideA = parseFloat(inputA.value);

const inputB = document.getElementById("side-b");
const sideB = parseFloat(inputB.value);

const inputC = document.getElementById("side-c");
const sideC = parseFloat(inputC.value);

// ***first of all, validate that the numbers correspon with the sides of a triangle***
function isTriangle(sideA, sideB, sideC) {
  // here we will use the 'Triangle inequality theorem' https://www.wikihow.com/Determine-if-Three-Side-Lengths-Are-a-Triangle
  const firstInequality = sideA + sideB > sideC;
  const secondInequality = sideB + sideC > sideA;
  const thirdInequality = sideC + sideA > sideB;

  return firstInequality && secondInequality && thirdInequality;
}

if (isTriangle(sideA, sideB, sideC)) {
} else {
  console.log("The numbers that you type do not make a triangle. ");
}

// calculate the perimeter

function perimeterTriangel(sideA, sideB, sideC) {
  return sideA + sideB + sideC;
}
const perimeter = perimeterTriangel(sideA, sideB, sideC);
console.log("The perimeter of your triangle is: " + perimeter);
