import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "../UI/Theme";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const { theme, handleTheme } = useTheme();

  return (
    <>
      <div className="w-full h-16 p-6 lg:p-8 bg-darkBackground text-white flex justify-between items-center sticky top-0 left-0">
        <div>
          <a href="home" className="text-xl">
            ALDIprmdy_
          </a>
        </div>
        <nav
          className={`mobile:absolute mobile:top-16 mobile:right-0 mobile:w-[200px] mobile:h-[330px] mobile:bg-darkBackground mobile:p-4 mobile:z-50 mobile:shadow-2xl mobile:rounded-bl-md ${
            isMobileMenuOpen ? "mobile:block" : "mobile:hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row justify-center items-center gap-5 p-4 lg:gap-20">
            <a
              href="home"
              className="tracking-widest text-base hover:text-brightColor h-[35px] lg:h-auto w-full text-center relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-slate-300 after:opacity-20 after:transition-all after:duration-300 hover:after:w-full lg:after:hidden"
            >
              <li>Home</li>
            </a>
            <a
              href="about"
              className="tracking-widest text-base hover:text-brightColor h-[35px] lg:h-auto w-full text-center relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-slate-300 after:opacity-20 after:transition-all after:duration-300 hover:after:w-full lg:after:hidden"
            >
              <li>About</li>
            </a>
            <a
              href="project"
              className="tracking-widest text-base hover:text-brightColor h-[35px] lg:h-auto w-full text-center relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-slate-300 after:opacity-20 after:transition-all after:duration-300 hover:after:w-full lg:after:hidden"
            >
              <li>Project</li>
            </a>
            <a
              href="contact"
              className="tracking-widest text-base hover:text-brightColor h-[35px] lg:h-auto w-full text-center relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-slate-300 after:opacity-20 after:transition-all after:duration-300 hover:after:w-full lg:after:hidden"
            >
              <li>Contact</li>
            </a>
            <div>
              <button onClick={handleTheme} className="p-3 rounded-lg">
                {theme === 'dark' ? (
                <Sun className="text-yellow-500" />
                ) : (
                <Moon className="text-white" />
                )}
              </button>
            </div>
          </ul>
        </nav>
        <div className="lg:hidden" onClick={toggleMobileMenu}> 
          <Menu />
        </div>
      </div>
    </>
  );
}

export default Navbar;
