//예외 처리

try{

    //에러가 발생할 가능성이 있는 코드
    myfunc();   //정의한 적이 없는 함수를 실행하려고 함
    throw new Error("에러");  //에러객체 생성 (throw : 의도적으로 에러 생성)
}
catch(error){   //에러변수

    //에러가 발생했을 때 실행되는 코드
    console.log("에러 발생");
    console.log(error);
}
finally{
    //에러 발생여부와 상관없이 무조건 실행
    console.log("무조건 실행");
}