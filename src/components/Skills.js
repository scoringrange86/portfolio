import "./Skills.css"

function Skills() {

    let skills = ["React", "Javascript", "Python"]

    return (
        <div className="skills-wrapper">
            <h1> Skills </h1>
            {
                skills.map( (skill) => (
                    <p key={skill}> {skill}</p>  
                
                    ))
            }
        </div>
    )

}

export default Skills;