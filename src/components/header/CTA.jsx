import React from 'react'
import CV from '../../assets/Resume.pdf'

class CTA extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeNav: props.activeNav
    }
  };

  setActiveNav = (e) => {
    this.props.getState("#contact")
    // console.log(this.props)
  }

  render() {
    return (
      <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" onClick={this.setActiveNav} className='btn btn-primary'>Let's talk</a>
      </div>
    )
  }

}

export default CTA