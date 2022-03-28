import React, { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import Movie from "./Movie";
const MovieCommentaries = (props) => {
  const { appState } = useContext(AppContext);
  const { movies,commentaries } = appState;

  const movie = movies.find(movie => movie.id === props.movieToShow);

  const movieCommentaries = commentaries.filter((com) =>
    com.filmId === movie.id
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-start flex-wrap sm:py-12">
      <div className="container mx-auto px-6">
      <Movie
        id={movie.id}
        title={movie.title}
        sinopsis={movie.sinopsis}
        director={movie.director}
        releaseDate={movie.releaseDate}
        upVotes={movie.upVotes}
        downVotes={movie.downVotes}/>

      <div className="py-3 sm:max-w-xl sm:mx-auto">
        {movieCommentaries.map((commentary, index) => {
          return (
            <div className="flex relative mt-6" key={index}>
              <i className="fas fa-globe text-grey-dark"></i>
              <div className=" ml-2 "> 
                <p className="font-medium text-sm text-grey-darkest font-semibold">{new Date(commentary.date).toLocaleDateString()}</p>
                <small className="text-grey-dark text-xl ">{commentary.text}</small>
              </div>
              <i className="fas fa-toggle-on fa-2x ml-auto text-blue"></i>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};
export default MovieCommentaries;