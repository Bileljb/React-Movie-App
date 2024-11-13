import { useParams } from "react-router-dom";

function MovieDetails({ moviedata }) {
    const { id } = useParams();
    const movie = moviedata.find((movie) => movie.id === parseInt(id));

    if (!movie) return <p>Movie not found</p>;

    return (
        <div className="movie-details">
            <div className="movie-header">
                <img className="movie-poster" src={movie.posterUrl} alt={`${movie.title} Poster`} />
                <div className="movie-info">
                    <h2 className="movie-title">{movie.title}</h2>
                    <p className="movie-rating">⭐ {movie.rate}</p>
                </div>
            </div>
            <div className="movie-description">
                <h3>Description</h3>
                <p>{movie.description}</p>
            </div>
            {movie.trailer && (
                <div className="movie-trailer">
                    <h3>Watch Trailer</h3>
                    <iframe
                        width="100%"
                        height="315"
                        src={movie.trailer}
                        title={`${movie.title} Trailer`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
}

export default MovieDetails;
