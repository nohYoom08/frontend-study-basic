//npx create-react-app .

import {useState,useEffect} from 'react';
import axios from 'axios';


function App() {
  const [todoList, setTodoList] = useState(null);
  //{}가 아니라 []다;;
  
  const SERVERURL = "http://localhost:3000/api/todo"
  //이런식으로 멋사에서 했던 거 활용

const fetchData = () => {
  // fetch('http://localhost:3000/api/todo')
  // .then((response)=>response.json())
  // .then((data)=>setTodoList(data));
  
  //axios로 가보자//
  axios.get('http://localhost:3000/api/todo').then((response)=>{setTodoList(response.data)})
  //이 짧은 코드 안에 http method, response에 json parsing 후 data에 대입까지 전부 가능



  // 1. 그냥 fetch : response.json()을 data에 대입 => setTodoList를 통해 todoList값 변경
  //   첫번째 then의 인자가 두 번째 then()의 인자(data)로 들어가게 되는 거임
  // 2. axios : data라는 멤버를 갖고 있는 response 객체 바로 생성 => so response.data(json객체)로 활용
  // 3. 2번의 과정을 response라는 변수가 await axios.get이라는 객체(json파일)을 대입
    // const response=await axios.get(SERVERURL)
}

  useEffect(()=>{
  //   //노마드코더의 useEffect => fetch는 계속 리렌더링 할 필요가 없어요 한 번만 가져오면 됐지
  // fetch('http://localhost:3000/api/todo')
  //   //fetch의 서버에서 데이터 받아오기
  // .then((response)=>response.json())
  //   //then(response) : '서버에서 응답이 오면(then) 실행시켜라(response.json) => json데이터 변환과정을'
  // .then((data)=>setTodoList(data));
  //   // data : 변환된 json 객체
  fetchData();  
},[]);


  const onSubmitHandler = async (e) => {
    e.preventDefault(); 
    //form은 기본값으로 query parameter에 name이랑 value를 넣고 get요청을 보내버림 => 이를 방지하고자ㅇㅇ
    const text = e.target.text.value;
    const done = e.target.done.checked;

  //   fetch('http://localhost:3000/api/todo',{
  //     method:'POST',
  //     //기본값은 'GET' (fetch의 인자2(option, 인자 1은 url)의 여러 속성값 중 하나)
  //     headers:{
  //       "Content-Type":'application/json' //뭔진 모르겠는데 json을 정상적으로 stringify하게끔 함
  //     },
  //     body:JSON.stringify({   //JSON.stringify => json형식의 문자열로 반환
  //     text,
  //     done,
  //   }),  
  // }).then(()=>{fetch('http://localhost:3000/api/todo')
  // .then((response)=>response.json())
  // .then((data)=>setTodoList(data));
  // });
  // //이 fetch는 post추가 후에 한 번 더 받아오는 역할(클릭하자마자 데이터 추가되고 바로 받아오는 것)
  // //but 코드 중복 => 함수화합시다(위에서 함수화 완료)

  //이번엔 async await으로 가보자
  await axios.post(SERVERURL, {text, done})
  fetchData(); //추가 then없이 그냥 이렇게 하면 끝
};


  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text"></input>
        <input name="done" type="checkbox"></input>
        <input type="submit" value="추가"></input>
      </form>
      {todoList?.map((todo)=>(
        //todoList의 초기값인 null은 map에 쓸 수 없기때문에 '?'추가
        <div key={todo.id} style={{display:'flex'}}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done? 'Y' : 'N'}</div>
        </div>
      ))}
    </div>
    //key => 각 원소들 탐색하는데 쓰임
    // &nbsp 이걸로 단순 <div></div>안에서 space 여백 추가
  );
}

export default App;


//react-query이라는 라이브러리로 더 간단하게 작성해볼 수 있다.