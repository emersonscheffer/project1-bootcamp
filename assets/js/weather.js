console.log("connected to weather.js")

//var sunriseTime = moment.unix(1552400623) //sunrise unix seconds converted to timestamp
//var day = moment.unix(1318781876); //seconds
// and then:
//console.log(sunriseTime.format('dddd MMMM Do YYYY, h:mm:ss a'));


var APIKey = "c853a4cc4fc8c7501716acbd26d1b50e";
let userCity = "Berkeley"; //"userCityInputVariable"
let userCountryCode = "US"; //"userCountryCodeVariable"

// querying the weather database using a variable for input of user location
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
//   userCity + "," + userCountryCode + APIKey;

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=" + userCity + "," + userCountryCode + "&units=imperial&appid=" + APIKey;

//ajax connection configuration
$.ajax({
  url: queryURL,
  method: "GET"
})

  // the response we want the server to give to the browser once connected
  .then(function (response) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response);


    //the content we want documented onto the html:

    $("#location").text(response.name + ", " + response.sys.country);
    $("#temp").text("Temperature (F) " + response.main.temp);
    $("#wind").text("Wind Speed: " + response.wind.speed);
    $("#humidity").text("Humidity: " + response.main.humidity);
    $("#sunrise").text("Sunrise: " + response.sys.sunrise);

    // Log the data in the console as well
    console.log("Location " + response.name + response.sys.country);
    console.log("Temperature (F): " + response.main.temp);
    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity " + response.main.humidity);
    console.log("Sunrise: " + response.sys.sunrise);

  });


// Refer to list of country codes (https://countrycode.org/) which will be part of the dropdown list at user sign-in.
    // api.openweathermap.org/data/2.5/weather?q={city name},{country code}
