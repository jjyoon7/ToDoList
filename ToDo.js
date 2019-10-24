const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const toDos_LS = "toDos";

function loadToDos(){
    const toDos = localStorage.getItem(toDos_LS);
    if(toDos === null){
        //if there are no todos, then get the todos
    } else {
        //show the todos
    }
}

function init() {
    loadToDos();
}

init();