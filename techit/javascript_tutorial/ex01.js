document.write('<p>JavaScript는 어려워 :(</p>')

//자료형(2)//
//객체(Object)
var student={
    grade : 1,
    school : "lion school"
};

console.log(student);
console.log(typeof(student));

console.log(student.grade);

//객체의 키 호출
var key = Object.keys(student)[0];
console.log(key);
console.log(Object.keys(student)[1]);

//객체에 속성 추가
student.class = 3;
console.log(student);

console.log(student['class']);


//비어 있는 객체
var teacher = new Object();
var teacher = {

};


//자료형(3)//
//symbol
var name1 = "김멋사";
var name2 = "김멋사";

console.log(name1==name2);

var name3 = Symbol("이테킷");
var name4 = Symbol("이테킷");

console.log(name3, name4);
console.log(name3 == name4);


var myclass = {
    [Symbol("이테킷")]: 1,
    [Symbol("이테킷")]: 2,
};
console.log(myclass);
console.log(Symbol("이테킷"));
//console.log(myclass.[Symbol("이테킷")]); 이렇게는 바로 출력 x
console.log(Object.keys(myclass)[1]);   //이것도 undefined. 그냥 객체 자체인 myclass만 출력가능




//연산자//

// 3. 비교 연산자
console.log("비교 연산자 시작")
console.log(2 == 2);    
console.log(2 == "2");  //암묵적 형변환 해줌 => true
console.log(2 === "2");     //정확한 자료형 따짐 => false

console.log(2 != 2);
console.log(2 != "2");
console.log(2 !== "2");


// 4. 논리 연산자
//논리합(or)
console.log("논리 연산자 시작");
console.log(true||true);
console.log(true||false||false);
console.log(false||false);

//논리곱(and)
//피연산자 모두가 참이어야 참
console.log(true&&true);
console.log(true&&false&&false);
console.log(false&&false);

//부정(not)
console.log(!(5>4));    // true


// 5. typeof 연산자
console.log("typeof 연산자 시작");
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof undefined);
console.log(typeof Symbol());
console.log(typeof null);   //null은 object로 뜸. so 얘는 그냥 비교연산자로 비교해야댐