const todoForm= document.getElementById("todo-form");
const todoInput=document.querySelector("#todo-form input");
const todoList=document.getElementById("todo-list");

const TODOS_KEY="todos";

let todos=[];

function saveTodos(){
    //todos 배열을 string으로 만들어줌
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function deleteTodo(event){
    //클릭된 버튼의 리스트(부모요소) 삭제
    const li = event.target.parentElement;
    li.remove();
    //클릭된 리스트의 아이디와 다른 리스트만 남겨두기
    //todo.id = string , li.id = int 이므로 타입 맞춰주기
    todos=todos.filter(todo => todo.id!==parseInt(li.id));
    saveTodos(); //배열 저장
}


function paintTodo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id; //삭제하기 위해 id 필요

    const span = document.createElement("span");
    span.innerText=newTodo.text;

    const button=document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=todoInput.value;
    todoInput.value="";
    const newTodoObj={
        text: newTodo,
        id: Date.now() //밀리초(1000분의 1초)를 주는 함수
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos(); //추가 리스트 저장
}

todoForm.addEventListener("submit",handleToDoSubmit);



const savedTodos=localStorage.getItem(TODOS_KEY);

//만약 리스트 정보가 저장되어 있다면
if(savedTodos!==null){
    //배열로 바꾸어줌
    const parsedTodos=JSON.parse(savedTodos);
    todos=parsedTodos //전에 가지고 있던 요소 기억
    //parseTodos가 가지고 있는 요소 각각 실행
    parsedTodos.forEach(paintTodo);
}