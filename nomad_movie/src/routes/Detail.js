import {useParams} from "react-router-dom";
import {useEffect} from "react";

function Detail(){
    const {id} = useParams();   
    //url의 상세정보를 알려줌(ex) URL이 http://example.com/item/5일 때, useParams()를 사용하면 id 변수에 값 5가 저장)
    const getMovie = async()=>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        console.log(json);
    };
    useEffect(()=>{
        getMovie();
    },[]);    
    return <h1>Detail</h1>;
}
export default Detail;