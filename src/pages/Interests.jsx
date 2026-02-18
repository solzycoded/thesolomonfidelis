import InterestSection from "../components/Interests/Section";

import "../assets/css/interests.css"

function Interests(){
    return (
        <>
            <section id="interests" className="main-section-item">
                <div className="container">

                    <div className="section-title">
                        <h2>Interests</h2>
                        <p>I have a few interests, a bunch of stuff that i love doing. The kind of stuff that i would do, whether or not i was a Software Developer.</p>
                    </div>
                    
                    <InterestSection />
                </div>
            </section>
        </>
    )
}

export default Interests;