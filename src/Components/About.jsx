import imgAbout from '../assets/img/about.jpg'
import { Github, Instagram, Linkedin, PhoneCall } from "lucide-react";

function About() {
    return ( 
        <>
            <div id='about' className='flex flex-col gap-10 lg:gap-20 justify-center items-center mx-auto h-[90%] w-[80%] mt-20 md:my-40 lg:m-auto'>
                <h1 className='font-semibold text-2xl lg:text-3xl'>About Me</h1>
                    <div className='flex flex-col justify-center items-center lg:flex-row gap-10'>
                        <div className='w-full xl:w-5/12'>
                            <img src={imgAbout} alt="" className='rounded-xl shadow-2xl shadow-[#7977f1]'/>
                        </div>
                        <div className='flex flex-col gap-10 justify-center items-center lg:w-11/12'>
                            <h3 className='text-lg lg:text-xl font-semibold'>Who Am I?</h3>
                            <p className='text-justify text-base lg:text-lg text-slate-500'>I'm a beginner web developer. What was originally an automotive graduate student and switched to coding, because there was an interest, so I switched and wanted to become a web developer. Yes, and here I am, <span className='text-[#7977f1] font-semibold'>Nanda Aldi Pramudya</span>, welcome to my website!</p>
                            <div className='flex gap-5'>
                                <a className='hover:text-[#7977f1] transition-all' href="https://www.instagram.com/nandaaaldii/"><Instagram /></a>
                                <a className='hover:text-[#7977f1] transition-all' href="https://wa.me/+6288232240609"><PhoneCall /></a>
                                <a className='hover:text-[#7977f1] transition-all' href="https://www.linkedin.com/in/aldipramudya-aldi/"><Linkedin /></a>
                                <a className='hover:text-[#7977f1] transition-all' href="https://github.com/aldipram"><Github /></a>
                            </div>
                        </div>
                    </div>
                </div>
        </>
     );
}

export default About;