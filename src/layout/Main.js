import React, {useContext} from "react";
import {AppContext} from "../AppContextProvider";
import Counter from "../components/Counter";
import Movie from "../components/Movie";
import Hero from "../components/Hero"
//Main es el nuevo componente para renderizar el cuerpo de la aplicacion, dependiendo del estado
//Si quisieramos preservar el estado, utilizariamos localStorage en el context provider
const Main = () => {
    const {appState}  = useContext(AppContext);
    const {page} = appState;
    console.log(`Current page value is: ${page}`)
    console.log(appState)
    let renderingPart = <div>Empty component</div>;
    switch (page){
        case 1:
            renderingPart = <Hero/>
            break;
        case 2:
            renderingPart = <Movie/>
            break;
        case 3:
            renderingPart = <Counter/>
            break;
        default:
            renderingPart = <Hero/>
            break;
    }
    return ( <div>{renderingPart}</div>)
}

export default Main