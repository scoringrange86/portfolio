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
                <table>
                    {
                    contacts.map( (contact) => (
                        <tr>
                            <td>
                                <a href={contact.path}>
                                 {contact.name}
                                </a>
                           </td>
                            <td>
                                <a href={contact.path}>
                                {contact.path}
                                </a>
                                </td>
                        </tr>
                    
                    ))
                    }
                </table>
                </div>
        </div>

    );
}

export default Contact; 