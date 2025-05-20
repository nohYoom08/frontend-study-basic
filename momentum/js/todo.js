const todoForm = document.getElementById("todo-form");
const todoInput=todoForm.querySelector("#todo-form input"); 
//document.를 써도 되지만 이미 todoForm을 찾아놨기 때문에 이렇게 해도 ㅇ(input이 todo안에 있어서)
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"

let toDos=[];   //const에서 let으로 전환 => 새로고침해도 toDos의 item들 유지

function saveToDos(){
    //localStorage.setItem("todos",toDos);    //"todos"라는 key의 배열에 value들 localStorage 저장
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    //localStorage에 단순 텍스트만 넣는게 아니라 배열화까지 완료

}   

function deleteToDo(event){
    // (event = "click")
    //console.log(event.target);  //말그대로 타겟이 되는 태그를 콘솔창에 띄움
    //console.dir(event.target.parentElement.innerText); 
    // (target까지만 있으면) button태그의 속성들 싹다 콘솔창에 띄워줌
    // parrent속성에 들어가면 'li'가 있는 것을 확인할 수 있음(button의 parent 누군지 확인 가능)
    // (parent~까지 있으면) li의 innerText까지 콘솔창에 띄워줌
    const li = event.target.parentElement;  //event의 target(button)의 부모요소(li)
    //li.remove();  //삭제(함수이므로 괄호 붙여주기(appendChild처럼))
    li.remove();
    toDos=toDos.filter((toDo) => toDo.id!==parseInt(li.id));  
    //화살표 다음 return 안 쓰고 그냥 반환값만 써도 됨 + toDo.id는 객체의 array 훑는 것
    //(li.id는 해당 버튼을 포함하는 li의 id (paintToDo함수 참고) + string형태이므로 parseInt 필요)
    console.log(li.id);
    saveToDos();    //li.id 제외하고 새로 만들어진 array 다시 부르기
}

function paintToDo(newTodoObj){    //리스트와 그 외의 요소들(버튼 등) 생성
    const li = document.createElement("li");
    li.id = newTodoObj.id;

    const span = document.createElement("span");
    const button=document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);   //li안에 span 추가
    li.appendChild(button);
    span.innerText = newTodoObj.text;

    console.log(li); 
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=todoInput.value;  //밑에 줄 코드로 input 비우기 전에 내용이 뭐였는지 확인
    todoInput.value=""; //enter누르면 입력창 비워짐(placeholder가 보임)(입력창 내부 초기화)
    
    const newTodoObj = {
        text : newTodo,
        id : Date.now() //item에다 random의 id 부여
    }
    toDos.push(newTodoObj);    //데이터베이스(application)에 item 추가
    paintToDo(newTodoObj);
    saveToDos();
    console.log(newTodo, todoInput.value);
}
todoForm.addEventListener("submit",handleToDoSubmit);   //enter가 발생이벤트

function sayHello(item){    //item객체도 있음(like event) => savedToDos 안의 요소들 그냥 제공
    console.log("this is the turn of",item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if(savedToDos!==null){
    const parsedToDos = JSON.parse(savedToDos); //savedToDos string화(이쁘게)
    console.log(parsedToDos);
    //parsedToDos.forEach(sayHello);  //sayHello함수 savedToDos의 원소 개수만큼 실행
    //parsedToDos.forEach((item) => console.log("this is the turn of",item));
    //화살표 함수 => 이렇게도 실행 가능( (인자) => 구현내용() )
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo); //paintToDo의 인자인 newTodo에 다 들어가고 실행 가능 
}

sayHello("a");  //이러면 item에 "a"가 인자로 들어감


