import { Link } from "react-router-dom";
import type { Movie } from "../../types";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link to={`/movies/${id}`} className="group block w-full">
      <div className="relative overflow-hidden rounded-xl bg-gray-900 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div className="relative h-[400px] overflow-hidden">
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://placehold.co/400x600/1a1a1a/ffffff.png?text=No+Image`
            }
            alt={title}
            className="object-cover object-center transition-transform duration-300"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/80 px-2 py-1">
            <img src="/icons/star.png" alt="Star" />
            <span className="text-md font-semibold text-white">
              {vote_average ? (vote_average / 2).toFixed(1) : "N/A"}
            </span>
          </div>
        </div>

        <div className="bg-gray-900 p-5">
          <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
            {title}
          </h3>

          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-400">
              {release_date ? new Date(release_date).getFullYear() : "Unknown"}
            </p>
            <span className="rounded-md bg-gray-800 px-2 py-0.5 text-[10px] font-medium tracking-wide text-gray-400 uppercase">
              Movie
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
