import React from "react";
import HeaderNav from "../components/HeaderNav";
import InfoSitiosInteres from "../components/InfoSitiosInteres";
import ImgPuntosInteres from "../assets/section_things_to_see.jpg";

const PuntosDeInteres = () => {

    return (
        <div>
            <HeaderNav />

            <div className="mt-3 mx-3 fw-semibold fs-1 text-dark">
                <p>Experiencia</p>

                {/* Imagen, opcional: cambia la ruta por la imagen real */}
                <img src={ImgPuntosInteres} alt="Imagen experiencia" className="img-fluid my-3 d-block mx-auto" />

                {/* Lista de elementos */}
                <InfoSitiosInteres />
            </div>
        </div>
    );
};

export default PuntosDeInteres;