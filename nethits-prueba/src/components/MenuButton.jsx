import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const MenuButton = ({ icon, text, to }) => {
    return (
        <Link
            to={to}
            className="btn btn-light w-100 py-3 px-3 text-start d-flex align-items-center"
            style={{ maxWidth: "300px" }}
            >
            <FontAwesomeIcon icon={icon} size="xl" className="me-3" />
            <span className="fw-semibold fs-3 text-dark">{text}</span>
        </Link>
    );
};

export default MenuButton;
