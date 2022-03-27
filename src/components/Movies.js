import React, { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import Movie from "./Movie";
const Movies = () => {
  const { appState } = useContext(AppContext);
  const { movies } = appState;

  // useEffect(()=>{
  //     const fetchData = async () => {
  //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //         const currentData = await response.json()
  //         appActions.loadMovies(currentData)
  //         console.log("FETCH CALLED")
  //     }
  //     fetchData()
  // },[])

  return (
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
  );
};
export default Movies;
