
// create an array for weekday names
var daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

//create an array for names of months
var monthnames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

//create a new date object
var today = new Date();
//create variable to hold the day of the week that is found by passing our new date object with it's method for retrieving the weekday number, to the array with our day names to retrieve that weekday name
var dayName = daynames[today.getDay()];
//same here, using the array for month names with our date object and method
var monthName = monthnames[today.getMonth()];
//get the day of the month using our date object and getDate method
var dayNum = today.getDate();
//ditto, for the year
var year = today.getFullYear();
//combine everything into a string
var fulldate = dayName + ", " + monthName + " " + dayNum  + ", " + year;

//output our formatted date string to our html doc
document.getElementById("currentdate").innerHTML = fulldate;

// thanks Bro Blazzard. Modified original code found at: https://codepen.io/blazzard-jason/pen/JNzKpY

/** eslint-disable*/
function toggleMenu() {
	document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}
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