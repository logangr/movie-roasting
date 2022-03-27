import React, { useContext } from "react";
import { AppContext } from "../AppContextProvider";
const MovieCharts = () => {
  const { appState } = useContext(AppContext);
  const { movies } = appState;

  const moviesByDownVotes = [...movies];
  moviesByDownVotes.sort((a, b) => (a.downVotes < b.downVotes ? 1 : -1));

  const cssClasses = ["bg-red-800","bg-red-700","bg-red-600","bg-red-500","bg-red-400","bg-red-300","bg-red-200"]

  return (
    <div className="sticky top-0 z-10 bg-gray-100 py-6 flex flex-col sm:py-12">
      <div className="container mx-auto px-6">
        {moviesByDownVotes.map((movie, index) => {
          return (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium">{movie.title}</span>
                <span className="text-sm font-medium">
                  {movie.downVotes} / 50
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`${cssClasses[index > 6 ? 6 : index]} h-2.5 rounded-full`}
                  style={{ width: (movie.downVotes / 50) * 100 + "%" }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MovieCharts;
