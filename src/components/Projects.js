import "./Projects.css"
import {Link} from "react-router-dom"

function Projects () {
    let projects = [
                    { name: 'Cryptovisor', path: "https://scoringrange86.github.io/cryptovisor-frontend/"},
                    { name: 'Juiceshop', path: "https://scoringrange86.github.io/juiceshop-frontend/"}, 
                    {name: 'Pomodoro', path: "https://scoringrange86.github.io/cryptovisor-frontend/"}
                    ]
                    // key={project.name}

    return (
        <div className="projects-wrapper">
            <h1> Projects </h1>
            <div className="projects-content-wrapper">
            {
                projects.map( (project) => (
                    <a className="project-item"  
                    key={project.name}
                    href= {project.path}
                    target="_blank">
                        {project.name}
                        </a>
                ))
            }
            </div>
        </div>
    );

}

export default Projects; 