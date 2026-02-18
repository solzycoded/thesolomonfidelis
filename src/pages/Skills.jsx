import SkillSet from "../components/Skills/Section";

import "../assets/css/skills.css"

function Skills(){
    return (
        <section id="skills" className="skills section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Skills</h2>
                    <p>I’ve been coding since 2017 and have gained hands-on experience across multiple languages, frameworks, and tools. Most of my web development work has been with the WAMP stack, Laravel, and PHP, and I’m now building projects using the MERN stack with React and Node.js. I also have experience with Android app development using Android Studio, XML, SQLite, and Java.</p>
                    <p>On top of that, my Scrum Master certification and Agile experience help me approach projects with structure and efficiency. Below is a list of my technical skills along with my self-assessed proficiency in each.</p>
                </div>

                <SkillSet />

            </div>
        </section>
    )
}

export default Skills;