let el = document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');



const today = new Date();   //기본인자는 현재시각, 자료형은 문자열

function calculateAge(){

    //let birthDate = new Date(el.value); //'id = birthday'에 해당하는 입력란에서 받은 값
    //=> 그걸 .value로 받음
    let birthDate=new Date(el.value);   //input의 값을 갖고오는 것(innerText를 인자로 쓰면 안 됨)
    let age;

    if (today.getMonth() > birthDate.getMonth() || //getMonth()는 실제 월수보다 -1되어서 나오는 듯
    (today.getMonth()==birthDate.getMonth() &&
    today.getDate()>=birthDate.getDate())    //getDate는 일수
    )
    {
        age = today.getFullYear() - birthDate.getFullYear();
    }
    else{
        age=today.getFullYear() - birthDate.getFullYear() - 1;
    }

    elResult.innerText = `귀하의 만 나이는 ${age} 입니다.`; //html내 텍스트도 변함(기본)

    return age;
}
//html에서 console 업데이트 할 때 여기 자바 파일 새로 저장만 한다고 해서 웹에서 바로 반영되는거 아님
//html에서도 f5눌러준 다음 콘솔에서 실행을 해야 변경된 파일 내용 적용

elSubmit.addEventListener('click', calculateAge);
// 버튼실행. 그와중에 여기서 함수 인자로 넣을때만 괄호 안 넣음

console.log(elResult.value); // => undefined => value랑 innerText랑 다름.
    //단순 텍스트랑 input으로 받는 값이랑 구분