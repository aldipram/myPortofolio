import React, { useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

function Project() {
    const { project } = useContext(ProjectContext);
    return ( 
        <>
            <div id="project" className="w-[80%]  mt-52 flex flex-col items-center mx-auto">
                    <h1 className="font-semibold text-2xl lg:text-3xl mb-10 uppercase">Project</h1>
                <div className="lg:grid lg:grid-cols-2 gap-10 ">
                    {project.map((items) => {
                        return (
                            <Link key={items.id} to={`/detail/${items.id}`}>
                                <ProjectCard title={items.title} img={items.img}/>
                            </Link>
                        );
                    })}
                </div>
            </div>
            </>
     );
}

export default Project;