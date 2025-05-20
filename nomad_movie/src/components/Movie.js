import PropTypes from 'prop-types';
import {Link} from "react-router-dom";  //Link는 default가 안 깔려있어서 중괄호 필요
import styles from "./Movie.module.css";

                   
function Movie({ id, coverImg, title, year, summary, genres }) { //괄호 안 정보들을 paraent compoonent(App.js)로부터 받아옴
    return (
      <div className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.movie__img} />
        <div>
          <h2 className={styles.movie__title}>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <h3 className={styles.movie__year}>{year}</h3>
          <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
          <ul className={styles.movie__genres}>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

//인자 movie(item)를 통해서 <div></div>를 출력. react js에서 요구하는 key는 movie.id, 아이템은 movie.title로ㅇㅇ
//그 외 movie의 다른 멤버들은 fetch한 링크를 통해서 확인
//movie.genres => array이므로 map함수 다시 활용
//<ul>map=><li></li></ul>이런 식으로도 활용할 수 있고, key는 g(genre)자체가 고유값이어서 g를 key로 써도 됨
//img에서 alt는 그냥 key처럼 권장하는 속성같은 것

//Link 사용 => 브라우저 새로고침 없이 다른 url로 연결(이동의 개념이 아니라 출력의 개념이기 때문)

//웹의 문자열 "ABCD"를 복사후 console에서 "ABCD".length해주면 4 출력

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;