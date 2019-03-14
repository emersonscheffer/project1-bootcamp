/// todo javascript


var title = $("<h1>Today's List</h1>")
$('#to-do-list').prepend(title);

var firstTime;

var user = {
    name: "luke Skywalker",
    todo: {

    }
}
//start storage
// localStorage.setItem('userInformation', JSON.stringify(user));

//retriving information from localStorage
// var storedItems = JSON.parse(localStorage.getItem('userInformation'));
// var itemsArrayFromServer;
// var itemsArray = JSON.stringify(storedItems.todo);
// if(user.todo.item === "Breakfast"){
//     firstTime = true;
//     delete user.todo.item;
//     console.log("empty list" + user.todo.item);
//     itemsArrayFromServer = [];
// } else {
// itemsArrayFromServer = Object.values(storedItems.todo);

// }


// for (let k in itemsArray2) {
//     itemCreator(itemsArray2[k]);
// }

// console.log(itemsArray + " -=-=-=-=-=-=-=-= fhdsajhfld");
// console.log(itemsArray2 + " -=-=-=-=-=-=-=-= fhdsajhfld");


// console.log(storedItems + " fhdsajhfld");
// console.log(Object.values(storedItems) + " fhdsajhfld");

var key;



// var todoListArray = [];
// var storedTodoListArray = [];


// //getting the list from server array
// for (var i in itemsArrayFromServer) {
//     storedTodoListArray.push(itemsArrayFromServer[i]);
// }



// //updating the todo list array
// function updatingToDoListFromStored() {
//     for (var l = 0; l < storedTodoListArray.length; l++) {

//         clearListDOM();
//         createListDOM();
//         //add to array
//         todoListArray.push(storedTodoListArray[l]);
//         addToListArray();


//         console.log("shouldklk work");
//     }
// }

// updatingToDoListFromStored();





// //this will update the DOM
// function addToListArray() {
//     for (let j in todoListArray) {
//         itemCreator(todoListArray[j]);
//     }
// }

// //this pushes information to DOM
// function addToServerArray() {
//     for (var k in todoListArray) {
//         key = 'item' + k;
//         user.todo[key] = todoListArray[k];
//     }

//     localStorage.setItem('userInformation', JSON.stringify(user));

// }

// function createListDOM() {
//     var divCurrentListItem = $('<div id="current-list-items">');
//     $('#current-list').html(divCurrentListItem);

// }

// function clearListDOM() {
//     $('#current-list-items').remove();
// }


$('#submit-btn-add').on('click', function (event) {
    event.preventDefault();

    var itemValue = $('#item-to-be-added').val().trim();
    if (itemValue == "") {
        ;
    } else {

        addMainServerArray(itemValue);
    }

    $('.todo-form')[0].reset();

});




var mainServerArray = [];

function addMainServerArray(item) {
    mainServerArray.push(item);
    addToObjectUser();
}

function addToObjectUser() {
    for (var k in mainServerArray) {
        key = 'item' + k;
        user.todo[key] = mainServerArray[k];
    }
    addObjectToServer();
}

function addObjectToServer() {
    localStorage.setItem("currentUser", JSON.stringify(user));
    retriveInformationFromServer();
}

var userUpdatedInfo;

function retriveInformationFromServer() {
    userUpdatedInfo = JSON.parse(localStorage.getItem("currentUser"));
    gettingArrayValuesFromServer();
}
var valuesFromServer;

function gettingArrayValuesFromServer() {
    valuesFromServer = Object.values(userUpdatedInfo.todo);
    creatingItemToDisplay(valuesFromServer);
}


function creatingItemToDisplay(arr) {
    deleteListDOM();
    createListDOM();
    for (var j in arr) {
        console.log(arr);
        itemCreator(arr[j]);
    }
}

function createListDOM() {
    var divCurrentListItem = $('<div id="current-list-items">');
    $('#current-list').html(divCurrentListItem);
    console.log("created");
}

function deleteListDOM() {
    $('#current-list-items').remove();
    console.log("deleted");
}

//create the item
function itemCreator(item) {
    var divItem = $('<div class="todo-item">');

    var divCheck = $('<div id="del" class="check-box">');

    divCheck.html('<img width="30px" src="./assets/imgs/squareChecked.svg">');

    var itemBtn = $('<div class"word-btn">' + item + '</div>');

    divItem.append(divCheck);
    divItem.append(itemBtn);

    $('#current-list-items').append(divItem);

}

//////////////////// retriving info from server
var currentListFromServer;
//providing the list on new
var valuesCurrentListFromServer;

function bigRetriving() {

    currentListFromServer = JSON.parse(localStorage.getItem("currentUser"));
    valuesCurrentListFromServer = Object.values(currentListFromServer.todo);

    createListDOM();

    for (var l in valuesCurrentListFromServer) {
        itemCreator(valuesCurrentListFromServer[l]);
        //this updates the current list
        mainServerArray.push(valuesCurrentListFromServer[l]);
    }

    return mainServerArray;
}
bigRetriving();

console.log("from big retriving");

console.log(mainServerArray);

////////  deleting
$(document).on("click", "#del", removeTask);

function removeTask() {
    $(this).parent("div").remove();
    //reset the user todo
    delete user.todo;
    user = {
        todo: {
            // item: "teste"
        }
    }
    localStorage.setItem("currentUser", JSON.stringify(user));

    var itemWord = $(this).parent("div").children()[1].textContent;

    function deleteFromArray(arra) {
        for (var i in arra) {
            if (itemWord === arra[i]) {
                arra.splice(i, 1);
            }
        }
    }
    deleteFromArray(mainServerArray);
    console.log("#@#@#@#@#@#@# #@#@");
    console.log(mainServerArray);
    //update user object
    function objUpdating() {
        for (var k in mainServerArray) {
            key = 'item' + k;
            user.todo[key] = mainServerArray[k];
        }
    }

    objUpdating();
    localStorage.setItem("currentUser", JSON.stringify(user));

}










// $(document).on("click", "#del", removeTask);

// function removeTask() {
//     $(this).parent("div").remove();
//     var itemWord = $(this).parent("div").children()[1].textContent;

//     function deleteFromArray() {
//         for (var i in storedTodoListArray) {
//             if (itemWord === storedTodoListArray[i]) {
//                 storedTodoListArray.splice(i, 1);

//             }
//         }
//     }
//     deleteFromArray();
//     console.log(storedTodoListArray);
//     todoListArray = [];
//     updatingToDoListFromStored();
//     addToServerArray();


// }









function loadCurrentListFromServer() {
    // createListDOM();
    // gettingArrayValuesFromServer()
    // // creatingItemToDisplay();
}
loadCurrentListFromServer();