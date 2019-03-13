$(document).ready(function () {

    let name = document.getElementById("name").textContent;

    let temp = document.getElementById("temp").textContent;

    console.log(name);

    $("#start").on("click", function () {

        responsiveVoice.speak(name, "UK English Female");
        responsiveVoice.speak(temp, "UK English Female");
    });
    if (responsiveVoice.isPlaying()) {
        console.log("I hope you are listening");
    }


    $("#stop").on("click", function () {
        responsiveVoice.cancel();
    });

});




//API documentation  https://responsivevoice.org/api/