import { useEffect } from "react";

const MovieList = () => {
  const fetchMovie = async () => {
    const url = "https://imdb236.p.rapidapi.com/api/imdb/top250-movies";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return <div>MovieList</div>;
};

export { MovieList };

//   "https://imdb236.p.rapidapi.com/api/imdb/autocomplete?query=break";
