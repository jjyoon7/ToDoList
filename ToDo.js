const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const toDos_LS = "toDos";

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fa fa-trash-o"></i>`;
    checkBtn.innerHTML = `<i class="fa fa-check"></i>`;
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(checkBtn);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintToDo(currentValue);
    //empty the input area after submit the toDo
    input.value = "";
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