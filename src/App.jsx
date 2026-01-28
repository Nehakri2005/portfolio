
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'

function App() {
  

  return (
    <div className="">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
       
      </main>
    </div>
  )
}

export default App
