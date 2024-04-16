import getBirthDay from "../../util/app";

function About(){
    return (
        <>
            <section id="about" className="main-section-item">
                <div className="container">

                    <div className="section-title">
                        <h2>About</h2>
                        <p>I'm a fella in my 20s, who desires a career as a Software Engineer. I have an interest in psychology reading, boxing, among other things.</p>
                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            {/* <h3>UI/UX Designer &amp; Web Developer.</h3> */}
                            <p className="fst-italic">I enjoy the process of creation, from idea phase to development. I believe that everyone of us, has the ability to create whatever we want and bring our ideas, however crazy, to life.</p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>22 February 1996</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+44 7473 684 012</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>I currently live in Coventry, U.K</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{ getBirthDay("1996-02-22") }</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bsc, <small>Msc in prospect</small></span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email Address:</strong> <span>solomonmfidelis@gmail.com</span></li>
                                    </ul>
                                </div>
                            </div>
                        {/* <p>I'd love to be a part of a team, and to build awesome things, in this team.</p> */}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About;