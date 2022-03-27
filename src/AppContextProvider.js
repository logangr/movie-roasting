import React, { useReducer, createContext } from "react";

const AppContext = createContext();

const initialState = {
    page: 0,
    movies: []
}

const fetchData = async () => {
    const response = await fetch('https://my-json-server.typicode.com/logangr/j-source/films')
    const currentData = await response.json()
    initialState.movies = currentData
}
fetchData()


//Serializamos las claves de nuestra aplicacion para no tener fallos
const ACTIONS = {
    SET_MENU_PAGE: "setMenuPage",
    LOAD_MOVIES: "loadMovies",
    DOWN_VOTE_MOVIE: "downVoteMovie"
}
// Aqui esta el turron! El reducer. Switch entre acciones que modifica parte del estado
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_MENU_PAGE:
            return {...state, page: action.payload}
        case ACTIONS.LOAD_MOVIES:
            return {...state, movies: action.payload}
        case ACTIONS.DOWN_VOTE_MOVIE:
            return downVoteMovie(action.payload, state)
        default:
            return state
    }
}

const downVoteMovie = (movieId, state) => {
    return { 
        ...state, 
        movies: state.movies.map(
            (movie) => movie.id === movieId ? {...movie, downVotes: movie.downVotes + 1}
                                    : movie
        )
     }
}


//AppProvider sera nuestro componente magico! Hara todo lo necesario para las acciones
// En esta clase, tendremos toda la logica de aplicacion
const AppProvider = ({ children }) => {
    //Aqui invocamos el reducer, nos trae el estado y el dispatch para lanzar eventos
    const [appState, dispatch] = useReducer(reducer, initialState);
    //Como no queremos usar dispatch fuera de la aplicacion, vamos a hacer un hub de funciones
    // Usamos payload como un elemento dinamico -> es un concepto redux
    const appActions = {
        setPage1: () => {
            dispatch({type: ACTIONS.SET_MENU_PAGE, payload: 1})
            console.log("page 1")
        },
        setPage2: () => {
            console.log("page 2")
            dispatch({type: ACTIONS.SET_MENU_PAGE, payload: 2})
        },
        setPage3: () => {
            console.log("page 3")
            dispatch({type: ACTIONS.SET_MENU_PAGE, payload: 3})
        },
        loadMovies: (data) => {
            dispatch({type: ACTIONS.LOAD_MOVIES, payload: data})
        },
        downVoteMovie: (data) => {
            dispatch({type: ACTIONS.DOWN_VOTE_MOVIE, payload: data})
        }
    }
    //Esta function envia como valor un objeto json, con el estado y las acciones que queremos usar externas
    return (
        <AppContext.Provider value={{
            appState: appState,
            appActions: appActions,
        }}>
            {children}
        </AppContext.Provider>
    );
};
//Y lo mas importante, solo exportamos el componente y el contexto para usar useContext
export { AppProvider, AppContext };