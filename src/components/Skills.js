import "./Skills.css"

function Skills() {
    const skillsTop = ["React", "ExpressJS", "MongoDB", "NodeJS" ]
    const skillsBottom = ["HTML", "CSS", "Python", "SQL"]

    return (
        <div className="skills-wrapper">
            <h1> Skills </h1>
            <section className="skills-cards-wrapper">
                <p>
            {
                skillsTop.map( (skill) => (
                    
                    <span className="skill-card" key={skill}> {skill}</span>  
                    
                    ))
            }
            </p>
            <p>
            {
                skillsBottom.map( (skill) => (
                    
                    <span className="skill-card" key={skill}> {skill}</span>  
                    
                    ))
            }
            </p>
            </section>
        </div>
    )

}

export default Skills;