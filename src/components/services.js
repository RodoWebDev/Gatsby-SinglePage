import React from "react"
import Bounce from 'react-reveal/Bounce';

const ServicesSection = () => {

  const services = [
    {icon: "icofont-computer", title: "Lorem Ipsum", desc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'},
    {icon: "icofont-chart-bar-graph", title: "Dolor Sitema", desc: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata'},
    {icon: "icofont-earth", title: "Sed ut perspiciatis", desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'},
    {icon: "icofont-image", title: "Magni Dolores", desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
    {icon: "icofont-settings", title: "Nemo Enim", desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'},
    {icon: "icofont-tasks-alt", title: "Eiusmod Tempor", desc: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi'},
  ];
  
  const Service = (value) => {
    return (
      <Bounce bottom key={value.title}>
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
          <div className="icon"><i className={value.icon}></i></div>
          <h4 className="title"><a href="/#">{value.title}</a></h4>
          <p className="description">{value.desc}</p>
        </div>
      </Bounce>
    )
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row">
          {services.map(Service)}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection;