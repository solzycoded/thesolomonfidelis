import InterestItem from "./Item";

import data from "../../util/data"

function InterestSection(){
    const interests = data.interests();

    return (
        <>
            <div className="container-fluid content"  data-aos="fade-left">
                <div className="row">
                    {
                        interests.map((value, i) => {
                            return <InterestItem interest={ value } key={ i } />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default InterestSection;