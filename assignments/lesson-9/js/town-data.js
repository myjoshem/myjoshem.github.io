

// these two variables are used to access existing elements in our
// html we will be adding elements and data to these existing elements
// after we get the needed data from a JSON file
let section = document.querySelector('section.town-data');

// START OF REQUEST TO RETRIEVE JSON FILE

// create necessary variables to request our json file from it's
// location
let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let request = new XMLHttpRequest();

// here we send our request to GET the json file from the location we
// specified in our variable
request.open('GET', requestURL);

// this tells them to convert json to javascript object in the
// response
request.responseType = 'text';
// using "json" converts to javascript object for us, use on simple files that will convert easily

// use the 'text' option to get the file response in a text file
// request.responseType = 'text'; // now we're getting a string! use
// this on most files

// sending out request out to the ether
request.send();

request.onload = function () {
  let townDataText = request.response; // creating variable depending on response type [js object with 'json'], [text string with 'text' response]

  // add this line of code if your response is in 'text' format you
  // must manually convert 'text' to an object using the built in
  // JSON.parse method
  let townData = JSON.parse(townDataText);
  populateTownData(townData); // passing object to function
};

// END OF PROCESSING JSON FILE REQUEST

// now we are ready to work with our object and use it in our html
// eslint-disable-next-line require-jsdoc
function populateTownData(jsonObj) {
  let towns = jsonObj.towns; // populating a new array with our town data
  let arrayTowns = ['Preston', 'Soda Springs', 'Fish Haven'];

  // lets create the new elements we need for our town, accessing each
  // in a for loop
  for (let i = 0; i < towns.length; i++) {
    for (let s = 0; s < arrayTowns.length; s++) {
      if (towns[i].name == arrayTowns[s]) {
        let townContainer = document.createElement('div');
        townContainer.setAttribute('class', 'grid-item town-data');
        let townName = document.createElement('h1');
        let townMotto = document.createElement('p');
        let townFounded = document.createElement('p');
        let townFoundedLabel = document.createElement('span');
        let townPopulation = document.createElement('p');
        let townPopulationLabel = document.createElement('span');
        let townRainfall = document.createElement('p');
        let townRainfallLabel = document.createElement('span');
        let townPic = document.createElement('img');
        townName.textContent = towns[i].name;
        townMotto.textContent = towns[i].motto;
        townFounded.textContent = towns[i].yearFounded;
        townFoundedLabel.textContent = 'Year Founded: ';
        let population = towns[i].currentPopulation.toLocaleString('en');
        townPopulation.textContent = population;
        townPopulationLabel.textContent = 'Population: ';
        townRainfall.textContent =towns[i].averageRainfall;
        townRainfallLabel.textContent = 'Annual Rain Fall: ';


    /*     if (towns[i].motto.includes("\. ") {
          let splitMotto = towns[i].split(".");
          let newMotto = splitMotto[0] + '<br>';
          for (let m = 1; m < splitMotto.length; m++); {
            if (m == splitMotto.length - 1) {
            newMotto += splitMotto[m];
            }
            else {
              newMotto += splitMotto[m] + '<br>';
            }
          }
          townMotto.textContent = newMotto;
        } */


        if (towns[i].name.toLowerCase().includes(arrayTowns[s].toLowerCase())) {
          let splitName = arrayTowns[s].split(" ");
          let imgName = splitName[0];
          townPic.setAttribute('src', "images/" + imgName + "300x200.jpg");
          townPic.setAttribute('class', "town-data");
        }

        // now that we have created our new elements and filled with
        // data, let's add them to the html. We first add new children
        // to the new parent (myArticle), once that is populated, we
        // add the article to the parent (section) basically, we start
        // from the inner (descendants) and move to outer elements
        townContainer.appendChild(townName);
        townContainer.appendChild(townMotto);
        townContainer.appendChild(townFounded);
        townFounded.prepend(townFoundedLabel);
        townContainer.appendChild(townPopulation);
        townPopulation.prepend(townPopulationLabel);
        townContainer.appendChild(townRainfall);
        townRainfall.prepend(townRainfallLabel);
        townContainer.appendChild(townPic);

        // at the beginning of our script, we accessed the existing
        // section in our html using the query selector, here we add
        // our new populated articles and their populated children
        // elements to the existing html section as we loop through
        // our heroes object
        section.appendChild(townContainer);
      } // this just ends our for loop
    }
  }
} // this is where the function ends

// populate images townPic.setAttribute('src,'filepath + variable name
// for town.jpg) use source to pic right size, but use naming
// convention for images matched to each town