import "./Skills.css"

function Skills() {
    let skillsTopRow = ["React", "Java", "Python", "NodeJS"]
    let skillsBottomRow = ["HTML", "CSS", "C++", "SQL"]

    return (
        <div className="skills-wrapper">
            <h1> Skills </h1>
            <p>
            {
                skillsTopRow.map( (skill) => (
                    
                    <span className="skill-card" key={skill}> {skill}</span>  
                    
                    ))
            }
            </p>
            <p>
            {
                skillsBottomRow.map( (skill) => (
                    <span className="skill-card" key={skill}> {skill}</span>  
                
                    ))
            }
            </p>
        </div>
    )

}

export default Skills;