const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList")
const doneDoList = document.querySelector(".js-doneDoList")

const TODOS_LS = "toDos"
let toDos = [];
let doneDos = [];

const checkBtnStyle = "checked";

let toDoObj = {
    checked: false,
}

function checkToDos(event) {
    console.log("checkToDo is triggered");
    const btn = event.currentTarget;
    btn.classList.add(checkBtnStyle);

    toDoObj.checked = true;

    if(toDoObj.checked){
        doneDoList.appendChild(toDoList.firstChild); 
        toDoObj.checked = false;
    }
   
}

function deleteToDos(event) {
    console.log("deleteToDo is triggered");
    const btn = event.currentTarget;
    const li = btn.parentNode;

    console.log(!toDoObj.checked);

    if(toDoObj.checked === true) {
        doneDoList.removeChild(li);
        console.log("delete the toDo from doneList");
    } else if (toDoObj.checked === false) {
        toDoList.removeChild(li);
        console.log("delete the toDo from toDoList");
    }
    
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

    span.innerText = text;
    span.contentEditable = true;
    
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);

    li.id = newId;
    toDoList.appendChild(li);
    let toDoObj = {
        text: text,
        id: newId,
    }
    toDos.push(toDoObj);
    saveToDos();

    delBtn.addEventListener("click", deleteToDos)
    checkBtn.addEventListener("click", checkToDos)
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