const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const toDos_LS = "toDos";
const toDos = [];

function saveToDos() {
    localStorage.setItem(toDos_LS, JSON.stringify(toDos));
}

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
    toDoObj = {
        id: toDos.length + 1,
        text: text
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintToDo(currentValue);
    //empty the input area after submit the toDo
    input.value = "";
}

function loadToDos(){
    const toDosData = localStorage.getItem(toDos_LS);
    if(toDosData !== null){
        console.log(toDosData);
    }
}

function init() {
    loadToDos();
    form.addEventListener("submit", handleSubmit);
}

init();