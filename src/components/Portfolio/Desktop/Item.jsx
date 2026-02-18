import PortfolioDesktopCarousel from "./Carousel"
import PortfolioItemHeader from "./Header"
import ProjectInfoItem from "./ProjectInfoItem"

import PropTypes from "prop-types"

function PortfolioDesktopItem({ portfolioItem }){
    return (
        <>

            <div className="portfolio-item row">
                <div className="col-12">
                    {/* header */}
                    <PortfolioItemHeader projectName={ portfolioItem.name } projectType={ portfolioItem.type } />
                </div>

                <div className="col-12 col-md-7 mb-3">
                    {/* carousel */}
                    <PortfolioDesktopCarousel images={ portfolioItem.images } tag={ portfolioItem.name } />
                </div>

                {/* details */}
                <div className="col-12 col-md-5">
                    <div className="container-fluid project-details rounded">
                        <h4 className="fw-bold border-bottom border-2 pb-2 portfolio-item-section-head">Project Information</h4>
                        <div>
                            <ProjectInfoItem head="type" body={ portfolioItem.applicationType } />
                            <ProjectInfoItem head="front-end technologies" body={ portfolioItem.frontEnd } />
                            <ProjectInfoItem head="back-end technologies" body={ portfolioItem.backEnd } />
                            <ProjectInfoItem head="Deployment" body={ (portfolioItem.deployment.deployed=="yes" ? `It was deployed to ${portfolioItem.deployment.where}. ${portfolioItem.deployment.details}` : "Nil") } />
                            <ProjectInfoItem head="time-frame" body={ portfolioItem.timeFrame } />
                            <ProjectInfoItem head="repository" body={ `<a href="${portfolioItem.repository}" target="_blank" className="app-color">${portfolioItem.name} repo</a>` } />
                            <ProjectInfoItem head="URL" body={ `<a href="${portfolioItem.url}" target="_blank" className="app-color">${portfolioItem.name}</a>` } />
                        </div>
                    </div>
                </div>

                {/* description */}
                <div className="col-12">
                {/* border-bottom border-2  */}
                    <h4 className="fw-bold portfolio-item-section-head">About { portfolioItem.name }</h4>
                    <p>{ portfolioItem.description }</p>
                </div>
            </div>
            <hr />
        </>
    )
}

PortfolioDesktopItem.propTypes = {
    portfolioItem: PropTypes.object.isRequired
}

export default PortfolioDesktopItem;