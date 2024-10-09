import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Menu from './components/Menu.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
      <Router>
        <Menu/>
        <Routes className="mt-2 p-2">
          <Route path="/about" element ={<About />} />
          <Route path="/skills" element ={<Skills />} />
          <Route path="/projects" element ={<Projects />} />
          <Route path="/contact" element ={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
