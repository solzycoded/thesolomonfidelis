import PortfolioDesktop from "../components/Portfolio/Desktop/Section";
import data from "../util/data"

import "../assets/css/portfolio.css"

function Portfolio(){
    const portfolio = data.portfolio();

    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>I've worked on a few projects, both personal, academic and client projects over the past 4 years. Find details of the projects below.</p>
                </div>

                <PortfolioDesktop portfolio={ portfolio } />
                
                {/* mobile */}
            </div>
        </section>
    )
}

export default Portfolio;