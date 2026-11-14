const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area');

let area = 0;
const PI = 3.14159;

// Primer cálculo con radio 10
let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

// Segundo cálculo con radio 20
radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius; // <-- Faltaba .textContent
areaOutput.textContent = area;   // <-- Faltaba .textContent









// const radiusOutput = document.getElementById('radius');
// const areaOutput = document.querySelector('#area');

// let area = 0;
// const PI = 3.14159;

// let radius = 10;
// area = PI * radius * radius;
// radiusOutput.textContent = radius;
// areaOutput.textContent = area;

// radius = 20;
// area = PI * radius * radius;
// radiusOutput.textContent = radius;
// areaOutput.textContent = area;