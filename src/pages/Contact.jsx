function Contact(){
    return (
        <section id="contact" className="main-section-item">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Feel free to Connect with me. I'm open to collaborations on a project, or to just connect.</p>
                </div>

                <div className="container-fluid content mt-3"  data-aos="fade-left">
                    <div className="row">
                        <div className="col-12 col-sm-2 mt-2 me-2">
                            <a href="https://wa.me/447473684012?text=Hi, I got your number from your website. I want to talk to you about ..." target="_blank" className="text-center">
                                <div className="fs-1">
                                    <i className="bi bi-whatsapp"></i>
                                </div>
                                <p className="lead mt-2 text-white">whatsapp</p>
                            </a>
                        </div>
                        <div className="col-12 col-sm-2 mt-2 me-2">
                            <a href="https://www.instagram.com/theonly_mudiaga/" target="_blank" className="text-center">
                                <div className="fs-1">
                                    <i className="bi bi-instagram"></i>
                                </div>
                                <p className="lead mt-2 text-white">instagram</p>
                            </a>
                        </div>
                        <div className="col-12 col-sm-2 mt-2 me-2">
                            <a href="tel:447473684012" target="_blank" className="text-center">
                                <div className="fs-1">
                                    <i className="bi bi-telephone-fill"></i>
                                </div>
                                <p className="lead mt-2 text-white">call</p>
                            </a>
                        </div>
                        <div className="col-12 col-sm-2 mt-2 me-2">
                            <a href="https://twitter.com/solzycode" target="_blank" className="text-center">
                                <div className="fs-1">
                                    <i className="bi bi-twitter"></i>
                                </div>
                                <p className="lead mt-2 text-white">twitter</p>
                            </a>
                        </div>
                        <div className="col-12 col-sm-2 mt-2 me-2">
                            <a href="https://www.linkedin.com/in/solomon-fidelis-7a80b9132/" target="_blank" className="text-center">
                                <div className="fs-1">
                                    <i className="bi bi-linkedin"></i>
                                </div>
                                <p className="lead mt-2 text-white">linkedin</p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact;