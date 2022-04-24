const toDoList=document.querySelector("#todo-list");
const doneList = document.querySelector('#done-list');
const toDoForm =document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector("#todo-form input");

let toDos = [];

function saveToDos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteTodos(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
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

function paintDoneList(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const delButton = document.createElement("button");
    delButton.innerText ="❌"
    delButton.addEventListener('click', deleteTodos);
    const returnButton = document.createElement("button");
    returnButton.innerText ="🔄"
    returnButton.addEventListener('click', returnToDo);
    span.innerText = newTodo.Text;
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