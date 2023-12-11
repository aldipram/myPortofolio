import imgProfile from "../assets/img/profile.png";
import Typewriter from "typewriter-effect";
function Home() {

    return (
      <>
        <div id="home" className="w-[80%] mx-auto h-screen lg:h-[90vh] p-10 lg:p-4 flex flex-col justify-center items-center lg:flex-row">
          <div className="lg:w-8/12 flex flex-col text-center lg:text-start gap-10">
            <h1 className="font-semibold text-5xl">
            <Typewriter
              options={{
                strings: ["Hello I'm", 'Nanda Aldi Pramudya'],
                autoStart: true,
                loop: true,
                cursorClassName: 'typewriter-cursor',
              }}
            />
            </h1>
            <p className="lg:text-xl">
              Beginner Web <span className="text-[#7977f1] lg:text-xl">"FrontEnd"</span> Developer
            </p>
            <div className=" lg:pl-24 lg:mt-10">
              <a href="#profile" className="px-8 py-4 bg-brightColor rounded-full hover:bg-[#8482ff] hover:text-white transition-all">
                Visit Profile
              </a>
            </div>
          </div>
          <div className="mt-14 lg:mt-0 lg:w-4/12">
            <img src={imgProfile} alt="" className="w-full"/>
          </div>
        </div>
      </>
    );
  }
  
  export default Home;
  