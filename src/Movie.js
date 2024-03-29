import ReviewForm from "./ReviewForm";
//the src attribute of the image = base URL appended with the poster_path attribute of the movie object.
// alt attribute provides alternative text for the image
// the movie title is rendered within an <h2> heading element
//movie overview rendered within a <p> paragraph element.
//Rendered ReviewForm component allows users to submit reviews for the movie
const Movie = ({ movie }) => {
  return (
    <li style={{ display: 'flex', alignItems: 'center' }}>
    <img
      className="img-thumbnail"
      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      alt={movie.title}
      style={{ marginLeft: '20px' }} // Adjust spacing as needed
    />
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <ReviewForm />
    </div>
  </li>
  );
};
export default Movie;