import PropTypes from "prop-types"

function InterestItem({ interest }){
    return (
        <>
            <div className="col-12 col-md-6">
                <div className="interest-item">
                    <div className="interest-item-title">
                        <i className="bi bi-chevron-double-right interest-item-icon"></i> <strong>{ interest.name }</strong>
                    </div>

                    <div><small>{ interest.about }</small></div>
                </div>
            </div>
        </>
    )
}

InterestItem.propTypes = {
    interest: PropTypes.object.isRequired
}

export default InterestItem;