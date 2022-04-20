const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");

const TODOS_KEY = "todos"

let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodos(event){
 const li = event.target.parentElement;
 li.remove();
 toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
 saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.Text;
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
    const newToDoObj ={
        Text:newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', onToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

