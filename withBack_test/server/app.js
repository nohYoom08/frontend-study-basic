// cd fetch/server
// npm init
// npm i express ('npm i 패키지')
// npm사이트에서 express 검색 후 샘플코드 따오기
// node app.js => localhost:3000(origin) 시작!!

// // 파일 데이터 보내는 거 로컬호스트에 바로바로 업데이트 안 됨
// => so postman의 get을 활용해서 바로바로 확인!!

//브라우저 =(포트번호, 도메인)=> 오리진 제공 => 서버, 클라이언트에 각각 제공 : 여기서 차이 발생


//★★★서버에 코드 변경이 있으면 다시 틀어야함★★★
//★★★서버에 코드 변경이 있으면 다시 틀어야함★★★
//★★★서버에 코드 변경이 있으면 다시 틀어야함★★★
// (서버나 클라이언트 터미널에서 컨트롤C 누르면 다시 명령어 입력 가능)
//'우리 리액트는 언제 깔았어?' => node설치부터 이미 완료


//백엔드식 import
const express = require('express') 
const app = express()
const cors = require('cors')
const argon2 = require('argon2')    //비밀번호 암호화(프론트에서 비밀번호는 숫자들도 모두 문자열로 받아야 함)
const jwt=require('jsonwebtoken')   //토큰 패키지
const cookieParser=require('cookie-parser')


//import후 사용하겠다는 선언 따로 필요
app.use(cors())     //cors 열어줌
app.use(express.json());    //json객체 쓸 수 있도록
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


let id = 2;
const todoList = [{
    id : 1,
    text : '할일 1',
    done : false,
}]

const database = [{
    id : 1,
    loginId : 'FAKE',
    password : 'AAA',
}]

app.get('/',function (req,res){
    return res.send('hello world'); 
});
//localhost:3000/라는 공간에 hello world 보내서 출력 (But post에선?)


app.get('/api/todo',(req,res)=>{
    res.json(todoList);
});

app.post('/api/todo',(req, res)=>{
    const {text, done} = req.body
    console.log('req.body:',req.body);
    todoList.push({
        id : id++,
        text,
        done,   //postman에서 다룰 때 무조건 json파일로 보내줘야함(기본)
    });
    return res.send('success'); //얘는 함수 안에 다른 명령어가 있어서 
});
//얘는 localhost:3000/api/todo에 안 뜸 => 상식적으로는 떠야 정상일 것 같지만,
//"웹브라우저에서 주소를 입력한다 => 웹브라우저를 통해 local:3000/api/todo라는 공간에 들어간다"
//이건 여기 server/app.js에 get요청을 보내는 것임
//=> 따라서 post요청의 응답인 res.send('success')는 브라우저에 표시가 안 됨.
        //post요청을 할 수 있는 postman이나 프론트엔드 프레임워크(리액트인 client의 App.js등)에서만 success확인 가능







app.get('/api/data', (req, res) => {
    res.json(database);     //문자열은 send, 데이터는 json
});

app.get('/secure_data',(req,res)=>{
    const {access_token} = req.cookies;
    if(!access_token){  //토큰 존재여부
        res.status(401).send('access token이 없습니다')
    }

    //유효성 여부
    try{
    const {loginId}=jwt.verify(access_token,'secure');
    const loginId_info=database.find((data)=>data.loginId===loginId);
    // =>(조건)에 해당하는 첫 번째 원소 반환

    if(!loginId_info){
        throw 'user의 info가 없습니다';
    }
    res.send('인증된 사용자만 볼 수 있는 API')

    console.log(loginId_info);
    } catch(err){
        res.status(401).send('유효한 access token이 아닙니다');
    }
    
    
   
}
)

app.post('/api/data', async (req, res) => {
    const { loginId, password } = req.body
    const hash = await argon2.hash(password);   //암호화
    console.log('req.body:', req.body);
    
    database.push({
        id: id++,
        loginId,
        password : hash,   //body에서 요청받은 password를 암호화
        //postman에서 다룰 때 무조건 json파일로 보내줘야함(기본)
    });
    return res.send('success'); //얘는 함수 안에 다른 명령어가 있어서 
});


app.post('/api/login',async(req,res)=>{
    const {loginId, password }=req.body;
    const user = database.filter((user)=>{  //조건에 따른 원소만 반환해서 새로운 배열 형성(말그대로 필터링)
        return user.loginId === loginId;
    });
    if(user.length===0){
        res.status(403).send('해당하는 ID가 없습니다');
        return;
    }
    if(!(await argon2.verify(user[0].password,password))){
        res.status(403).send('패스워드가 틀립니다');
        return;
    }

    const access_token = jwt.sign({loginId},'secure');
    //jwt.sign({loginId},'secure') 부분에서, 로그인 사용자 ID를 담은 loginId를 payload(토큰에 쓰일 데이터형태)로 설정하고, 
    //'secure'란 비밀 키 값을 사용하여 access_token을 생성하고 있습니다.
    console.log(access_token);
    res.cookie('access_token', access_token,{httpOnly:true});   //httpOnly:true => 클라이언트에서 쿠키 못 읽게 함
    res.send('로그인 성공!');
})

app.listen(3000, () => {
    console.log("server start!!");  //이건 터미널에 뜸 => ★★터미널은 서버의 콘솔★★
});





// ㅇserver파일에서 import
// const {validUser} = require('./middleware/auth');


// ㅇ 미들웨어 파일에서 쓸 내용
// const{database} = require('../database');

// const validUser = (req,res,next)=>{
//     const {access_token} = req.cookies;
//     if(!access_token){  //토큰 존재여부
//         res.status(401).send('access token이 없습니다')
//     }

//     //유효성 여부
//     try{
//     const {loginId}=jwt.verify(access_token,'secure');
//     const loginId_info=database.find((data)=>data.loginId===loginId);
//     // =>(조건)에 해당하는 첫 번째 원소 반환

//     if(!loginId_info){
//         throw 'user의 info가 없습니다';
//     }
//     res.send('인증된 사용자만 볼 수 있는 API')

//     next();
//     } catch(err){
//         res.status(401).send('유효한 access token이 아닙니다');
//     }
// }
// module.exports={
//     validUser,
// }

//ㅇ 다시 server 파일에다 적어야 할 내용
// app.get('/test',validUser,(req,res)=>{
//     res.send('인증된 사용자만 볼 수 있는 API')
// })