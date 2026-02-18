import PropTypes from "prop-types"

function CarouselItem({ image, index }){
    return (
        <>
            <div className={ ("carousel-item" + (index==0 ? ' active' : ""))} data-bs-interval="5000">
                <img src={ `/imgs/${image.src}` } className="d-block w-100 carousel-img" alt="portfolio picture" />
                {/* <div className="carousel-caption d-none d-md-block text-white">  
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div> */}
            </div>
        </>
    )
}

CarouselItem.propTypes = {
    image: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default CarouselItem;