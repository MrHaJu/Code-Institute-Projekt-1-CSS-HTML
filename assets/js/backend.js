


var submitButton = document.getElementById("todolistTrigger");

var todoInputField = document.getElementById("todolistInput");

var todoListUI = document.getElementById("todoUL");

//i must start, when button is clicked
function addTodolistItem(num) {

//alert("fuck off");// öffnet ein fenster und sagt "fuck off"
//console.log("fuck off zähler"); //speichert in der console wie oft der Butten geklickt wird mit der nachricht "fuck off"

    var inputValue = todoInputField.value;

    if(inputValue === ""){
        alert("cant add empty todos");
        return;
    }


    var defaultListItem = document.createElement("li");

    defaultListItem.textContent = inputValue;

//var inputValueTextNode = document.createTextNode(inputValue);

//var completeListItem = defaultListItem.appendChild(inputValueTextNode);

    todoListUI.classList.add("list-group-item", "list-group-item-primary");

    todoListUI.appendChild(defaultListItem);

    todoInputField.value = "";


}
// event listener to trigger the function that will add new todo to the list
submitButton.addEventListener("click", function () {
    addTodolistItem(); //wenn der Button gedrückt wird, wird die alert/console funktion durch addTodolistItem geetriggert
})

// Working witrh Json Objects

List={
    'name':"MrHaJu",
    'age':"41",
    'City': "Kleinoldendorf",
    'Address':{
        'address1':"Kleinoldendorf",
        'address2':"Uplengen"
    },
'skills':["Html","Css","JS","Git","Github"]
}

//console.log(JSON.stringify(List));
//console.log(List);

List.currecny = "€" // this is how we add a Json object
delete List.Address.address2 // this is how we destroy/delete data keys in a json Object



console.log(JSON.stringify(List,null,2)); //this is how we add keys into a Json object
console.log(List.name) //demonstratomg accessomg one key of the table
console.log(List.skills[0]) // accessing one child, of the array skills after calling the table "list"
console.log(List.Address.address1)// accessing the key address1, after calling the key address, trough the tabkle of "list"


console.log(JSON.stringify(List));
console.log(List);

