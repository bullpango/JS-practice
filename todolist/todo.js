const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");

const TODOS_KEY = "todos"

const toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodos(event){
 const li = event.target.parentElement;
 li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText ="❌"
    button.addEventListener("click", deleteTodos);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function onToDoSubmit(event){
    event.preventDefault();
    const newTodo =  toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}


toDoForm.addEventListener('submit', onToDoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parseToDos = JSON.parse(saveToDos);
    parseToDos.forEach();
}