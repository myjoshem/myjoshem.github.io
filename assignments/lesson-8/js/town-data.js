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

  //lets create the new elements we need for our town, accessing each in a for loop
  for (var i = 0; i < towns.length; i++) {
    var townContainer = document.createElement('div');
    townContainer.setAttribute('class', 'grid-item town-data');
    var townName = document.createElement('h1');
    var townMotto = document.createElement('p');
    var townFounded = document.createElement('p');
    var townPopulation = document.createElement('p');
    var townRainfall = document.createElement('p');
    var townPic = document.createElement('img');

      //now, let's populate the data into the new elements
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
  } // this just ends our for loop
} // this is where the function ends

// populate images
// townPic.setAttribute('src,'filepath + variable name for town.jpg)
// use source to pic right size, but use naming convention for images matched to each town