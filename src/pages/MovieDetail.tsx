import { useParams, useNavigate } from "react-router-dom";
import { fetchMoviesDetails } from "../services/api";
import useFetch from "../services/useFetch";
import { ChevronLeft } from "lucide-react";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  window.scrollTo(0, 0);

  const {
    data: movie,
    error,
    loading,
  } = useFetch(() => fetchMoviesDetails(id as string));

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950">
        <div className="text-xl text-white">Loading...</div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-white">
            Movie Not Found
          </h1>
          <p className="mb-6 text-gray-400">
            {error || "The movie you are looking for does not exist."}
          </p>
          <button
            onClick={() => navigate("/")}
            className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : `https://placehold.co/1920x1080/1a1a1a/ffffff.png?text=No+Backdrop`
          }
          alt={movie.title}
          className="object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 cursor-pointer rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="relative z-10 container mx-auto -mt-32 px-4 pb-28">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Poster */}
          <div className="flex-shrink-0">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `https://placehold.co/400x600/1a1a1a/ffffff.png?text=No+Poster`
              }
              alt={movie.title}
              className="h-auto w-80 rounded-xl shadow-2xl"
            />
          </div>

          <div className="flex-1 text-white">
            <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
              {movie.title}
            </h1>

            {movie.tagline && (
              <p className="mb-6 text-xl text-gray-300 italic">
                {movie.tagline}
              </p>
            )}

            <div className="mb-6 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <img src="/icons/star.png" alt="Star" className="h-5 w-5" />
                <span className="text-lg font-semibold">
                  {movie.vote_average
                    ? (movie.vote_average / 2).toFixed(1)
                    : "N/A"}
                </span>
              </div>
              <span className="text-gray-400">
                {movie.release_date
                  ? new Date(movie.release_date).getFullYear()
                  : "Unknown"}
              </span>
              {movie.runtime && (
                <span className="text-gray-400">{movie.runtime} min</span>
              )}
            </div>

            {movie.genres && movie.genres.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Overview</h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {movie.overview || "No overview available."}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Status</h3>
                <p className="text-gray-400">{movie.status || "Unknown"}</p>
              </div>

              {movie.budget > 0 && (
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Budget</h3>
                  <p className="text-gray-400">
                    ${movie.budget.toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieDetail };
