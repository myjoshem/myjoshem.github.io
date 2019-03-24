weatherapi key: d5392469cba66d46d6fe15b386accb54
default key: 42cf5defe9154f2a27f4b53386c2acb5
Info link: https://openweathermap.org/api

// weather: 1) several cities, 2) one city id 3) one city zip [replace 'weather' with 'forecast' for different data]
'https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=imperial&appid=42cf5defe9154f2a27f4b53386c2acb5'

'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=42cf5defe9154f2a27f4b53386c2acb5'

'https://api.openweathermap.org/data/2.5/weather?zip=94040,us&units=imperial&appid=42cf5defe9154f2a27f4b53386c2acb5'

Fish Haven zip  83287
Preston id: 5604473
Soda Springs id: 5607916

var myDate = new Date(); // Your timezone!
var myEpoch = myDate.getTime()/1000.0;
document.write(myEpoch);

{
  "id": 5585000,
  "name": "Bear Lake County",
  "country": "US",
  "coord": {
    "lon": -111.313538,
    "lat": 42.312431
  }
  {
    "id": 5585010,
    "name": "Bear Lake Sands",
    "country": "US",
    "coord": {
      "lon": -111.253532,
      "lat": 42.051601
    }
     {
    "id": 5601299,
    "name": "Montpelier",
    "country": "US",
    "coord": {
      "lon": -111.297699,
      "lat": 42.322151
    }

  {
    "id": 5603240,
    "name": "Paris",
    "country": "US",
    "coord": {
      "lon": -111.401039,
      "lat": 42.22715
    }
      {
    "id": 5604473,
    "name": "Preston",
    "country": "US",
    "coord": {
      "lon": -111.876617,
      "lat": 42.09631
    }
      {
    "id": 5607916,
    "name": "Soda Springs",
    "country": "US",
    "coord": {
      "lon": -111.604668,
      "lat": 42.654369
    }

// Forecast weather data example

    {"city":{"id":1851632,"name":"Shuzenji",
"coord":{"lon":138.933334,"lat":34.966671},
"country":"JP",
"cod":"200",
"message":0.0045,
"cnt":38,
"list":[{
        "dt":1406106000,
        "main":{
            "temp":298.77,
            "temp_min":298.77,
            "temp_max":298.774,
            "pressure":1005.93,
            "sea_level":1018.18,
            "grnd_level":1005.93,
            "humidity":87,
            "temp_kf":0.26},
        "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],
        "clouds":{"all":88},
        "wind":{"speed":5.71,"deg":229.501},
        "sys":{"pod":"d"},
        "dt_txt":"2014-07-23 09:00:00"}
        ]}

        Parameters:

    code Internal parameter
    message Internal parameter
    city
        city.id City ID
        city.name City name
        city.coord
            city.coord.lat City geo location, latitude
            city.coord.lon City geo location, longitude
        city.country Country code (GB, JP etc.)
    cnt Number of lines returned by this API call
    list
        list.dt Time of data forecasted, unix, UTC
        list.main
            list.main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
            list.main.temp_min Minimum temperature at the moment of calculation. This is deviation from 'temp' that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
            list.main.temp_max Maximum temperature at the moment of calculation. This is deviation from 'temp' that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
            list.main.pressure Atmospheric pressure on the sea level by default, hPa
            list.main.sea_level Atmospheric pressure on the sea level, hPa
            list.main.grnd_level Atmospheric pressure on the ground level, hPa
            list.main.humidity Humidity, %
            list.main.temp_kf Internal parameter
        list.weather (more info Weather condition codes)
            list.weather.id Weather condition id
            list.weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
            list.weather.description Weather condition within the group
            list.weather.icon Weather icon id
        list.clouds
            list.clouds.all Cloudiness, %
        list.wind
            list.wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
            list.wind.deg Wind direction, degrees (meteorological)
        list.rain
            list.rain.3h Rain volume for last 3 hours, mm
        list.snow
            list.snow.3h Snow volume for last 3 hours
        list.dt_txt Data/time of calculation, UTC



//Current Weather Data example

{"coord":
{"lon":145.77,"lat":-16.92},
"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
"base":"cmc stations",
"main":{"temp":293.25,"pressure":1019,"humidity":83,"temp_min":289.82,"temp_max":295.37},
"wind":{"speed":5.1,"deg":150},
"clouds":{"all":75},
"rain":{"3h":3},
"dt":1435658272,
"sys":{"type":1,"id":8166,"message":0.0166,"country":"AU","sunrise":1435610796,"sunset":1435650870},
"id":2172797,
"name":"Cairns",
"cod":200}

{
    "coord": {
        "lon": -0.13,
        "lat": 51.51
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
        }
    ],
    "base": "cmc stations",
    "main": {
        "temp": 286.164,
        "pressure": 1017.58,
        "humidity": 96,
        "temp_min": 286.164,
        "temp_max": 286.164,
        "sea_level": 1027.69,
        "grnd_level": 1017.58
    },
    "wind": {
        "speed": 3.61,
        "deg": 165.001
    },
    "rain": {
        "3h": 0.185
    },
    "clouds": {
        "all": 80
    },
    "dt": 1446583128,
    "sys": {
        "message": 0.003,
        "country": "GB",
        "sunrise": 1446533902,
        "sunset": 1446568141
    },
    "id": 2643743,
    "name": "London",
    "cod": 200
}

Parameters:

    coord
        coord.lon City geo location, longitude
        coord.lat City geo location, latitude
    weather (more info Weather condition codes)
        weather.id Weather condition id
        weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
        weather.description Weather condition within the group
        weather.icon Weather icon id
    base Internal parameter
    main
        main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
        main.pressure Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
        main.humidity Humidity, %
        main.temp_min Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
        main.temp_max Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
        main.sea_level Atmospheric pressure on the sea level, hPa
        main.grnd_level Atmospheric pressure on the ground level, hPa
    wind
        wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
        wind.deg Wind direction, degrees (meteorological)
    clouds
        clouds.all Cloudiness, %
    rain
        rain.1h Rain volume for the last 1 hour, mm
        rain.3h Rain volume for the last 3 hours, mm
    snow
        snow.1h Snow volume for the last 1 hour, mm
        snow.3h Snow volume for the last 3 hours, mm
    dt Time of data calculation, unix, UTC
    sys
        sys.type Internal parameter
        sys.id Internal parameter
        sys.message Internal parameter
        sys.country Country code (GB, JP etc.)
        sys.sunrise Sunrise time, unix, UTC
        sys.sunset Sunset time, unix, UTC
    id City ID
    name City name
    cod Internal parameter

