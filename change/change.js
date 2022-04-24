const toDoList=document.querySelector("#todo-list");
const doneList = document.querySelector('#done-list');
const toDoForm =document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector("#todo-form input");

let toDos,dones = [];


function saveToDos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function saveDones(){
    localStorage.setItem("dones", JSON.stringify(dones));
}


function deleteTodos(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    dones = dones.filter((dones) => dones.id !== parseInt(li.id));
    saveToDos();
    saveDones();
}

function addToDone(toDos){
    dones.push(toDos);
}


function changeToDone(event){
    const btn = event.target.parentNode;
    btn.remove(btn);
    addToDone(toDos);
    paintDoneList(dones);

    saveDones();
}

function returnToDo(event){
    console.log('click this');
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const delButton = document.createElement("button");
    delButton.innerText ="❌"
    delButton.addEventListener('click', deleteTodos);
    const changeButton = document.createElement("button");
    changeButton.innerText ="✅"
    changeButton.addEventListener('click', changeToDone);
    span.innerText = newTodo.Text;
    li.appendChild(span);
    li.appendChild(delButton);
    li.appendChild(changeButton);
    toDoList.appendChild(li);
}

function paintDoneList(dones){
    const li = document.createElement("li");
    li.id = dones.id;
    const span = document.createElement("span");
    span.innerText = dones.Text;
    const delButton = document.createElement("button");
    delButton.innerText ="❌"
    delButton.addEventListener('click', deleteTodos);
    const returnButton = document.createElement("button");
    returnButton.innerText ="🔄"
    returnButton.addEventListener('click', returnToDo);
    li.appendChild(span);
    li.appendChild(delButton);
    li.appendChild(returnButton);
    doneList.appendChild(li);
}

function onToDoSubmit(event){
event.preventDefault();
const newTodo = toDoInput.value;
toDoInput.value = "";
const newToDoObj ={
    Text:newTodo,
    id: Date.now(),
};
toDos.push(newToDoObj);
paintToDo(newToDoObj);
saveToDos();
}


toDoForm.addEventListener('submit', onToDoSubmit);

const savedToDos = localStorage.getItem("toDos");

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

const savedDones = localStorage.getItem("dones");

if(savedDones !== null){
    const parsedDones = JSON.parse(savedDones);
    dones = parsedDones;
    parsedDones.forEach(paintDoneList);
}
