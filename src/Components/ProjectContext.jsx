import React, { createContext, useState } from "react";
import { dataProject } from "../dataImg";

const ProjectContext = createContext();

function ProjectProvider({children}) {
    const [project, setProject] = useState(dataProject);
    return ( 
        <>
            <ProjectContext.Provider value={{project, setProject}}>
                {children}
            </ProjectContext.Provider>
        </>
     );
}

export { ProjectContext, ProjectProvider};