let weatherRequest = new XMLHttpRequest();
let api = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=42cf5defe9154f2a27f4b53386c2acb5';
weatherRequest.open('Get', api, true);
weatherRequest.send();

weatherRequest.onload = function () {
  let forecastData = JSON.parse(weatherRequest.responseText);

  const forecast = forecastData.filter(forecastData => forecastData.list.main.temp.includes('18:00:00'));
}

  console.log(forecastData);
 /*   let i = 0;
   let fTempArray = [];
   let fList = forecastData.list;
   let dayData = fList[i].main.temp;

for (; i < fList.length; i++) {
  if (fList[i].dt_txt.includes('18:00:00')) {
     fTempArray[i] = dayData;
     console.log(fTempArray);
  }
}
}; */


var myDate = new Date(); // Your timezone!
var myEpoch = myDate.getTime()/1000.0;
alert(myEpoch);