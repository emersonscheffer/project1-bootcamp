
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCNgqiTrbz6iK--BjUnhsdoTmmsUhIYF1Q",
    authDomain: "project1-6dc14.firebaseapp.com",
    databaseURL: "https://project1-6dc14.firebaseio.com",
    projectId: "project1-6dc14",
    storageBucket: "project1-6dc14.appspot.com",
    messagingSenderId: "846245294444"
  };
  firebase.initializeApp(config);

// Creating a reference to the database
var database = firebase.database();

//giving bgPreference an initial value
var bgPrefernce;

// Create a variable to easily track the current bg color.
var currentBg = bgPrefernce;

//------------------------------------------------------------------

database.ref().on("value", function(snapshot) {
  // We are now inside our .on function...

  // Console.log the "snapshot" value (a point-in-time representation of the database)
  console.log(snapshot.val());
  // This "snapshot" allows the page to get the most current values in firebase.
  currentBg = snapshot.val().currentBg;

  console.log(currentBg);

  $("body").attr("backgroundColor", currentBg);

}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});




// document.getElementsByTagName('body')[0].style.backgroundColor = bgPrefernce;

function redBg() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
    document.getElementsByTagName('body')[0].style.color = 'black';


    document.getElementsByTagName('p')[0].style.border = 'solid 1px black';
    document.getElementsByTagName('p')[1].style.border = 'solid 1px black';
    document.getElementsByTagName('p')[2].style.border = 'solid 1px black';
    document.getElementsByTagName('p')[3].style.border = 'solid 1px black';

    currentBg = 'red';

     database.ref().set({
    currentBg: currentBg

  });
    console.log(currentBg);

}

function blueBg() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
    document.getElementsByTagName('body')[0].style.color = 'white';

    document.getElementsByTagName('p')[0].style.border = 'solid 1px white';
    document.getElementsByTagName('p')[1].style.border = 'solid 1px white';
    document.getElementsByTagName('p')[2].style.border = 'solid 1px white';
    document.getElementsByTagName('p')[3].style.border = 'solid 1px white';

    currentBg = 'blue';

     database.ref().set({
    currentBg: currentBg

  });
    console.log(currentBg);
}

function blackBg() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
    document.getElementsByTagName('body')[0].style.color = 'white';
    document.getElementsByTagName('p')[0].style.border = 'solid 1px white';
    document.getElementsByTagName('p')[1].style.border = 'solid 1px white';
    document.getElementsByTagName('p')[2].style.border = 'solid 1px white';
    document.getElementsByTagName('p')[3].style.border = 'solid 1px white';
    currentBg = 'black';

     database.ref().set({
    currentBg: currentBg

  });
    console.log(currentBg);

}

function yellowBg() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
    document.getElementsByTagName('body')[0].style.color = 'black';


    document.getElementsByTagName('p')[0].style.border = 'solid 1px black';
    document.getElementsByTagName('p')[1].style.border = 'solid 1px black';
    document.getElementsByTagName('p')[2].style.border = 'solid 1px black';
    document.getElementsByTagName('p')[3].style.border = 'solid 1px black';


    currentBg = 'yellow';

    
     database.ref().set({
    currentBg: currentBg

  });
    console.log(currentBg);
}

