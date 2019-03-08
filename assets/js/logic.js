
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




var bgPrefernce;

document.getElementsByTagName('body')[0].style.backgroundColor = bgPrefernce;



function redBg() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
    document.getElementsByTagName('body')[0].style.color = 'black';


    document.getElementsByTagName('p')[0].style.border = 'solid 1px black';
    document.getElementsByTagName('p')[1].style.border = 'solid 1px black';
    document.getElementsByTagName('p')[2].style.border = 'solid 1px black';
    document.getElementsByTagName('p')[3].style.border = 'solid 1px black';

    bgPrefernce = 'red';
}

function blueBg() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
    document.getElementsByTagName('body')[0].style.color = 'white';

    document.getElementsByTagName('p')[0].style.border = 'solid 1px white';
    document.getElementsByTagName('p')[1].style.border = 'solid 1px white';
    document.getElementsByTagName('p')[2].style.border = 'solid 1px white';
    document.getElementsByTagName('p')[3].style.border = 'solid 1px white';

    bgPrefernce = 'blue';
}

function blackBg() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
    document.getElementsByTagName('body')[0].style.color = 'white';
    document.getElementsByTagName('p')[0].style.border = 'solid 1px white';
    document.getElementsByTagName('p')[1].style.border = 'solid 1px white';
    document.getElementsByTagName('p')[2].style.border = 'solid 1px white';
    document.getElementsByTagName('p')[3].style.border = 'solid 1px white';
    bgPrefernce = 'black';

}

function yellowBg() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
    document.getElementsByTagName('body')[0].style.color = 'black';


    document.getElementsByTagName('p')[0].style.border = 'solid 1px black';
    document.getElementsByTagName('p')[1].style.border = 'solid 1px black';
    document.getElementsByTagName('p')[2].style.border = 'solid 1px black';
    document.getElementsByTagName('p')[3].style.border = 'solid 1px black';


    bgPrefernce = 'yellow';
}