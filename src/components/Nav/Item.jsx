import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function NavItem({ icon, link, title }){
    return (
        <>
            <li>
                <Link to={link} className="nav-link scrollto">
                    <i className={`bi bi-${icon}`}></i> <span>{ title }</span>
                </Link>
            </li>
        </>
    )
}

NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default NavItem;