import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail(){
    const [loading,setLoading] = useState(true);
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    
    useEffect(()=>{
        getMovie();
    },[])
    return (<div className={styles.loader}>
        {loading ? (
            
              <span>Loading...</span>
            
          ) :(
            <div>
            <h1>Detail</h1>
            <h2>{movie.title_long}</h2>
            <img src={movie.medium_cover_image} alt={movie.title} className={styles.movie__img}/>
            <div className={styles.movie__info}>
                <div>
                    <h3>Year</h3>
                    <p>{movie.year}</p>
                </div>
                <div>
                    <h3>Rating</h3>
                    <p>{movie.rating}</p>
                </div>
                <div>
                    <h3>Download Count</h3>
                    <p>{movie.download_count}</p>
                </div>
            </div>
            <div className={styles.movie__desc}>
                <h3>Description Intro</h3>
                <p>{movie.description_intro}</p>
            </div>
            
        </div>)}
        </div>
    );
}

export default Detail;