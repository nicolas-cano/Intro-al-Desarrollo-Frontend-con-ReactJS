//Pagina para notificar que la ruta no existe

import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <Link to="/">Volver</Link>
        </div>
    );
}