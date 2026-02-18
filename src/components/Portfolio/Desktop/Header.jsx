import PropTypes from "prop-types"

function PortfolioItemHeader({ projectName, projectType }){
    return (
        <>
            <div className="text-start mb-3 d-flex justify-content-start">
                <h3 className="project-name text-uppercase pe-3 border-end border-2">{ projectName }</h3>
                <p className="text-lowercase ms-3 pt-1">{ projectType }</p>
            </div>
        </>
    )
}

PortfolioItemHeader.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectType: PropTypes.string.isRequired,
}

export default PortfolioItemHeader;