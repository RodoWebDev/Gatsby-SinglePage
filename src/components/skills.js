import React from "react"
import Bounce from 'react-reveal/Bounce';
import { ProgressBar } from "react-bootstrap";

const SkillsSection = () => {
  return (
    <section className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <Bounce bottom>
              <div className="progress">
                <span className="skill">HTML <i className="val">100%</i></span>
                <ProgressBar now={100} />
              </div>
            </Bounce>
            <Bounce bottom>
              <div className="progress">
                <span className="skill">CSS <i className="val">90%</i></span>
                <ProgressBar now={90} />
              </div>
            </Bounce>
            <Bounce bottom>
              <div className="progress">
                <span className="skill">JavaScript <i className="val">75%</i></span>
                <ProgressBar now={75} />
              </div>
            </Bounce>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <Bounce bottom>
              <div className="progress">
                <span className="skill">PHP <i className="val">80%</i></span>
                <ProgressBar now={80} />
              </div>
            </Bounce>
            <Bounce bottom>
              <div className="progress">
                <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                <ProgressBar now={90} />
              </div>
            </Bounce>
            <Bounce bottom>
              <div className="progress">
                <span className="skill">Photoshop <i className="val">55%</i></span>
                <ProgressBar now={55} />
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection;