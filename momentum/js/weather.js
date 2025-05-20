const API_KEY = "338a2a49515b2e4697daa719230bcbfd";

function onGeoOk(position){
    const lat = position.coords.latitude;   //onGeoOk의 coords에서 위도 경도 제공
    const lng = position.coords.longitude;
    console.log("You live in",lat,lng);
    const url = 
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    console.log(url);   //f12 => Network => Preview를 통해 속성들 확인 가능
    fetch(url).then(response=>response.json)    //url의 정보 가져오기(fetch = get)
    .then(data=>{   
        const weatherId = document.getElementById("weather");
        const weather = weatherId.querySelector("span:first-child");
        const city = weatherId.querySelector("span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;   
        //url의 정보가 data에 담기고, weather[0]인 이유는 weather이 array이기 때문
        //[{id : 32132, main : 323123 ...}] 등의 표시. {}하나가 weather[0]임
    });   //response의 json값 받아냄(백엔드 영역)
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);