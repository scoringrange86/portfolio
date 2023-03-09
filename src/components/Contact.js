//    ##### Needs 

//    Add Social media icons



// import {Link} from "react-router-dom";
import './Contact.css'

function Contact() {

    // let contacts = [
    //     { type: "LinkedIn", icon: "icon", link: "link" },
    //     { type: "Github", icon: "icon", link: "github.com/scoringrange86" },
    //     { type: "Email", icon: "icon", link: "scoringrange86@gmail.com" }

    // ];

    // let contactNames = ["Linkedn", "Github", "Email"];
    let contacts = [ ["Linkedn","www.linkedin.com/in/steven-roberts-thrive"],["Github", "github.com/scoringrange86"], ["Email","scoringrange86@gmail.com"]]

    return (
        <div className="contact-wrapper">
            <h1> Contact </h1>
            <div className="contact-content-wrapper">
                <div className="contact-content"> 
                {
                    contacts.map((contact) => (
                        <div className="contact-item" key={contact[0]}>
                            <a href={contact[1]}>
                                <p>{contact[0]}</p>
                            </a>
                        </div>
                    ))
                }
                </div>
                <div className="contact-content">
                {
                    contacts.map((contact) => (
                        <div className="contact-item" key={contact[1]}>
                            <a href={contact[1]}>
                                <p>{contact[1]}</p>
                            </a>
                        </div>
                    ))
                }
                </div>
                </div>
        </div>

    );
}

export default Contact; 