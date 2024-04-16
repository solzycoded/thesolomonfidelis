import PropTypes from "prop-types"

function ProjectInfoItem({ head, body }){
    const filterBody = (text) => {
        return (text.indexOf('</') !== -1
            ? (
                <span className="fw-lighter" dangerouslySetInnerHTML={{__html: body.replace(/(<? *script)/gi, 'illegalscript')}}></span>
            )
            : <span className="fw-lighter">{ body }</span>)
    }

    return (
        <>
            <p>
                <b className="text-capitalize">{ head }: </b>
                { 
                    filterBody(body)
                }
            </p>
        </>
    )
}

ProjectInfoItem.propTypes = {
    head: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default ProjectInfoItem;