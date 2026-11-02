import ContactItem from "../components/Contact/Item.jsx";
import { contactItemList } from "../util/data.js";

function Contact(){
    const renderContactList = () => {
        const list = contactItemList.map((value, i) => {
            return <ContactItem link={ value.link } icon={ value.icon } title={ value.title } key={ i } />
        });

        return list;
    }

    return (
        <section id="contact" className="main-section-item">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Feel free to Connect with me. I'm open to collaborations on a project, or to just connect.</p>
                </div>

                <div className="container-fluid content mt-3"  data-aos="fade-left">
                    <div className="row">
                        {
                            renderContactList()
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact;