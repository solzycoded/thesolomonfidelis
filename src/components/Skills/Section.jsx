import Skill from "./Item"
import data from "../../util/data"

function SkillSet(){
    let skillSet = data.skills();

    const renderSkills = (skills) => {
        let list = skills.map((value, i) => {
            return <Skill skill={ value.skill } level={ value.level } key={ i } />
        })

        return list;
    }

    return (
        <>
            <div className="row skills-content">

                <div className="col-lg-6" data-aos="fade-up">

                    {/* front-end */}
                    { renderSkills(skillSet.frontEndList) }
                    {/* tools */}
                    { renderSkills(skillSet.tools) }

                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    {/* back-end */}
                    { renderSkills(skillSet.backEndList) }
                    {/* programming languages */}
                    { renderSkills(skillSet.programmingLanguages) }
                    {/* others */}
                    { renderSkills(skillSet.others) }
                </div>

            </div>
        </>
    )
}

export default SkillSet;