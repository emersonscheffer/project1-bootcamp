//Example Element grab
let name = document.getElementById("name");
let temp = document.getElementById("temp");


//Function takes an element, saves its text content to a variable. Then reads the variable string and the console.logs
function readElement(element) {
    let voiceScript = element.textContent;
    responsiveVoice.speak(voiceScript, "US English Female");
  //  console.log("I just read " + voiceScript + "for you!");
}

readElement(name);
readElement(temp);

//API documentation  https://responsivevoice.org/api/