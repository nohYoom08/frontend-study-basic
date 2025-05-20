//문자열 선언
var greeting = "Hello!";
var farewell = 'Bye!';
var myname= '김테킷';

var sentence = greeting + '\n' + myname;
console.log(sentence);

console.log(farewell+2);

// 이스케이프 시퀀스
var sentence1 = greeting + '\t' + myname;
var sentence2 = greeting + '\'' + myname;
var sentence3 = greeting + '\"' + myname;
var sentence4 = greeting + '\\' + myname;
console.log(sentence1);
console.log(sentence2);
console.log(sentence3);
console.log(sentence4);

//템플릿 리터럴(ES6)
//=> 멀티라인 텍스트 작업 가능 => 이스케이프 시퀀스 필요 X
var a = `안녕하세요!
여러분:)`;
console.log(a);

var price=1000;
var b = '이 물건은 ' + price + '원 입니다.';
console.log(b);

var c = `이 물건은 ${price}원 입니다.`
console.log(c);

var d = `이 물건은 ${200 + 450}원 입니다.`;
console.log(d);


//문자열 함수
var abc = "I am Iron man";

// indexOf : 문자열의 특정값이 시작되는 위치
console.log(abc.indexOf("man"));    // 10
console.log(abc.indexOf("I"));  // 0

//slice : 문자열의 일부를 잘라낼 때
console.log(abc.slice(0, 4));   // 인덱스 0~3까지 (4 미포함)


//toUpperCase(), toLowerCase() : 문자열 전체를 대문자 or 소문자화
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());


//startsWith() : 해당 문자로 시작하는지 true/false 판단
//endsWith() : 해당 문자로 끝나는지 true/false 판단
var efg = 'This is my car.';
console.log(efg.startsWith('Th'));  //true
console.log(efg.startsWith('th'));  //false (대소문자 구분함)

console.log(efg.endsWith('car.'));  //true



//includes() : 해당 문자를 포함하는지 true/false 판단
console.log(efg.includes('is'));
