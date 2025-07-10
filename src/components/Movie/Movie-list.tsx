import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import useFetch from "../../services/useFetch";
import MovieCard from "./MovieCard";
import type { Movie } from "../../types";

const MovieList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  window.scrollTo(0, 0);
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  const {
    data: searchMovie,
    loading: searchMoviesLoading,
    error: searchMoviesError,
    reset,
    refetch: loadMovies,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const resultsToShow = searchQuery.trim() ? searchMovie : movies;

  return (
    <section className="relative z-10 bg-[#F6F7FB] pt-14 pb-10 md:pt-20 md:pb-32">
      <div className="container mx-auto min-h-screen max-w-[1200px] px-4">
        <div className="mb-10 flex flex-col items-center text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Movie App</h1>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter movie name..."
            className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-3 text-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
          />
        </div>

        <h2 className="mb-6 text-center text-3xl font-semibold text-gray-700">
          Movies List
        </h2>

        {moviesLoading || searchMoviesLoading ? (
          <p className="text-center font-medium text-blue-500">
            Loading movies...
          </p>
        ) : moviesError || searchMoviesError ? (
          <p className="text-center font-medium text-red-500">
            Error: {moviesError || searchMoviesError}
          </p>
        ) : resultsToShow &&
          resultsToShow.length === 0 &&
          searchQuery.trim() ? (
          <p className="mt-10 text-center font-medium text-gray-500">
            No movies found with name {searchQuery}.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {resultsToShow?.map((movie: Movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { MovieList };
