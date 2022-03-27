import React, { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import "./Movie.css";
const Movie = (props) => {
  const { appActions } = useContext(AppContext)
  return (
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <div className="h-60 overflow-visible w-1/3">
              <img className="rounded-3xl" src={`https://picsum.photos/seed/${props.title}/400/600`} alt="movie paper"/>
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">{props.title}</h2>
                <button onClick={()=>appActions.downVoteMovie(props.id)} className="bg-red-400 font-bold rounded-xl p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="downvote h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                </svg>
                  {props.downVotes}
                </button>
            </div>
            <div>
              <div className="text-sm text-gray-400">Peli</div>
              <div className="text-lg text-gray-800">{props.releaseDate}</div>
            </div>
              <p className=" text-gray-400 max-h-40 overflow-y-hidden">{props.sinopsis}</p>
            <div className="flex text-2xl font-bold text-a">{props.director}</div>
          </div>
    
        </div>
      </div>
  )
}

export default Movie;
