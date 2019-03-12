var showFirstScreen;

// store user name
var userName;
var storedName;

$('#submitBtn').on('click', function () {
    userName = $('#name').val().trim();
    if(userName == ""){
        ;// tell user to enter a value
    } else {
        localStorage.setItem('userName', userName);

    }
});

storedName = localStorage.getItem('userName');

//if user name set, hide first screen
if (storedName === null) {
    showFirstScreen = true;
} else {
    showFirstScreen = false; //change this to false
}

if(showFirstScreen){
    $('#firstScreen').css('display', 'block');
} else {
    $('#firstScreen').css('display', 'none');
}



//clock

var datetime = null,
    date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('hh:mm'));
};

$(document).ready(function () {
    datetime = $('#current-time')
    update();
    setInterval(update, 1000);
});




//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCNgqiTrbz6iK--BjUnhsdoTmmsUhIYF1Q",
//     authDomain: "project1-6dc14.firebaseapp.com",
//     databaseURL: "https://project1-6dc14.firebaseio.com",
//     projectId: "project1-6dc14",
//     storageBucket: "project1-6dc14.appspot.com",
//     messagingSenderId: "846245294444"
//   };
//   firebase.initializeApp(config);

// // Creating a reference to the database
// var database = firebase.database();

// Create a variable to easily track the current bg color.
// var currentBg = localStorage.getItem('bgColor');

// var borderColor = localStorage.getItem('borderColor');

// var fontColor = localStorage.getItem('fontColor');

// var storedName = localStorage.getItem('userName');

// //updates the name on html
// $('#nameDOM').html(storedName);


// function updateName() {
//     $('#nameDOM').html(localStorage.getItem('userName'));


// }


// //the input name will not show if a name is already assigned
// if (storedName === null) {
//     $('#startUserName').css('display', 'block');
//     $('#nameDOMHolder').css('display', 'none');
// } else {
//     $('#startUserName').css('display', 'none');
//     $('#nameDOMHolder').css('display', 'block');
// }

// $('#submitBtn').on('click', function () {
//     var userName = $('#name').val().trim();
//     localStorage.setItem('userName', userName);
//     updateName();
// });


//------------------------------------------------------------------

// database.ref().on("value", function(snapshot) {
//   // We are now inside our .on function...

//   // Console.log the "snapshot" value (a point-in-time representation of the database)
//   console.log(snapshot.val());
//   // This "snapshot" allows the page to get the most current values in firebase.
//   currentBg = snapshot.val().currentBg;

//   $("body").css("backgroundColor", currentBg);

// }, function(errorObject) {
//     console.log("The read failed: " + errorObject.code);
// });

// document.getElementsByTagName('body')[0].style.backgroundColor = currentBg;
// document.getElementsByTagName('body')[0].style.color = fontColor;
// document.getElementsByTagName('p')[0].style.border = borderColor;
// document.getElementsByTagName('p')[1].style.border = borderColor;
// document.getElementsByTagName('p')[2].style.border = borderColor;
// document.getElementsByTagName('p')[3].style.border = borderColor;


// function redBg() {

//     currentBg = 'red';
//     borderColor = 'solid 1px black';
//     fontColor = 'white';

//     document.getElementsByTagName('body')[0].style.backgroundColor = currentBg;
//     document.getElementsByTagName('body')[0].style.color = fontColor;

//     document.getElementsByTagName('p')[0].style.border = borderColor;
//     document.getElementsByTagName('p')[1].style.border = borderColor;
//     document.getElementsByTagName('p')[2].style.border = borderColor;
//     document.getElementsByTagName('p')[3].style.border = borderColor;



//     localStorage.setItem('bgColor', currentBg);
//     localStorage.setItem('borderColor', borderColor);
//     localStorage.setItem('fontColor', fontColor);
//     // database.ref().set({
//     //     currentBg: currentBg

//     // });
// }

// function blueBg() {

//     currentBg = 'blue';
//     borderColor = 'solid 1px white';
//     fontColor = 'white';

//     document.getElementsByTagName('body')[0].style.backgroundColor = currentBg;
//     document.getElementsByTagName('body')[0].style.color = fontColor;

//     document.getElementsByTagName('p')[0].style.border = borderColor;
//     document.getElementsByTagName('p')[1].style.border = borderColor;
//     document.getElementsByTagName('p')[2].style.border = borderColor;
//     document.getElementsByTagName('p')[3].style.border = borderColor;



//     localStorage.setItem('bgColor', currentBg);
//     localStorage.setItem('borderColor', borderColor);
//     localStorage.setItem('fontColor', fontColor);

//     // database.ref().set({
//     //     currentBg: currentBg

//     // });
// }

// function blackBg() {

//     currentBg = 'black';
//     borderColor = 'solid 1px white';
//     fontColor = 'white';

//     document.getElementsByTagName('body')[0].style.backgroundColor = currentBg;
//     document.getElementsByTagName('body')[0].style.color = fontColor;

//     document.getElementsByTagName('p')[0].style.border = borderColor;
//     document.getElementsByTagName('p')[1].style.border = borderColor;
//     document.getElementsByTagName('p')[2].style.border = borderColor;
//     document.getElementsByTagName('p')[3].style.border = borderColor;



//     localStorage.setItem('bgColor', currentBg);
//     localStorage.setItem('borderColor', borderColor);
//     localStorage.setItem('fontColor', fontColor);

//     // database.ref().set({
//     //     currentBg: currentBg

//     // });
// }

// function yellowBg() {

//     currentBg = 'yellow';
//     borderColor = 'solid 1px black';
//     fontColor = 'white';

//     document.getElementsByTagName('body')[0].style.backgroundColor = currentBg;
//     document.getElementsByTagName('body')[0].style.color = fontColor;

//     document.getElementsByTagName('p')[0].style.border = borderColor;
//     document.getElementsByTagName('p')[1].style.border = borderColor;
//     document.getElementsByTagName('p')[2].style.border = borderColor;
//     document.getElementsByTagName('p')[3].style.border = borderColor;



//     localStorage.setItem('bgColor', currentBg);
//     localStorage.setItem('borderColor', borderColor);
//     localStorage.setItem('fontColor', fontColor);

//     // database.ref().set({
//     //     currentBg: currentBg

//     // });
// }


// var suki = {
//     todo: {
//         item1: "read a book"
//     }


// };

// suki.name = "Suki";
// suki.age = 200;


// localStorage.setItem('userName2', JSON.stringify(suki));

// var sukiInfo = JSON.parse(localStorage.getItem('userName2'));

// var userArray = Object.values(sukiInfo);
// console.log(Object.values(sukiInfo));
// console.log(sukiInfo);

// console.log(sukiInfo.name);
// console.log(userArray[0].item1 + " from array ");




//var user = JSON.parse(localStorage.getItem('user')); If we need to delete all entries of the store we can simply do: