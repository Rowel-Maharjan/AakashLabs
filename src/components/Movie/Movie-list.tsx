/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchMovies } from "../../services/api";
import useFetch from "../../services/useFetch";

const MovieList = () => {
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  console.log(movies);

  console.log(movies);

  return (
    <div>
      <div>Movie List</div>
      {movies?.map((movie: any) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export { MovieList };
