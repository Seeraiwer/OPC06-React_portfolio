// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  // disable: "mobile" → animations désactivées sur mobile pour des raisons de performance et d'UX
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">SEERAIWER</h6>
        <p>Fork <a href="https://github.com/Sridhar-C-25/react_portfolio_2" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-75">Sridhar-C-25/react_portfolio_2</a> © All CopyRights Reserved 2022</p>
      </footer>
    </div>
  );
};

export default App;
