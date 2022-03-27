import React, { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import Movie from "./Movie";
import MovieCharts from "./MovieCharts";
const Movies = () => {
  const { appState } = useContext(AppContext);
  const { movies } = appState;

  return (
    <>
      <MovieCharts/>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-row justify-start flex-wrap sm:py-12">
        {movies.map((movie, index) => {
          return (
            <Movie
              key={index}
              id={movie.id}
              title={movie.title}
              sinopsis={movie.sinopsis}
              director={movie.director}
              releaseDate={movie.releaseDate}
              upVotes={movie.upVotes}
              downVotes={movie.downVotes}
            />
          );
        })}
      </div>
    </>
  );
};
export default Movies;
