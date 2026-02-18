import CarouselItem from "./CarouselItem"
import PropTypes from "prop-types"

function PortfolioDesktopCarousel({ images, tag }){
    return (
        <>

            <div id={ tag } className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {
                        images.map((value, i) => {
                            return <button type="button" data-bs-target={ `#${tag}` } data-bs-slide-to={ i } className={ i==0 ? 'active' : '' } aria-current={ i==0 ? 'true' : 'false' } aria-label={ `Slide ${i}` } key={ i }></button>
                        })
                    }
                </div>
                <div className="carousel-inner">
                    {
                        images.map((value, i) => {
                            return <CarouselItem image={ value } key={ i } index={ i } />
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={ `#${tag}` } data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={ `#${tag}` } data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

PortfolioDesktopCarousel.propTypes = {
    images: PropTypes.array.isRequired,
    tag: PropTypes.string.isRequired,
}

export default PortfolioDesktopCarousel;