import React, {useContext} from "react";
import {AppContext} from "../AppContextProvider";
import Counter from "../components/Counter";
import Movie from "../components/Movie";
import Movies from "../components/Movies";
//Main es el nuevo componente para renderizar el cuerpo de la aplicacion, dependiendo del estado
//Si quisieramos preservar el estado, utilizariamos localStorage en el context provider
const Main = () => {
    const {appState}  = useContext(AppContext);
    const {page,count} = appState;
    console.log(`FROM MAIN: Current count value is: ${count}`)
    console.log(`FROM MAIN: Current page value is: ${page}`)
    console.log(appState)
    let renderingPart = <div>Empty component</div>;
    switch (page){
        case 1:
            renderingPart = <Movies/>
            break;
        case 2:
            renderingPart = <Movie/>
            break;
        case 3:
            renderingPart = <Counter/>
            break;
        default:
            renderingPart = <Movies/>
            break;
    }
    return ( <div>{renderingPart}</div>)
}

export default Main