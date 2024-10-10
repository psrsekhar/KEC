import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import View from "./components/View.jsx";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
