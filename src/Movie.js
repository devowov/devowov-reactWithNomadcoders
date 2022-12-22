 import PropTypes from "prop-types"

 function Movie({key,coverImg,title,rating,summary,genres}){
    return <div>
    <img src={coverImg} alt={title} />
    <h2>{title} _ {rating}</h2>
    <p>{summary}</p>
    <ul>
      {genres.map(genre => <li key={genre}>{genre}</li>)}
    </ul>
  </div>;
 }

 Movie.propTypes = {
  converImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
 }

 export default Movie;