/// todo javascript



var title = $("<h1>Today's List</h1>")
$('#to-do-list').prepend(title);

function itemCreator(item) {
    var divItem = $('<div class="todo-item">');

    var divCheck = $('<div id="del" class="check-box">');

    divCheck.html('<img width="30px" src="./assets/imgs/squareChecked.svg">');

    var itemBtn = $('<div class"word-btn">' + item + '</div>');

    // itemBtn.html(item);

    divItem.append(divCheck);
    divItem.append(itemBtn);

    $('#current-list-items').append(divItem);

    // insertOnToDOList(item);
}

var firstTime;

var user = {
    name: "luke Skywalker",
    todo: {
        
    }
}
//start storage
// localStorage.setItem('userInformation', JSON.stringify(user));

//retriving information from localStorage
var storedItems = JSON.parse(localStorage.getItem('userInformation'));
var itemsArrayFromServer;
// var itemsArray = JSON.stringify(storedItems.todo);
// if(user.todo.item === "Breakfast"){
//     firstTime = true;
//     delete user.todo.item;
//     console.log("empty list" + user.todo.item);
//     itemsArrayFromServer = [];
// } else {
itemsArrayFromServer = Object.values(storedItems.todo);

// }


// for (let k in itemsArray2) {
//     itemCreator(itemsArray2[k]);
// }

// console.log(itemsArray + " -=-=-=-=-=-=-=-= fhdsajhfld");
// console.log(itemsArray2 + " -=-=-=-=-=-=-=-= fhdsajhfld");


// console.log(storedItems + " fhdsajhfld");
// console.log(Object.values(storedItems) + " fhdsajhfld");

var key;

$(document).on("click", "#del", removeTask);

function removeTask() {
    $(this).parent("div").remove();
    var itemWord = $(this).parent("div").children()[1].textContent;

    function deleteFromArray() {
        for(var i in storedTodoListArray){
            if(itemWord === storedTodoListArray[i]){
                storedTodoListArray.splice(i, 1);

            }
        }
    }
    deleteFromArray();
    console.log(storedTodoListArray);
    todoListArray = [];
    updatingToDoListFromStored();
    addToServerArray();
    

}


var todoListArray = [];
var storedTodoListArray = [];


//getting the list from server array
for (var i in itemsArrayFromServer) {
    storedTodoListArray.push(itemsArrayFromServer[i]);
}



//updating the todo list array
function updatingToDoListFromStored(){
    for (var l = 0; l < storedTodoListArray.length; l++) {

        clearListDOM();
        createListDOM();
        //add to array
        todoListArray.push(storedTodoListArray[l]);
        addToListArray();
    
    
        console.log("shouldklk work");
    }
}

updatingToDoListFromStored();





//this will update the DOM
function addToListArray() {
    for (let j in todoListArray) {
        itemCreator(todoListArray[j]);
    }
}

//this pushes information to DOM
function addToServerArray() {
    for (var k in todoListArray) {
        key = 'item' + k;
        user.todo[key] = todoListArray[k];
    }

    localStorage.setItem('userInformation', JSON.stringify(user));

}

function createListDOM() {
    var divCurrentListItem = $('<div id="current-list-items">');
    $('#current-list').html(divCurrentListItem);

}

function clearListDOM() {
    $('#current-list-items').remove();
}


$('#submit-btn-add').on('click', function (event) {
    event.preventDefault();

    var itemValue = $('#item-to-be-added').val().trim();
    if (itemValue == "") {
        ;
    } else {

        clearListDOM();
        createListDOM();
        //add to array
        todoListArray.push(itemValue);
        addToListArray();
        addToServerArray();

    }

    $('.todo-form')[0].reset();

});