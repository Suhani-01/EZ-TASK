import "./index.css";
import AboutTeam from "./component/AboutTeam";
import AboutUs from "./component/AboutUs";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";

function App() {

  return (
    <>
      <div>
        <div className="fixed top-0 left-0 z-0  w-[140%] h-screen overflow-x-hidden">
          
          <img src="/bg.png" className="top-0 left-0 w-full h-[140%] -translate-x-20 -translate-y-20 sm:-translate-x-70 sm:-translate-y-20 xl:-translate-y-40"/>
        </div>
        <img src="/complogo.png" alt="logo" className="absolute z-300 left-8 top-4 h-8"/>
        

        <Navbar />
        <div 
          className="  top-0 left-0 h-screen z-10">
          
          <main className=" h-screen w-max bg-backGround overfllow-x-hidden">
            {/* Main content sections */}
            <Hero />
            <AboutTeam />
            <AboutUs />
            <Services />
            <Portfolio />
            
            <Contact />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
