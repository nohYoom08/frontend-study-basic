import Movie from "../components/Movie"
import { useState, useEffect } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
    const json = await response.json(); //await => json파일 형식화 과정을 비동기화해줌
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies()
  })
  console.log(movies);
  // useEffect(()=>{
  //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
  //   .then ((response) => response.json()).then((json) => {
  //     setMovies(json.data.movies);
  //     setLoading(false)});
  // },[]); //then말고 async-await을 사용하기 위함
  return <div>
    {loading ? <h1>Loading...</h1>
      : movies.map((movie) => (
        <Movie
          key={movie.id} 
          id = {movie.id}
          coverImg={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary} 
          genres={movie.genres} />
      ))}
  </div>
  //loading이 false면(로딩이 끝났다면) movies를 화면에 표시(by map함수)

}

function App() {
  return null;
}

export default Home;