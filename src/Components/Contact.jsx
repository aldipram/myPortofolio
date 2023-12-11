import { Mail, User } from "lucide-react";

function Contact() {
    return ( 
        <>
            <div id="contact" className="w-[80%] mx-auto flex flex-col items-center justify-center gap-10">
                <h1 className="text-3xl font-semibold">Contact</h1>
                <form className="w-full lg:w-[70%] flex flex-col gap-10 bg-slate-300 py-8 rounded-lg">
                    <div className="w-[80%] mx-auto flex flex-col gap-5">
                        <div className="flex flex-col">
                            <label className="text-slate-500 lg:text-lg mb-3" htmlFor="name">
                                <User />
                            </label>
                            <input className="rounded-lg focus:outline-slate-500 h-8 lg:h-12 p-2" id="name" type="text" placeholder="enter your name"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-slate-500 lg:text-lg mb-3" htmlFor="email">
                                <Mail />
                            </label>
                            <input className="rounded-lg focus:outline-slate-500 h-8 lg:h-12 p-2" id="email" type="email" placeholder="enter your email"/>
                        </div>
                        <textarea className="rounded-lg focus:outline-slate-500 p-2" placeholder="enter your message" id="" cols="10" rows="4"></textarea>
                    </div>
                    <div className="w-[50%] mx-auto px-8 py-4 bg-brightColor rounded-full hover:text-white hover:bg-[#8482ff] transition-all text-center">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </>
     );
}

export default Contact;