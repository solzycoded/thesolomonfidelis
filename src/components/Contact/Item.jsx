import PropTypes from 'prop-types';

function ContactItem({ icon, link, title }){
    return (
        <div className="col-12 col-lg-2 col-md-3 col-sm-4 mt-2 mb-1">
            <a href={link} target="_blank" className="text-center">
                <div className="fs-1">
                    <i className={`bi bi-${icon}`}></i>
                </div>
                <p className="lead mt-2 text-white fw-bold">{title}</p>
            </a>
        </div>
    )
}

ContactItem.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default ContactItem;