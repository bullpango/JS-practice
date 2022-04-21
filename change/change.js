const toDoList=document.querySelector("#todo-list");
const doneList = document.querySelector('#done-list');
const toDoForm =document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector("#todo-form input");

let toDos = [];


function saveToDos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.Text;
    li.appendChild(span);
    toDoList.appendChild(li);
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