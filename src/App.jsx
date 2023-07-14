import React from 'react'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Education from './components/education/Education'
import { useState } from 'react'
import './components/nav/nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { PiNotebook } from 'react-icons/pi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { IoSchool } from 'react-icons/io5'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeNav: '#'
    }
  };

  setActiveNav = (nav) => {
    this.setState({ activeNav: nav })
  }

  render() {
    return (
      <>
        <Header getState={this.setActiveNav} />
        <About getState={this.setActiveNav} />
        <Projects />
        <Education />
        <Experience />
        <Contact />
        <Footer />
        <nav>
          <a href="#" onClick={() => this.setActiveNav('#')} className={this.state['activeNav'] === '#' ? 'active' : ''}><AiOutlineHome /></a>
          <a href="#about" onClick={() => this.setActiveNav('#about')} className={this.state['activeNav'] === '#about' ? 'active' : ''}><AiOutlineUser /></a>
          <a href="#projects" onClick={() => this.setActiveNav('#projects')} className={this.state['activeNav'] === '#projects' ? 'active' : ''}><PiNotebook /></a>
          <a href="#education" onClick={() => this.setActiveNav('#education')} className={this.state['activeNav'] === '#education' ? 'active' : ''}><IoSchool /></a>
          <a href="#experience" onClick={() => this.setActiveNav('#experience')} className={this.state['activeNav'] === '#experience' ? 'active' : ''}><BiBook /></a>
          <a href="#contact" onClick={() => this.setState({ activeNav: '#contact' })} className={this.state['activeNav'] === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
      </>

    )
  }
}

// const App = () => {
//   const [activeNav, setActiveNav] = useState('#')
//   return (
//     <>
//       <Header />
//       <About />
//       <Projects />
//       <Education />
//       <Experience />
//       <Contact />
//       <Footer />
//       <nav>
//         <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
//         <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
//         <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><PiNotebook /></a>
//         <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><IoSchool /></a>
//         <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
//         <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
//       </nav>
//     </>
//   )
// }

export default App
