console.log("connected to weather.js")
//console.log(moment().format("DD/MM/YY hh:mm A"));

var sunriseTime = moment.unix(1552400623) 
//var day = moment.unix(response.sys.sunrise).format("hh:mm"); //seconds
// and then:
//console.log(day);


var APIKey = "c853a4cc4fc8c7501716acbd26d1b50e";
let userCity = "Berkeley"; //"userCityInputVariable"
let userCountryCode = "US"; //"userCountryCodeVariable"

// querying the weather database using a variable for input of user location

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
    //sunrise unix seconds converted to timestamp
    var riseTimeStamp = moment.unix(response.sys.sunrise).format("hh:mm");
    $("#sunrise").text("Sunrise: " + riseTimeStamp);

    // Log the data in the console as well
    console.log("Location " + response.name + ", " + response.sys.country);
    console.log("Temperature (F): " + response.main.temp);
    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity " + response.main.humidity);
    console.log("Sunrise: " + response.sys.sunrise);
    console.log(riseTimeStamp)

  });


// Refer to list of country codes (https://countrycode.org/) which will be part of the dropdown list at user sign-in.
    // api.openweathermap.org/data/2.5/weather?q={city name},{country code}
