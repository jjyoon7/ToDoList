const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const toDos_LS = "toDos";

function paintToDo(text) {

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintToDo(currentValue);
}

function loadToDos(){
    const toDos = localStorage.getItem(toDos_LS);
    if(toDos !== null){
        //show the todos
    }
}

function init() {
    loadToDos();
    form.addEventListener("submit", handleSubmit);
}

init();