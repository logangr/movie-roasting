import React, { useContext,useState } from "react";
import { AppContext } from "../AppContextProvider";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    //El uso es directo: podemos acceder al estado o a las acciones con una sola linea. El resto igual.
    // Aqui usamos solo las acciones (aunque el estado puede colorear!)
    const { appState, appActions } = React.useContext(AppContext)
    return (
        <nav>
            <div className="container mx-auto px-6 py-2 flex justify-between items-center">
                <div>
                <a className="font-bold text-2xl lg:text-4xl alternative-font" href="#">
                    Movie Roasting
                </a>
                <div className="block lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}
                        className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Movie Roasting</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                </div>
                <div className={(menuOpen ? "flex flex-grow items-center" : "hidden")+" lg:block"}>
                    <ul className={(menuOpen ?"flex flex-col list-none":"inline-flex")} >
                        <li className="nav-item"><a className="px-4 font-bold" href="/">Home</a></li>
                        <li className="nav-item">
                            <a className="px-4 hover:text-gray-800" href="#" onClick={()=>appActions.setPage1()}>Hero</a>
                        </li>
                        <li className="nav-item">
                            <a className="px-4 hover:text-gray-800" href="#" onClick={()=>appActions.setPage2()}>Peli</a>
                        </li>
                        <li className="nav-item">
                            <a className="px-4 hover:text-gray-800" href="#" onClick={()=>appActions.setPage3()}>Counter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
}

export default Header