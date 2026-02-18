import getBirthDay from "../../util/app";

function About(){
    return (
        <section id="about" className="main-section-item">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>I’m a software developer & a PSM I certified Scrum Master, who enjoys turning ideas into working systems. My background interests in psychology and boxing, shape how I approach problem-solving, learning, and continuous improvement.</p>
                </div>

                <div className="row">
                    <div className="col-12 col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        {/* <h3>UI/UX Designer &amp; Web Developer.</h3> */}
                        <p className="fst-italic">I focus on building maintainable web applications, thinking carefully about design, trade-offs, and how people actually use what I build.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>22 February</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+44 7473 684 012</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>I currently live in Coventry, U.K</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{ getBirthDay("1996-02-22") }</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree(s):</strong> <span>BSc, <small>Msc</small></span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email Address:</strong> <span>solomonmfidelis@gmail.com</span></li>
                                </ul>
                            </div>
                        </div>
                    {/* <p>I'd love to be a part of a team, and to build awesome things, in this team.</p> */}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;