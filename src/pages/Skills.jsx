import SkillSet from "../components/Skills/Section";

import "../assets/css/skills.css"

function Skills(){
    return (
        <>
            <section id="skills" className="skills section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>I favor back-end over front-end, when it comes to development. I have experience in both front-end and back-end, with an array of programming languages, frameworks and libraries.</p>
                    </div>

                    <SkillSet />

                </div>
            </section>
        </>
    )
}

export default Skills;