import "./Skills.css"

function Skills() {
    let skills = ["React", "ExpressJS", "MongoDB", "NodeJS","HTML", "CSS", "Python", "SQL"]

    return (
        <div className="skills-wrapper">
            <h1> Skills </h1>
            <section className="skills-cards-wrapper">
            {
                skills.map( (skill) => (
                    
                    <span className="skill-card" key={skill}> {skill}</span>  
                    
                    ))
            }
            </section>
        </div>
    )

}

export default Skills;