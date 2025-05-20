const loginForm = document.getElementById("login-form");    //querySelector로 할거면 '#'붙여야 함
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");   //#넣고 loginForm을 document로 고쳐도 됨
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  //궁극적인 이유는 중간중간 오타가 날 수 있는 걸 잡아주기 위해
                                    //변수가 오타가 난 건 잡아주니까
const USERNAME_KEY = "username";

// function onLoginBtnClick(){
//     //console.log(loginInput.value);  //클릭시 console창에 input 상자 안 내용을 띄움
//     const username = loginInput.value;
//     /*if(username === ""){
//         alert("Please write your name");
//     }
//     else if(username.length > 15){   //length 함수
//         alert("Your name is too long");
//     }
//     console.log("click!!!");    //console창에 click 띄움*/
//     console.log(username); 
// }


function onLoginSubmit(event){   //for 새로고침 방지(form에 기본적으로 깔려있는 새로고침)
    event.preventDefault();
    console.log(loginInput.value);
    const username = loginInput.value;
    loginForm.classList.add("hidden");  //해당 폼(태그)에 class 속성 추가
    console.log(username);
    localStorage.setItem("username",username);  //key,value => (value 이름, 실제 value값)
    greeting.innerText=`Hello ${username}`; //백틱기호 활용
    greeting.classList.remove(HIDDEN_CLASSNAME);  //클래스 이름 string상수로 저장해서 써보기
}

function handleLinkClick(){
    alert("clicked!");
}

loginForm.addEventListener("submit",onLoginSubmit);  
//함수에 '()'붙이면 안 됨(괄호가 없어야지 submit을 할 때에 함수를 실행한다는 의미가 됨
//위 함수와 더불어 이렇게 작성하면 새로고침 방지 완료(argument로써 'event'제공하고)
link.addEventListener("click",handleLinkClick);

function paintGreetings(){  //인자 없이 getItem통해 username을 함수 내에서 선언할 수 있으니 인자 생략
    const username=localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
/*function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}*/

const savedUsername = localStorage.getItem("username");
if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit); 
}else{
    paintGreetings();
    /*greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);*/
} 