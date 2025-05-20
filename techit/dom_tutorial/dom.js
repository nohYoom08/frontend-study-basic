var el = document.getElementById("brand-title");

console.log(el);

console.log(el.innerHTML);  //해당 id 코드 전부 출력
console.log(el.innerText);  //해당 코드의 텍스트부분만 출력

el.innerText="안녕하세요 :)";

console.log(el.innerText);  //html문서의 h1 텍스트 변경(웹에도 적용_

var el = document.getElementsByClassName('sub-title');  //해당 클래스의 요소들을 갖고옴
//클래스 자체가 여러번 쓰일 수 있으므로 여러 개를 포함한 콜렉션의 형태를 띰

console.log(el);


//html 문서의 속성으로 안 넣고 직접 dom에서만 정의
var el = document.getElementById("what the");

var myfunc = function (){
    alert('addEventListener activated');
}
el.addEventListener("click",myfunc);