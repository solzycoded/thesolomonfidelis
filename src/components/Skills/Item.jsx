import PropTypes from 'prop-types';

function Skill({ skill, level }){
    return (
        <>
            <div className="progress">
                <span className="skill">{ skill } <i className="val">{ level }%</i></span>
                <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={level} aria-valuemin="0" aria-valuemax="100" style={{width: (level + "%")}}></div>
                </div>
            </div>
        </>
    )
}

 
Skill.propTypes = {
    skill: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired
}

export default Skill;