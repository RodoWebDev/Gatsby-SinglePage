import React from "react"
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
  </Layout>
  );
};

export default IndexPage
