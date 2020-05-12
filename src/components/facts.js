import React from "react"
import Bounce from 'react-reveal/Bounce';

const FactsSection = () => {

  const facts = [
    {title: "232", sWord: "Happy Clients", word: "consequuntur quae", icon: "icofont-simple-smile"},
    {title: "521", sWord: "Projects", word: "adipisci atque cum quia aut", icon: "icofont-document-folder"},
    {title: "1,463", sWord: "Hours Of Support", word: "aut commodi quaerat", icon: "icofont-live-support"},
    {title: "15", sWord: "Hard Workers", word: "rerum asperiores dolor", icon: "icofont-users-alt-5"},
  ];
  
  const Fact = (value) => {
    return (
      <Bounce bottom key={value.sWord}>
        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
          <div className="count-box">
            <i className={value.icon}></i>
            <span data-toggle="counter-up">{value.title}</span>
            <p><strong>{value.sWord}</strong> {value.word}</p>
          </div>
        </div>
      </Bounce>
    )
  };
  
  return (
    <section className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Facts</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row no-gutters">
          {facts.map(Fact)}          
        </div>
      </div>
    </section>
  )
}

export default FactsSection;