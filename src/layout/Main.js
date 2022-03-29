import React, {useContext} from "react";
import {AppContext} from "../AppContextProvider";
import MovieCommentaries from "../components/MovieCommentaries";
import Hero from "../components/Hero";
import Movies from "../components/Movies";
//Main es el nuevo componente para renderizar el cuerpo de la aplicacion, dependiendo del estado
//Si quisieramos preservar el estado, utilizariamos localStorage en el context provider
const Main = () => {
    const {appState}  = useContext(AppContext);
    const {page,movieToShow} = appState;
    console.log(`FROM MAIN: Current page value is: ${page}`)
    console.log(appState)
    let renderingPart = <div>Empty component</div>;
    switch (page){
        case 1:
            renderingPart = <Movies/>
            break;
        case "moviePage":
            renderingPart = <MovieCommentaries movieToShow={movieToShow}/>
            break;
        default:
            renderingPart = <Hero/>
            break;
    }
    return ( <div>{renderingPart}</div>)
}

export default Main