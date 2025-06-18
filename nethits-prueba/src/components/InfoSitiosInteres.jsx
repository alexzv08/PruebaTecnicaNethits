import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const InfoSitiosInteres = () => {

    // La info de este componente entiendo que saldria de una API o de una Query
    const puntos = [
        {
            titulo: "Aeropuerto",
            descripcion: "Tenerife Sur Reina Sofía (a 26 km - 21 min)",
        },
        {
            titulo: "Núcleo urbano más cercano",
            descripcion: "Adeje (6 km)",
        },
        {
            titulo: "Playa más cercana",
            descripcion: "Playa de Ajabo (550 m)",
        },
        {
            titulo: "Parada de autobús más cercana",
            descripcion: "Líneas 471 y 473 (5 min)",
        },
    ];

    return (
        <div className="d-flex flex-column align-items-center">
            <ul className="list-unstyled w-100" style={{ maxWidth: "600px" }}>
                {puntos.map((item, index) => (
                    <li key={index} className="mb-0" style={{ fontSize: "15px" }}>
                        <span className="fw-bold text-dark ">{item.titulo}:</span><br />
                        <span className="text-dark ">{item.descripcion}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InfoSitiosInteres;