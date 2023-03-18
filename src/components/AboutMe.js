import "./AboutMe.css"
import Headshot from "../images/headshotCropped.jpg"

function AboutMe() {

    return (
        <div className="about-me-wrapper">
            <h1>Steven Roberts</h1>
            <img src={Headshot} alt="headshot" className="headshot"/>
            <h3> Software Engineer</h3>
            <div className="content-wrapper">
                <p> I am a Mobile Application and Web Developer. 
                    I received my bachelor's degree in Computer Science from the University of Kentucky.
                    During undergrad, I held executive board positions for various organizations such as the National Society of
                     Black Engineers (NSBE) and Minorities in Agriculture, Natural Resources, and Related Sciences (MANRRS).
                    I am an ambitious leader whose thirst for knowledge and passion for excellence leads to powerful projects. 
                </p>
            </div>
        </div>
    );
}

export default AboutMe; 