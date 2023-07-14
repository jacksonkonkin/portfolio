import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/headshot.png'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeNav: props.activeNav
    }
  };

  setActiveNav = (e) => {
    this.props.getState(e)
  }

  render() {
    return (
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Jackson Konkin</h1>
          <h5 className="text-light">Software Engineering Student</h5>
          <CTA getState={this.setActiveNav} />

          <div className="me">
            <img src={ME} alt="" />
          </div>

          <div className="header__socials socials__left">
            <a href="https://www.linkedin.com/in/jackson-konkin-6aab21228/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
          </div>
          <div className="header__socials socials__right">
            <a href="https://github.com/jacksonkonkin" target='_blank' rel="noreferrer"><FaGithub /></a>
          </div>
        </div>

      </header>
    )
  }
}

export default Header