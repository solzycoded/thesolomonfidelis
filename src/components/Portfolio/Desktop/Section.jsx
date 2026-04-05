import PortfolioDesktopItem from "./Item";
import PropTypes from 'prop-types';
import { memo } from "react";

function PortfolioDesktop({ portfolio }){
    return (
        <>

            {/* desktop */}
            <div className="portfolio-container container-fluid p-0" data-aos="fade-up" data-aos-delay="100">
                {
                    portfolio.map((value, i) => {
                        return <PortfolioDesktopItem portfolioItem={ value } key={ i } />
                    })
                }
            </div>

        </>
    )
}

PortfolioDesktop.propTypes = {
    portfolio: PropTypes.array.isRequired
}

export default memo(PortfolioDesktop);