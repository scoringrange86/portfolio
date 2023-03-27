//    ##### Needs 

//    Add Social media icons

import './Contact.css'

function Contact() {


    let contacts = [ { name: "LinkedIn", path: "https://www.linkedin.com/in/steven-roberts-thrive"},
                        { name: "Github", path: "https://github.com/scoringrange86"},
                         {name: "Email", path: "mailto:scoringrange86@gmail.com"}
                    ]


    return (
        <div className="contact-wrapper">
            <h1> Contact </h1>
            <div className="contact-content-wrapper">
                <div className="contact-content"> 
                {
                    contacts.map((contact) => (
                            <a 
                            className="contact-item"
                             key={contact.name}
                            href={contact.path}
                            rel= "noopener noreferrer" 
                            target="_blank">
                                <p>{contact.name}</p>
                            </a>
                    ))
                }
                </div>
                <div className="contact-content">
                {
                    contacts.map((actualLink) => (
                            <a
                            className="contact-item" 
                            key={actualLink.path}
                            href={actualLink.path}
                            rel="noreferrer"
                                target="_blank"
                            >
                                <p>{actualLink.path}</p>
                            </a>
                    ))
                }
                </div>
                </div>
        </div>

    );
}

export default Contact; 