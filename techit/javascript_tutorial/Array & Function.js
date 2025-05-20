// 배열 => 객체로 인식 //
var mbti = ['INFP', 'ENFJ', 'INTJ'];
console.log(mbti[0]);
console.log(mbti.length);   // length : 함수 길이

mbti[3] = 'ESFP';   //초기화와 동시에 삽입가능
console.log(mbti[3]);

mbti[2] = 'ISTJ';   //덮어쓰기

//push()
console.log(mbti);
console.log(mbti.push('ESFP','ISTJ'));  // push : 추가 후 배열길이 반환


//스프레드 문법
var newMbti = [...mbti, 'ESFP', 'ISTJ'];    //mbti배열에 추가 안하고 추가된 배열을 새로 만들기('...' 추가)
console.log(mbti);
console.log(newMbti);


//pop() : 반환값은 삭제한 원소
console.log(`pop반환 : ${mbti.pop()}`);
console.log(mbti);


//unshift() : 맨 앞에서 추가 (반환값은 배열 길이)
console.log("unshift 반환값 : ", mbti.unshift('II','TT'));
console.log(mbti);

//shift() : 맨 앞꺼 지우고 반환값은 지운 원소
console.log("shift()함수 값 : ",mbti.shift());
console.log(mbti);

//slice()
console.log("slice = ",mbti.slice(0,2));
console.log(mbti.slice(-6,-1)); //끝에서부터 slice (-1이 끝)

//join() : 배열 합쳐서 하나의 문자열로
console.log("join = ",mbti.join());   //기본구분자는 ','
console.log(mbti.join('_'));    //구분자를 인자로


//sort() : 정렬 함수
console.log("sort = ",mbti.sort());

//reverse() : 역정렬 함수
console.log("reverse sort =",mbti.sort().reverse());



// 함수 //
console.log("함수 시작");
var multiply = function (a,b){
    return a*b;
}
console.log(multiply(10,5));    //함수를 우변에 넣어서 정의할 수도 있음(표현식 방법)



console.log(a);

a = 5;

console.log(a);

var a;  //var키워드는 실행 전 순서를 가장 우선순위로 둬버림 so 실행자체는 되고 a=undefined가 출력되는 것



// 화살표 함수
console.log("화살표 함수");
let plus = (a,b) => a+b;
console.log(plus(3,4));


let print=word=>{
    console.log(word);
}

let myfunc=()=>{
    return 1;
}
console.log(myfunc);    //함수 내용 출력
console.log(myfunc());  //c플이랑 다름 무조건 ()넣어줘야 함
