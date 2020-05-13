import React from "react"
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import Layout from "../components/layout"
import SEO from "../components/seo"
import TestimonialSection from "../components/testimonial";
import PortfolioSection from "../components/portfolios";
import AboutSection from "../components/about";
import FactsSection from "../components/facts";
import SkillsSection from "../components/skills";
import ResumeSection from "../components/resume";
import ServicesSection from "../components/services";
import HeroSection from "../components/hero";
import ContactSection from "../components/contact";

const IndexPage = () => { 
  return (
  <Layout>
    <SEO title="Home" />    
    <HeroSection />
    <div className="main">
      <AboutSection />
      <FactsSection />
      <SkillsSection />
      <ResumeSection />
      < PortfolioSection/>     
      <ServicesSection />
      <TestimonialSection />
      <ContactSection />
    </div>
    <ScrollUpButton 
      style={{
        width: 40,
        height: 40,
        background: '#149ddd',
        border: '10px solid #149ddd',
        borderRadius: '50%',
        fill: '#fff',
        right: 15,
        bottom: 15
      }}
    />
  </Layout>
  );
};

export default IndexPage
