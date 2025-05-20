import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
//import코드에 음영처리 뜨는 이유 : 아직 실제 코드에서 사용되지 않았다는 뜻

// ★React 바닐라와 비교해서 사용★
// function App() {
//   const [counter,setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev+1);
//   const onChange = (event) => setKeyword(event.target.value );
//   console.log("Rendered!!");
//   /*const iRunOnlyOnce = () => {
//     console.log("i run only once.");
//   };
//   useEffect(iRunOnlyOnce,[]);*/ //API에서의 '최초 render 데이터콜' 1번 방법(useEffect 함수 활용)

//   useEffect(()=>{
//     console.log("CALL THE API...!");
//   }, []); //'최초의 render' 2번 방법

//   useEffect(()=> {
//   if (keyword!=="" && keyword.length > 5)   //이렇게 하면 시작하자마자의 최초실행도 없음
//     console.log("SEARCH FOR", keyword);
//   },
//   [keyword]);  //출력방식은 파이썬 처럼 문자열 이후 변수 출력
//   //최초 실행 이후 keyword 참조 후 keyword state만 변화할 때만 해당 코드 실행
//   //이것이 위에 CALL THE API에서 빈 array는 최초실행 후 참조할 게 없어서 한 번만 실행되는 원리임

//   useEffect(()=> {
//     if (keyword!=="" && keyword.length > 5)  
//       console.log("counter and keyword have changed");
//     },
//     [keyword,counter]); //이렇게 하면 input에 5글자 이상 + 버튼 눌려야 리렌더링

//   return (  //placeholder이랑 value랑 html에 뜨는 상태 구분 잘 할 것
//     <div>
//       <input value = {keyword} onChange = {onChange} type = "text" placeholder="Search here..."></input>
//       <h1 className={styles.title}>Welcome back! {counter}</h1>
//       <Button onClick = {onClick} text={"Continue"}/> 
//     </div>  //Button에 커서 올려놓으면 prop 뭐 필요한지 button.js 살펴봐서 알려줄 수 있음
//   );
// //}
// function Hello(){ //함수 안에 있는 useEffect는 함수가 실행될때마다 rerendering되나보다
//                   //(왜냐면 함수 자체는 생성과 삭제가 반복되니까)

//   function byFn(){
//     console.log("bye :(");
//   }
//   function hiFn(){
//     console.log("created :)");
//     return byFn;
//   }
// useEffect(()=>{
//   console.log("I'm here!");
//   return ()=>console.log("destroyed :(");
// // 그냥 특수구문 "Cleanup Function". 'return ()=>함수'는 component(함수)가 삭제될 때 실행됨
//   },[]); //()=>{} 함수(수행문) 반환

//   useEffect(hiFn,[]);
//   return <h1>Hello</h1>;  //이런식으로도 가능
// }

// function App(){
//   const [showing, setShowing] = useState(false);
//   const onClick=()=>setShowing(prev => !prev);
//   return (<div>
//     {showing ? <Hello/> : null}
//     <button onClick={onClick}>{showing ? "Hide": "Show"}</button>
//   </div>)
// }


// ★Todo list 만들기★
// function App(){
//   const [toDo, setToDo]=useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo (event.target.value);
//   console.log(toDo);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     console.log(toDo);
//     if(toDo===""){
//       return;
//     }
//     setToDos((currentArray)=>[toDo,...currentArray]);
//     //const값이어서 toDos.push 이렇게 직접적으로는 x
//     //setToDos + 화살표 함수 활용 ==> currentArray에 toDo 원소 추가 (currentArray가 인자이며 return 받음)
//     setToDo("");
//   }
//   console.log(toDos);
//   return (  //form+button => submit 기능 자동적용
//     <div>
//       <h1>Hello ToDos?({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input onChange = {onChange} value = {toDo} type="text" placeholder = "Write your to do..." ></input>
//         <button>Add To Do</button>
//       </form>
//       <hr></hr>
//       <ul>
//         {toDos.map((item,index)=>     
//         //map의 인자로써 화살표함수의 인자로 item과 index가 들어감. item과 index는 자동으로 
//         //해당 배열의 원소, 인덱스를 가리킴 (jsx에서 map함수를 썼을 때 한정)
//         <li key={index}>{item}</li>)} 
//       </ul>
//     </div>
//   )
// }

// // ★Coin Tracker★ (json화)
// function App(){
//   const [loading,setLoading]=useState(true);
//   const [coins,setCoins] = useState([]);
//   useEffect(()=>{   //useEffect의 또다른 사용법 => component시작 전에 딱 한번 정보 갖고오는 (fetch)용도
//     fetch("https://api.coinpaprika.com/v1/tickers").  //coin 정보 갖고옴(fetch : 인용)
//     then(response => response.json()).  //response를 json파일화
//     then((json)=>setCoins(json),
//     setLoading(false))  //loading창 생성 => 해제
//   },[])
//   return <div>
//     <h1>The Coins!</h1>
//     {loading?<strong>Loading...</strong>:null}  

//     <select>
//       {coins.map((coin)=><option>{coin.name} ({coin.symlbol}) : {coin.quotes.USD.price}</option>)}
//     </select>
//   </div>    //ul->select, li->option으로 태그를 바꾸는 방법도 있음
// }




// import Movie from "./components/Movie";
// //Movie App
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async () => {
//     const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
//     const json = await response.json();
//     setMovies(json.data.movies);
//     setLoading(false);
//   }
//   useEffect(() => {
//     getMovies()
//   })
//   console.log(movies);
//   // useEffect(()=>{
//   //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
//   //   .then ((response) => response.json()).then((json) => {
//   //     setMovies(json.data.movies);
//   //     setLoading(false)});
//   // },[]); //then말고 async-await을 사용하기 위함
//   return <div>
//     {loading ? <h1>Loading...</h1>
//       : movies.map((movie) => (
//         <Movie
//           key={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
//       ))}
//   </div>
//   //loading이 false면(로딩이 끝났다면) movies를 화면에 표시(by map함수)

// }



//React Router
//우선 react-router-dom 설치
import{
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

function App(){
  return <BrowserRouter> 
    <Routes>
      <Route path = "/movie/:id" element = {<Detail/>}></Route>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}/>
      <Route path="/happy" element={<h2>Happy</h2>}/>
    </Routes>
  </BrowserRouter>
} //이젠 swtich가 아니라 'Routes'로 지원하고, Route는 다음과 같은 형식을 따라야 함
// "/"는 홈화면으로 가는 루트(url뒤에 아무것도 안 붙음)
// "/movie"를 붙이면 Detail.js로 이동
// "/:id"를 붙이면 해당 movie 컴포넌트의 id표시 (Home.js에서 id property를 생성, movie.id를 대입해서 받아옴)
export default App;



//★ Publishing ★
// npm i gh-pages 실행

// git config --global user.name로 유저네임 확인

// git remote -v => local repository의 경로 확인 => https://username.github.io.reposityory(프로젝트이름).git


//package.json 파일 확인

//   "homepage": "https://halo-likelion.github.io/frontend" (ex)
// 추가



// // 
// "deploy" : "gh-pages -d build",
// "predeloy" : "npm run build" 
// 추가


// git remote add origin https://Orlim.github.io/react-for-beginners
// npm run deploy
