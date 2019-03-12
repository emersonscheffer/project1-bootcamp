let queryQuoteURL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
// Run AJAX call to get Ron Swanson quote
$.ajax({
url: queryQuoteURL,
method: "GET"
}).then(function(response) {
    console.log(response[0]);
});