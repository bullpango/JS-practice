const toDoList=document.querySelector("#todo-list");
const doneList = document.querySelector('#done-list');
const toDoForm =document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector("#todo-form input");

const TODOS = "toDos";
const DONE = "done";

let toDosBox, doneBox = [];

function getObj(){
    return{
        Text:toDoInput.value,
        id: String(Date.now())
    };
}

function saveToDos(task){
    toDosBox.push(task);
}

function addToDone(task){
    doneBox.push(task);
}

function addToDo(task){
    toDosBox.push(task);
}

function findInTodo(taskId){
    return toDosBox.find(function(task){
        return task.id === taskId;
    });
}

function findInDone(taskId){
    return doneBox.find(function(task){
        return task.id === taskId;
    });
}

function removeFromToDo(taskId){
    toDosBox = toDosBox.filter(function(task){
        return task.id !== taskId;
    });
}

function removeFromDone(taskId){
    doneBox = doneBox.filter(function(task){
        return task.id !== taskId;
    });
}

function deleteToDos(event){
    const li = event.target.parentElement;
    li.remove();
    removeFromToDo(li.id);
    removeFromDone(li.id);
    saveState();
}

function handleDoneClick(event){
    const li = event.target.parentElement;
    li.remove();
    const task = findInTodo(li.id);
    removeFromToDo(li.id);
    addToDone(task);
    paintDone(task);
    saveState();
}

function handleBackClick(event){
    const li = event.target.parentElement;
    li.remove();
    const task = findInDone(li.id);
    removeFromDone(li.id);
    addToDo(task);
    paintToDo(task);
    saveState();
}

function generalLi(task){
    const span = document.createElement("span");
    span.innerText = task.Text;
    const li = document.createElement("li");
    li.id = task.id;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText ="❌";
    deleteBtn.addEventListener("click", deleteToDos);
    li.append(span, deleteBtn);
    return li;
}

function paintToDo(task){
    const general = generalLi(task);
    const completeBtn = document.createElement("button");
    completeBtn.innerText ="✅";
    completeBtn.addEventListener("click", handleDoneClick);
    general.append(completeBtn);
    toDoList.append(general);
}

function paintDone(task){
    const general = generalLi(task);
    const backBtn = document.createElement("button");
    backBtn.innerText ="🔄";
    backBtn.addEventListener("click", handleBackClick);
    general.appendChild(backBtn);
    doneList.appendChild(general);
}

function saveState(){
    localStorage.setItem(TODOS, JSON.stringify(toDosBox));
    localStorage.setItem(DONE, JSON.stringify(doneBox));
}


function loadState(){
    toDosBox = JSON.parse(localStorage.getItem(TODOS))||[];
    doneBox = JSON.parse(localStorage.getItem(DONE))||[];
}

function restoreState() {
    toDosBox.forEach(function (task){
        paintToDo(task);
    });
    doneBox.forEach(function (task){
        paintDone(task);
    });
}



function handleForSubmit(event){
    event.preventDefault();
    const newToDo = getObj(toDoInput.value);
    toDoInput.value = "";
    generalLi(newToDo);
    paintToDo(newToDo);
    saveToDos(newToDo);
    saveState();
}

function init(){
    toDoForm.addEventListener("submit", handleForSubmit);
    loadState();
    restoreState();
}

init();