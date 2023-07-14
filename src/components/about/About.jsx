import React from 'react'
import './about.css'
import '../nav/nav.css'
import ME from '../../assets/race.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeNav: props.activeNav
    }
  }

  setActiveNav = (e) => {
    this.props.getState(e)
  }

  render() {
    return (
      <section id='about'>
        <div className="header">
          <h5>Get To Know Me</h5>
          <h2>About Me</h2>
        </div>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <a href="#projects" onClick={() => this.setActiveNav('#projects')} >
                <article className='about__card'>
                  <VscFolderLibrary className='about__icon' />
                  <h5>Projects</h5>
                </article>

              </a>

              <a href="#education" onClick={() => this.setActiveNav('#education')}>
                <article className='about__card'>
                  <FaAward className='about__icon' />
                  <h5>Education</h5>
                </article>
              </a>

              <a href="#experience" onClick={() => this.setActiveNav('#experience')}>
                <article className='about__card'>
                  <FiUsers className='about__icon' />
                  <h5>Experience</h5>
                </article>
              </a>

            </div>
            <p>
              Hello! I'm Jackson Konkin, a software engineering student at the University of Victoria. Currently, I'm in my third year of studies. I am deeply passionate about software development and constantly strive to enhance my skills. As a team player, I readily offer my assistance to teammates. Additionally, I possess a quick learning ability and actively seek opportunities to broaden my knowledge.
            </p>
            <a href="#contact" onClick={() => this.setActiveNav('#contact')} className='btn btn-primary'>Let's Talk</a>
          </div>



        </div>

      </section>
    )

  }

}

export default About