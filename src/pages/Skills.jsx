import SkillSet from "../components/Skills/Section";

import "../assets/css/skills.css"

function Skills(){
    return (
        <>
            <section id="skills" className="skills section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>I took an interest in coding, back in 2017 and since then have worked with several programming languages, frameworks and libraries. I've actively used WAMP stack to build web applications and i'm working on using and possibly switching to MERN stack. I also have experience with Android Application Development with Android Studio, XML, SQLLite and Java. Find below a list of my various technical skills, and what i'd call my skill level for each one of them.</p>
                    </div>

                    <SkillSet />

                </div>
            </section>
        </>
    )
}

export default Skills;