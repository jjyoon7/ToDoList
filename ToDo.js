const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList")
const doneDoList = document.querySelector(".js-doneDoList")

const TODOS_LS = "toDos"
const DONEDOS_LS = "doneDos"
let toDos = [];
let doneDos = [];

const checkBtnStyle = "checked";
const focusStyle = "focus";

//made it global so checkedToDo can have an access to text, but the received text from checkToDo is null
let toDoObj = {
    text: null,
    id: null,
    checked: false,
}

function checkToDo(event) {
    const btn = event.currentTarget;
    const li = btn.parentNode;
    const ul = li.parentNode;
    const newIdDone = doneDos.length + 1;

    btn.classList.add(checkBtnStyle);
    ul.classList.remove(focusStyle);

    li.checked = true;

    if(li.checked){
        doneDoList.appendChild(ul); 
    } 
    
    //in the localStorage, the checked toDos are still paired with toDos key,
    //but it should be deleted from the toDos key and move to doneDos.

    const doneToDos = doneDos.filter(function(doneDo) {
        return doneDo.checked = true;
    })

    localStorage.removeItem(TODOS_LS, //the checked li);

    console.log(toDoObj.text)

    let doneDoObj = {
        id: newIdDone,
        text: //current li's text,
        checked: true,
    }
    doneDos.push(doneDoObj);
    saveDoneDos();
}

function editToDo(event) {
    const btn = event.currentTarget;
    const li = btn.parentNode;
    const ul = li.parentNode;
    
    ul.classList.add(focusStyle);
}

function saveToDo(event) {
    const btn = event.currentTarget;
    const li = btn.parentNode;
    const ul = li.parentNode;

    ul.classList.remove(focusStyle);

    console.log("its saved");
    console.log(ul.innerText);

    // get the saved item from localStorage and change its text value to ul.innerText
    let beforeEditToDo = localStorage.getItem(TODOS_LS, toDos);
    console.log(beforeEditToDo);

    localStorage.setItem(TODOS_LS, //update the text value same as the ul.innerText)
}

function deleteToDo(event) {
    const btn = event.currentTarget;
    const li = btn.parentNode;
    const ul = li.parentNode;
    const div = ul.parentNode;

    ul.classList.remove(focusStyle);
    div.removeChild(ul);
    
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(ul.id);
    })

    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function saveDoneDos() {
    localStorage.setItem(DONEDOS_LS, JSON.stringify(doneDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const saveBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    const spanButton = document.createElement("span");

    delBtn.innerHTML = `<i class="fa fa-trash"></i>`;
    checkBtn.innerHTML = `<i class="fa fa-check"></i>`;
    editBtn.innerHTML = `<i class="fa fa-edit"></i>`;
    saveBtn.innerHTML = `<i class="fa fa-save"></i>`;

    delBtn.addEventListener("click", deleteToDo);
    checkBtn.addEventListener("click", checkToDo);
    editBtn.addEventListener("click", editToDo);
    saveBtn.addEventListener("click", saveToDo);
    
    span.innerText = text;
    span.contentEditable = true;

    spanButton.appendChild(checkBtn);
    spanButton.appendChild(editBtn);
    spanButton.appendChild(saveBtn);
    spanButton.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(spanButton);

    li.id = newId;
    toDoList.appendChild(li);

    let toDoObj = {
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