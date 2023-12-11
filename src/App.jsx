import About from "./Components/About"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Profile from "./Components/Profile"
import Project from "./Components/Project"

function App() {
  return (
    <>
    <div className=" bg-white">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Profile />
      <Contact />
    </div>
    </>
  )
}
export default App
