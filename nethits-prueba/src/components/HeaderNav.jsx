// src/components/MenuButton.jsx
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconoEmpresa from "../assets/icon_best_hotels.png";
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const HeaderNav = () => {

    const navigate = useNavigate();
    
    return (
        <div className="header-page d-flex justify-content-between align-items-center px-3 py-2 bg-dark text-white">
            {/* Botón de volver */}
            <FontAwesomeIcon
                icon={faChevronLeft}
                size="lg"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(-1)}
            />

            {/* Icono menú (derecha) */}
                <img src={IconoEmpresa} alt="Icono Empresa" style={{ height: '30px', cursor: 'pointer' }} onClick={() => navigate('/')}/>
        </div>
    );
};

export default HeaderNav;
