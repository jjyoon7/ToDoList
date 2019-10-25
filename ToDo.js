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

function checkToDo(event) {
        //only triger this when the task is done
        const btn = event.currentTarget;
        const li = btn.parentNode;
        const ul = li.parentNode;
    
        btn.classList.add(checkBtnStyle);
        ul.classList.remove(focusStyle);
        

        const checkToDos = toDos.filter(function(toDo) {
            if(toDo.id === parseInt(ul.id)){
                doneDoList.appendChild(ul); 
                return toDo.checked = true;
            }
        })
     
        const cleanToDos = toDos.filter(function(toDo) {
            return toDo.id !== parseInt(ul.id);
        })
    
        toDos = cleanToDos;
        //it looks weird but it is to avoid array inside of an array issue
        // this is causing null added to the object when doneDo is alreay in the doneDo list
        doneDos.push(checkToDos[0]);
        
        saveToDos();
        saveDoneDos();
        movedDo = true;
    
}

function editToDo(event) {
    const btn = event.currentTarget;
    const li = btn.parentNode;
    const ul = li.parentNode;
    
    ul.classList.add(focusStyle);
}

function saveEditedToDo(event) {
    const btn = event.currentTarget;
    const li = btn.parentNode;
    const ul = li.parentNode;

    ul.classList.remove(focusStyle);

    const updateToDos = toDos.filter(function(toDo) {
        if(toDo.id === parseInt(ul.id)){
            return toDo.text = ul.innerText;
        }
    })
    saveToDos();
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

    const cleanDoneDos = doneDos.filter(function(doneDo) {
        return doneDo.id !== parseInt(ul.id);
    })

    toDos = cleanToDos;
    doneDos = cleanDoneDos;
    
    saveToDos();
    saveDoneDos();
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
    saveBtn.addEventListener("click", saveEditedToDo);
    
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
        // moved: false,
    }
    toDos.push(toDoObj);
    saveToDos();
}

function paintDoneDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const saveBtn = document.createElement("button");
    const span = document.createElement("span");
    const newIdDoneDo = doneDos.length + 1;
    const spanButton = document.createElement("span");

    delBtn.innerHTML = `<i class="fa fa-trash"></i>`;
    editBtn.innerHTML = `<i class="fa fa-edit"></i>`;
    saveBtn.innerHTML = `<i class="fa fa-save"></i>`;

    delBtn.addEventListener("click", deleteToDo);
    editBtn.addEventListener("click", editToDo);
    saveBtn.addEventListener("click", saveEditedToDo);
    
    span.innerText = text;
    span.contentEditable = true;

    spanButton.appendChild(editBtn);
    spanButton.appendChild(saveBtn);
    spanButton.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(spanButton);

    li.id = newIdDoneDo;
    doneDoList.appendChild(li);

    let toDoObj = {
        text: text,
        id: newIdDoneDo,
        checked: true,
    }
    doneDos.push(toDoObj);
    saveDoneDos();
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
            // loadToDo = true;
        });
    }
 }

 function loadDoneDos() {
    const loadedDoneDos = localStorage.getItem(DONEDOS_LS);
    if(loadedDoneDos !== null) {
        const parsedDoneDos = JSON.parse(loadedDoneDos);
        parsedDoneDos.forEach(function(doneDo) {
            paintDoneDo(doneDo.text);
        });
    }
 }

function init() {
    loadTodos();
    loadDoneDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();