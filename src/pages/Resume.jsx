import "../assets/css/resume.css"

function Resume(){
    return (
        <>

            <section id="resume" className="resume">
                <div className="container">

                    <div className="section-title">
                        <h2>Resume</h2>
                        <p>View the full copy of my resume below. But, here's a snippet of what you'll find in it.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="resume-title">Summary</h3>
                            <div className="resume-item pb-0">
                                <h4>Solomon Fidelis</h4>
                                <p><em>Dedicated and skilled Software Engineer with 3 years of hands-on experience in developing robust web applications using PHP, JavaScript (Node.js, frameworks like Laravel). Skilled in the full software development lifecycle, from concept and design to testing, deployment, and maintenance. Proficient in utilizing modern technologies and frameworks to deliver scalable solutions. Adept at cross-functional collaboration and driving projects to successful completion. Familiar with Azure DevOps for cloud deployment and CI/CD processes.</em></p>
                                <ul>
                                    <li>CV2 4GA Coventry, England</li>
                                    <li>(44) 747-3684-012</li>
                                    <li>solomonmfidelis@gmail.com</li>
                                </ul>
                            </div>

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Master of Science, Software Development</h4>
                                <h5>2023 - Present</h5>
                                <p><em>Coventry University, Coventry, England</em></p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Software developer (Contract)</h4>
                                <h5>Oct 2022 - Aug 2023</h5>
                                <p><em>Cobary Inc, Lagos, Nigeria </em></p>
                                <ul>
                                    <li>Consult with project manager and development team on application development.</li>
                                    <li>Provides strategic and technical assistance to Management on architectural strategies by evaluating approaches and alternatives. </li>
                                    <li>Tested websites and performed troubleshooting prior to deployment.</li>
                                    <li>Handle whole project, with design team from ideation to production deployment.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center mt-10 full-resume">
                            <div className="d-inline me-3">
                                <a href="/files/resume.pdf" target="_blank" className="app-btn-color-outline btn border-2 border">View my resume <i className="bi bi-arrow-right ms-1"></i></a>
                            </div>
                            <div className="d-inline">
                                <a href="/files/resume.pdf" 
                                download="Solomon Fidelis.pdf" 
                                className="app-btn-color btn text-white rounded-pill"
                                target="_blank">Download my resume <i className="bi bi-download ms-1"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Resume;