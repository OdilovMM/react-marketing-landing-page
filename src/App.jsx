import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Cases from "./pages/Cases";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import CaseStudies from "./components/CaseStudies";
import WorkingProcess from "./components/WorkingProcess";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="font-primary">
      <Navbar />
      <About />
      <Service />
      <Cases />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
