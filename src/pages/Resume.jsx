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
                                <p><em>Software Developer and Agile practitioner with an MSc in Software Development and experience building full-stack web applications, REST and GraphQL APIs and database-driven systems across e-commerce, healthcare and real-time platforms. Works across JavaScript, TypeScript, React, Node.js and PHP/Laravel, with a focus on secure authentication, payment integration and maintainable design. Certified Professional Scrum Master I (PSM I) and ITIL 4 Foundation practitioner. Brings an engineer’s understanding of delivery to team facilitation, and a facilitator’s habits of transparency and continuous improvement to engineering work.
                                </em></p>
                                <ul>
                                    <li>Coventry, England</li>
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
                                <h4>Volunteer Scrum Master</h4>
                                <h5>Feb 2026 – Sept 2026</h5>
                                <p><em>The Community Revolution, London, England (Remote)</em></p>
                                <ul>
                                    <li>Lead Scrum for a four-person Platform Engineering and DevOps team at a London-based technology nonprofit, across 16+ sprints, supporting its move to structured Agile delivery.</li>
                                    <li>Introduced and refined a Kanban-based board in Plane, giving the team clear visibility of work, ownership and accountability.</li>
                                    <li>Facilitate Sprint Planning, Daily Scrums, Sprint Reviews and Retrospectives, and coach the team on Scrum principles, backlog management and collaboration.</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>Software developer</h4>
                                <h5>Oct 2022 - Aug 2023</h5>
                                <p><em>Cobary Inc, Lagos, Nigeria </em></p>
                                <ul>
                                    <li>Developed and maintained Laravel-based applications and APIs for eCommerce platforms, emphasizing modular architecture and clear business logic.</li>
                                    <li>Designed database relationships and optimized MySQL queries to support scalable transaction processing. </li>
                                    <li>Worked closely with designers and product owners to translate business requirements into robust technical solutions, balance performance, and long-term maintainability.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center mt-10 full-resume container-fluid">
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                    <a href="/files/Solomon_Mudiaga_Fidelis_CV.pdf" target="_blank" className="app-btn-color-outline btn border-2 border">View my resume <i className="bi bi-arrow-right ms-1"></i></a>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <a href="/files/Solomon_Mudiaga_Fidelis_CV.pdf" 
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