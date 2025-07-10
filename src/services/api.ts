export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2JmMWFkMTE1OGE5NTZjYTdiNTRmZWRlYjgzYzQ2MiIsIm5iZiI6MTc0NjYxODA3Mi4wMTUsInN1YiI6IjY4MWI0NmQ4YjhjOWFiZDRiNDlmMDQ4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3eMpiQlxDSwaDpDfSuuSxrfnMX_wlvUXxsqQddNmi-U",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2JmMWFkMTE1OGE5NTZjYTdiNTRmZWRlYjgzYzQ2MiIsIm5iZiI6MTc0NjYxODA3Mi4wMTUsInN1YiI6IjY4MWI0NmQ4YjhjOWFiZDRiNDlmMDQ4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3eMpiQlxDSwaDpDfSuuSxrfnMX_wlvUXxsqQddNmi-U`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await response.json();
  return data.results;
};

export const fetchMoviesDetails = async (movieId: string) => {
  try {
    const endpoint = `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`;
    const response = await fetch(endpoint, {
      method: "GET",
      headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
