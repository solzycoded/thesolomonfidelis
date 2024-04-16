import "../assets/css/interests.css"

function Interests(){
    return (
        <>
            <section id="interests" className="main-section-item">
                <div className="container">

                    <div className="section-title">
                        <h2>Interests</h2>
                        <p>I have a few interests, a bunch of stuff that i love doing. The kind of stuff that i would do, whether or not i was a Software Engineer.</p>
                    </div>

                    <div className="container-fluid content"  data-aos="fade-left">
                        <div className="row">
                            <div className="col-lg-6 ps-0 pe-0">
                                <div>
                                    <div className="interest-item">
                                        <div className="interest-item-title">
                                            <i className="bi bi-chevron-double-right interest-item-icon"></i> <strong>Movies</strong>
                                        </div>

                                        <div><small>what do you suppose are the best movies / tvshows of all time? Here are mine...</small></div>
                                    </div>
                                    <div className="interest-item">
                                        <div className="interest-item-title">
                                            <i className="bi bi-chevron-double-right interest-item-icon"></i> <strong>Music</strong>
                                        </div>
                                        <div><small>music excites my soul. i don't like coding, without it. here are few of what i'd call the best songs ever written</small></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 ps-0 pe-0">
                                <div>
                                    <div className="interest-item">
                                        <div className="interest-item-title">
                                            <i className="bi bi-chevron-double-right interest-item-icon"></i> <strong>Boxing</strong>
                                        </div>
                                        <div><small>muhammed ali, iron mike tyson, francis nnganou. all of this cats make me want to be physically fit.</small></div>
                                    </div>
                                    <div className="interest-item">
                                        <div className="interest-item-title">
                                            <i className="bi bi-chevron-double-right interest-item-icon"></i> <strong>Psychology</strong>
                                        </div>
                                        <div><small>what exactly does this mean?</small></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Interests;