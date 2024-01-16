//Pagina de Inicio con la lista de encuestas disponibles

import React from "react";
import { Link } from "react-router-dom";

export default function Inicio() {
    return (
        <div>
            <h1>Encuestas</h1>
            <ul>
                <li>
                    <Link to="/encuestas/1">Encuesta 1</Link>
                </li>
                <li>
                    <Link to="/encuestas/2">Encuesta 2</Link>
                </li>
            </ul>
        </div>
    );
}

