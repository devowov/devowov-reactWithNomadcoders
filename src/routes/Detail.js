import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        setMovie(json.data.movie);
    };
    
    useEffect(()=>{
        getMovie();
    },[])
    return (
    <div>
        <h1>Detail</h1>
        <h2>{movie.title_long}</h2>
        <img src={movie.medium_cover_image} alt={movie.title} />
        <div>
            <div style={{float:'left', width:'50%'}}>
                <h3>Year</h3>
                <p>{movie.year}</p>
            </div>
            <div style={{float:'left', width:'50%'}}>
                <h3>rating</h3>
                <p>{movie.rating}</p>
            </div>
        </div>
    </div>
    );
}

export default Detail;