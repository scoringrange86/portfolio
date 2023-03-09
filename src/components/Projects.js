import "./Projects.css"

function Projects () {
    let projects = ['Cryptovisor', 'Juiceshop', 'Pomodoro']

    return (
        <div className="projects-wrapper">
            <h1> Projects </h1>
            <div className="projects-content-wrapper">
            {
                projects.map( (project) => (
                    <button className="project-item" key={project} href="">{project}</button>
                ))
            }
            </div>
        </div>
    );

}

export default Projects; 