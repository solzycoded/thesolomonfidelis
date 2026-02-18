import "../assets/css/resume.css"

function Resume(){
    return (
            <section id="resume" className="resume">
                <div className="container">

                    <div className="section-title">
                        <h2>Resume</h2>
                        <p>View the full copy of my resume below. But, here's a snippet of what you'll find within it.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="resume-title">Summary</h3>
                            <div className="resume-item pb-0">
                                <h4>Solomon Fidelis</h4>
                                <p><em>Full stack software developer with practical experience delivering real-world applications across academic, commercial, and independent projects. My progression reflects a shift from learning how to build software to building it well, with emphasis on structure, correctness, and maintainability. I have contributed across the full software development lifecycle, designing and evolving production-ready systems with clear business logic and reliable data handling. I approach complex problems analytically, applying appropriate algorithms and data structures while weighing performance and architectural trade-offs. I am seeking to add value within a collaborative engineering team, delivering dependable solutions while continuing to expand my technical ownership and impact. </em></p>
                                <ul>
                                    <li>CV2 4GA Coventry, England</li>
                                    <li>(44) 747-3684-012</li>
                                    <li>solomonmfidelis@gmail.com</li>
                                </ul>
                            </div>

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Master of Science, Software Development</h4>
                                <h5>2023 - 2024</h5>
                                <p><em>Coventry University, Coventry, England</em></p>
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Software developer</h4>
                                <h5>Oct 2022 - Aug 2023</h5>
                                <p><em>Cobary Inc, Lagos, Nigeria </em></p>
                                <ul>
                                    <li>Developed and maintained Laravel-based applications and APIs for eCommerce platforms, emphasizing modular architecture and clear business logic.</li>
                                    <li>Refactored legacy codebases to improve maintainability and enforce consistent coding standards, reducing technical debt and improving development efficiency by 25%. </li>
                                    <li>Designed database relationships and optimized MySQL queries to support scalable transaction processing. </li>
                                    <li>Worked closely with designers and product owners to translate business requirements into robust technical solutions, balance performance, and long-term maintainability.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center mt-10 full-resume container-fluid">
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                    <a href="/files/Solomon Fidelis Resume.pdf" target="_blank" className="app-btn-color-outline btn border-2 border">View my resume <i className="bi bi-arrow-right ms-1"></i></a>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <a href="/files/Solomon Fidelis Resume.pdf" 
                                    download="Solomon Fidelis.pdf" 
                                    className="app-btn-color btn text-white rounded-pill"
                                    target="_blank">Download my resume <i className="bi bi-download ms-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

    )
}

export default Resume;