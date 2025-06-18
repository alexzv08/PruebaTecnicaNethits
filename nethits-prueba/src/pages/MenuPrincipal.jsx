// import { useNavigate } from "react-router-dom";
import LogoBestHotel from "../assets/logo_best_hotels.png";
import MenuButton from "../components/MenuButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faMugSaucer, faBath, faRocket} from '@fortawesome/free-solid-svg-icons';


function MenuPrincipal() {

    return (
        <div className="bg-image vh-100 d-flex flex-column">
            {/* Desplegable del idioma */}
            <div className="position-absolute top-0 end-0 m-2">
                <select className="form-select form-select-sm">
                <option value="es">ES</option>
                <option value="en">EN</option>
                </select>
            </div>
            {/* Logo de la empresa */}
            <div className="d-flex justify-content-center align-items-center mt-0 mb-2">
                <img src={LogoBestHotel} alt="Logo Empresa" className="img-fluid"/>
            </div>
            
            {/* Botones de navegación */}
            <div className="text-center p-5 rounded-3 bg-orange-soft  mx-auto text-white fs-1 fw-bold mx-auto" style={{ width: "90%" }}>
                <div className="">Bienvenidos al Portal del Huésped</div>
                <div className="d-flex flex-column justify-content-center align-items-center mt-3 gap-2">
                    
                    <MenuButton icon={faHotel} text="ESPACIOS" />
                    <MenuButton icon={faMugSaucer} text="GASTRONOMÍA" />
                    <MenuButton icon={faBath} text="BIENESTAR" />
                    <MenuButton icon={faRocket} text="EXPERIENCIA" to="/experiencia"/>
                    {/* <button className="btn btn-light mt-1 w-100 py-3 px-3 text-start d-flex align-items-center " style={{ maxWidth: '300px' }} >
                        <FontAwesomeIcon icon={faHotel} size="lg"  className="me-2"/>
                        ESPACIOS
                    </button>
                    <button className="btn btn-light mt-1 w-100 py-3 px-3 text-start  d-flex align-items-center" style={{ maxWidth: '300px' }}>
                        <FontAwesomeIcon icon={faMugSaucer} size="lg"  className="me-2"/>
                        GASTRONOMÍA
                    </button>
                    <button className="btn btn-light mt-1 w-100 py-3 px-3 text-start  d-flex align-items-center" style={{ maxWidth: '300px' }}>
                        <FontAwesomeIcon icon={faBath} size="lg"  className="me-3"/>
                        BIENESTAR
                    </button>
                    <button className="btn btn-light mt-1 w-100 py-3 px-3 text-start  d-flex align-items-center" style={{ maxWidth: '300px' }}>
                        <FontAwesomeIcon icon={faRocket} size="lg"  className="me-3"/>
                        EXPERIENCIA
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export default MenuPrincipal;
