import About from "./Components/About"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Project from "./Components/Project"

function App() {
  return (
    <>
    <div className="h-screen bg-white">
      <Navbar />
      <Home />
      <About />
      <Project />
    </div>
    </>
  )
}
export default App
