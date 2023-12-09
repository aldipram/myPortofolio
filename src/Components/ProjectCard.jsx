import React from "react";
function ProjectCard( {title, img }) {
    return ( 
        <>
            <div className="flex flex-col gap-10 justify-center items-center mb-10 shadow-2xl hover:shadow-[#7977f1] rounded-lg transition-all">
                <h1 className="text-xl">{title}</h1>
                <img src={img} alt="" className="w-full rounded-xl"/>
            </div>
        </>
     );
}

export default ProjectCard;