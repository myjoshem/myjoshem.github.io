
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


  let currWeek = 9; //current week
  let week7 = 7;
  let week8 = 8; //for files completed in week 8, for files that will be static
  let week9 = 9; //this file will be updated/tweaked in week 9, unless it becomes part of a future assignment, only then the reference will change
let updateHref = ['../lesson-' + week9 + '/index.html', '../lesson-' + currWeek + '/preston-' + currWeek + '.html', '#', '#', '../lesson-' + week8 + '/stormcenter.html', '../lesson-' + week7 + '/gallery-' + week7 + '.html'];

  document.getElementById("nav-home").href = updateHref[0];
  document.getElementById("nav-preston").href = updateHref[1];
  document.getElementById("nav-soda").href = updateHref[2];
  document.getElementById("nav-fish").href = updateHref[3];
  document.getElementById("nav-storm").href = updateHref[4];
  document.getElementById("nav-gallery").href = updateHref[5];


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
// these two variables are used to access existing elements in our html we will be adding elements and data to these existing elements after we get the needed data from a JSON file
let section = document.querySelector('section.town-data');

// START OF REQUEST TO RETRIEVE JSON FILE

// create necessary variables to request our json file from it's location
let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let request = new XMLHttpRequest();

// here we send our request to GET the json file from the location we specified in our variable
request.open('GET', requestURL);

// this tells them to convert json to javascript object in the response
request.responseType = 'text';// using "json" converts to javascript object for us, use on simple files that will convert easily

// use the 'text' option to get the file response in a text file
// request.responseType = 'text'; // now we're getting a string! use this on most files

// sending out request out to the ether
request.send();

request.onload = function() {
  let townDataText = request.response; //creating variable depending on response type [js object with 'json'], [text string with 'text' response]

  // add this line of code if your response is in 'text' format
  // you must manually convert 'text' to an object using the built in JSON.parse method
  let townData = JSON.parse(townDataText);
  populateTownData(townData);//passing object to function
};

// END OF PROCESSING JSON FILE REQUEST

//now we are ready to work with our object and use it in our html
function populateTownData(jsonObj) {
  let towns = jsonObj.towns;//populating a new array with our town data
  let arrayTowns = ["Preston", "Soda Springs", "Fish Haven"];

  //lets create the new elements we need for our town, accessing each in a for loop
  for (var i = 0; i < towns.length; i++) {
    for (var s = 0; s < arrayTowns.length; s++) {
      if (towns[i].name == arrayTowns[s]) {
        var townContainer = document.createElement('div');
        townContainer.setAttribute('class', 'grid-item town-data');
        var townName = document.createElement('h1');
        var townMotto = document.createElement('p');
        var townFounded = document.createElement('p');
        var townPopulation = document.createElement('p');
        var townRainfall = document.createElement('p');
        var townPic = document.createElement('img');
        townName.textContent = towns[i].name;
        townMotto.textContent = towns[i].motto;
        townFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        townPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
        townRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

   //now that we have created our new elements and filled with data, let's add them
      //to the html. We first add new children to the new parent (myArticle), once that is populated, we add the article to the parent (section)
      //basically, we start from the inner (descendants) and move to outer elements
      townContainer.appendChild(townName);
      townContainer.appendChild(townMotto);
      townContainer.appendChild(townFounded);
      townContainer.appendChild(townPopulation);
      townContainer.appendChild(townRainfall);

        //at the beginning of our script, we accessed the existing section in our html using the query selector, here we add our new populated articles and their populated children elements to the existing html section as we loop through our heroes object
        section.appendChild(townContainer);
    }// this just ends our for loop
}
}
} // this is where the function ends

// populate images
// townPic.setAttribute('src,'filepath + variable name for town.jpg)
// use source to pic right size, but use naming convention for images matched to each town