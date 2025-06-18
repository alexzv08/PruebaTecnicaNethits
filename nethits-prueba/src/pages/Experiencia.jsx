// src/pages/Experiencia.jsx
import React from 'react';
import HeaderNav from '../components/HeaderNav';
import ImgExperiencia from '../assets/section_experience.jpg'

const Experiencia = () => {

    return (
        <div>
            {/* Header fijo */}
            <HeaderNav />
            {/* Contenido de la vista */}
            <div className="mt-3 mx-3 fw-semibold fs-1 text-dark">
                <p>Experiencia</p>

                {/* Imagen, opcional: cambia la ruta por la imagen real */}
                <img src={ImgExperiencia} alt="Imagen experiencia" className="img-fluid my-3 d-block mx-auto" />

                {/* Lista de elementos */}
                <ul className="fs-4 list-unorder-unstyled d-block mx-auto">
                    <li>
                        <a href="#" className="text-success text-decoration-none fs-5">
                            Excursiones
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-success text-decoration-none fs-5">
                            Actividades
                        </a>
                    </li>
                    <li>
                        <a href="/puntos-de-interes" className="text-success text-decoration-none fs-5 cursor-pointer">
                            Puntos de interés
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Experiencia;