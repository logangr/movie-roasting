import "./Hero.css";
import React, { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";
const Hero = () => {
  const { appActions } = useContext(AppContext);
  return (
    <div className="py-20 bg-amber-600	">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">
          Movie Roasting: A criticar pelis!!!
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
          Visita el listado de pelis y ponlas a parir!
        </h3>

        <button onClick={() => appActions.setPage1()} class="beat-button bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded shadow mb-4">
          Roast Movies!!!
        </button>

        <p className="font-bold text-white mb-2">
          Alberto, no sé me ocurrió nada mas que fuera un poco diferente y que
          pudiera terminar a tiempo. Lo intenté xD
          <br />
        </p>
        <p className="font-bold text-white">
          <strong>En esta APP pudes ver:</strong>
        </p>
        <ul className="font-bold text-white">
          <li>- El Hero como Homepage</li>
          <li>
            - El listado de pelis para dar SOLO VOTOS NEGATIVOS. Tiene un
            coponente de barras a modo de ranking, según votos
          </li>
          <li>
            - Se puede clicar en el título de la peli para ver los comentarios si hay
          </li>
          <li>- Los datos se recojen de mi api en github</li>
          <li>- //TODO: Añadir comentarios (negativos...) en una peli</li>
          <li>- //TODO: Sincronizar cambios con la API REST</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
