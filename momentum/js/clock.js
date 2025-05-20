const clock = document.querySelector("h2#clock");


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, 0);
    const minutes = String(date.getMinutes()).padStart(2, 0);
    const seconds = String(date.getSeconds()).padStart(2, 0);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    //함수는 인자로 쓰일때만 괄호 안 붙음
}



setInterval(getClock, 1000);    //인자는 함수,ms단위의 시간 => 1초마다 sayHello함수 반복실행
