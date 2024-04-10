import "../../assets/css/intro.css"

function Intro(){
    return (
        <>
            <div id="intro">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 col-md-7 position-relative">
                            <div className="position-absolute start-0 top-50">
                                <h1>Hey, I'm Solomon Fidelis</h1>
                                <h4>I am a <b className="app-color">Software Engineer</b>.</h4>
                                <div className="mt-4">
                                    <a href="#about-me" className="btn rounded-pill fs-4 read-about-me app-btn-color-outline pe-4 ps-4">Read about me</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-5 intro-img-container">
                            <img className="w-100" src="/imgs/me.jpg" alt="solomon fidelis" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;