var APIKey = "c853a4cc4fc8c7501716acbd26d1b50e";
let userCity = "userCityInputVariable"
let userCountryCode = "userCountryCodeVariable"

    // querying the weather database using a variable for input of user location
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      userCity + userCountryCode + APIKey;

    //ajax connection configuration
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      // the response we want the server to give to the browser once connected
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        //the content we want documented onto the html:

        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });


// Refer to list of country codes (https://countrycode.org/) which will be part of the dropdown list at user sign-in.
    api.openweathermap.org/data/2.5/weather?q={city name},{country code}
