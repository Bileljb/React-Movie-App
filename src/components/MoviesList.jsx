import { Link } from "react-router-dom";
import MovieCard from "./MoviCard";

function MoviesList({ moviedata, searchQuery }) {
    const filteredMovies = moviedata.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="movies-grid-container">
            {filteredMovies.length > 0 ? (
                filteredMovies.map((movie) => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <MovieCard
                            title={movie.title}
                            poster={movie.posterUrl}
                            rate={movie.rate}
                        />
                    </Link>
                ))
            ) : (
                <p>No movies found.</p>
            )}
        </div>
    );
}

export default MoviesList;
