// retrieve value from html, use parse function to translate value type

let x = parseFloat(document.getElementById("tempf").value);

let y = parseFloat(document.getElementById("windspeed").value);

// Process the input via relevant function
let result = Math.round(windChill(x, y));

// Output the result back to the html
document.getElementById("windchill").value = result;

function windChill(tempF, speed) {
  return 35.74 + (0.6215 * x) - (35.75 * (Math.pow(y,0.16))) + (0.4275 * x * (Math.pow(y,0.16)));
  }