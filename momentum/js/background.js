const images=["1.jpg","2.jpg","3.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];
    //floor로 반올림, images.length범위의 난수 생성  

const bgImage = document.createElement("img");  //이미지 태그 생성
bgImage.src=`image/${chosenImage}`; //bgImage => <img>
console.log(bgImage);
document.body.appendChild(bgImage); 
//img를 js에서 생성한 것 뿐, 이 작업 통해서 document에 추가해줘야됨(body에 추가)