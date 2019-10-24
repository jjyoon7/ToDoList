const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList")
const doneDoList = document.querySelector(".js-doneDoList")

const TODOS_LS = "toDos"
let toDos = [];
let doneDos = [];

const checkBtnStyle = "checked";

function checkToDos(event) {
    const checkedBtn = event.currentTarget;
    checkedBtn.classList.add(checkBtnStyle)
    //if it is chekced as done, move this to doneDos array and delete from the toDo list
    console.log(checkedBtn)
    console.log(toDoList.childNodes.length)
    console.log(doneDoList.childNodes.length);

    while (toDoList.childNodes.length) { 
        doneDoList.appendChild(toDoList.firstChild); 
    }

    console.log(doneDoList);
    
}

function deleteToDos(event) {
    const btn = event.currentTarget;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos();

}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerHTML = `<i class="fa fa-trash"></i>`;
    checkBtn.innerHTML = `<i class="fa fa-check"></i>`;

    delBtn.addEventListener("click", deleteToDos)
    checkBtn.addEventListener("click", checkToDos)

    span.innerText = text;
    span.contentEditable = true;
    
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);

    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId,
        checked: false,
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadTodos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        // console.log(loadedToDos)
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadTodos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();