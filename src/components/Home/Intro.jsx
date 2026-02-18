import "../../assets/css/intro.css"

function Intro(){
    return (
        <div id="intro" className="">
            <div className="container-fluid">
                <div className="row">
                    {/* sm screen */}
                    <div className="intro-sm col-12 col-sm-12">
                        <div className="border border-2 p-2 rounded intro-sm-container">
                            <div className="intro-sm-img-container">
                                <img className="w-100 img-fluid rounded" src="/imgs/me.jpg" alt="solomon fidelis" />
                            </div>
                            <div className="mb-4">
                                <h1>Solomon <small className="fw-lighter">"solzy"</small> Fidelis</h1>
                                <h4 className="app-color">Software Developer & Scrum Master</h4>
                            </div>

                            <div>
                                <a href="#about" className="btn rounded-pill read-about-me app-btn-color-outline pe-4 ps-4">Read about me</a>
                            </div>
                        </div>
                    </div>
                    {/* lg screen */}
                    <div className="col-6 col-sm-5 col-md-6 col-lg-7 position-relative intro-lg">
                        <div className="intro-message">
                            <h1>Hey, I'm Solomon Fidelis</h1>
                            <h4>a <b className="app-color">Software Developer</b> & <b className="app-color">Scrum Master</b>.</h4>
                            <div className="mt-4">
                                <a href="#about" className="btn rounded-pill read-about-me app-btn-color-outline pe-4 ps-4">Read about me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-7 col-md-6 col-lg-5 intro-img-container intro-lg">
                        <img className="w-100 img-fluid" src="/imgs/me.jpg" alt="solomon fidelis" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;