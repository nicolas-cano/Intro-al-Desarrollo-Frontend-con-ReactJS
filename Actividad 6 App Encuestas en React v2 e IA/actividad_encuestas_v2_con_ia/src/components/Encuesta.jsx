import { useParams, Link } from "react-router-dom";

export default function Encuesta() {
    const { id } = useParams();

    return (
        <div>
            <h1>Encuesta {id}</h1>
            <Link to="/encuestas">Volver</Link>
        </div>
    )
}
