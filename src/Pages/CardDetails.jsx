
import { Link, useParams } from "react-router-dom";
import { dataProject } from "../dataImg";
import { X } from "lucide-react";

function DetailProject() {
    const { id } = useParams();
    const detail = dataProject.find((items) => {
        return items.id === parseInt(id);
    })
    return ( 
        <>
            <div className="bg-darkBackground h-screen mx-auto flex flex-col items-center justify-center gap-10">
                <div className="w-[80%] lg:w-[60%] bg-brightColor rounded-lg py-8 px-4 lg:px-8 relative">
                    <Link className="absolute right-1 top-0 p-1" to="/">
                        <X />
                    </Link>
                    <div>
                        <img src={detail.img} alt="" className="w-full rounded-lg"/>
                    </div>
                    <div className="mt-4 flex flex-col items-center justify-center gap-5">
                        <h1 className="text-xl font-semibold">{detail.title}</h1>
                        <p className="text-sm text-justify ">{detail.desc}</p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default DetailProject;