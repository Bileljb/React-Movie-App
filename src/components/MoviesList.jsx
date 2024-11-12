import MovieCard from "./MoviCard";

function MoviesList({ moviedata, searchQuery }) {
  const filteredMovies = moviedata.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="movies-grid-container">
      {filteredMovies.length > 0 ? (
        filteredMovies.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={movie.posterUrl}
            rate={movie.rate}
          />
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default MoviesList;
