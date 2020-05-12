import React from "react"
import Typing from "react-typing-animation";

import heroBackground from '../static/images/hero-bg.jpg';

const HeroSection = () => {
    return (
      <section className="hero d-flex flex-column justify-content-center align-items-center" style={{backgroundImage:  `url(${heroBackground})`}}>
      <div className="hero-container" data-aos="fade-in">
        <h1>Alex Smith</h1>
        <div className="before_word">I'm<i> </i>
        <Typing loop className="type_effect">
          <Typing.Reset count={1} delay={500} />
          <span>Designer</span>
          <Typing.Backspace count={9} delay={1000} />
          <Typing.Reset count={1} delay={500} />
          <span>Developer</span>
          <Typing.Backspace count={10} delay={1000} />
          <Typing.Reset count={1} delay={500} />
          <span>Freelancer</span>
          <Typing.Backspace count={11} delay={1000} />
          <Typing.Reset count={1} delay={500} />
          <span>Photographer</span>
          <Typing.Backspace count={13} delay={1000} />
        </Typing>
        </div> 
      </div>
    </section>
    )
}

export default HeroSection;