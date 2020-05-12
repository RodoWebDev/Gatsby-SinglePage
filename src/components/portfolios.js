import React, {useState} from "react"
import Bounce from 'react-reveal/Bounce';
import { useStaticQuery, graphql } from "gatsby"

const PortfolioSection = () => {
    const [filter, setFilter] = useState("All");
    const portfolioData = useStaticQuery(graphql`
        query PortfolioQuery {
            contentfulPortfolio(internalName: {eq: "Home Portfolio"}) {
                title
                description
                portfolios {
                    ... on ContentfulPortfolioItem {
                        title
                        type
                        photo {
                            file {
                                url
                            }
                        }
                    }
                }
            }
        }
    `);

    const onChangeFilter = (filter) => {
        setFilter(filter);
    };

    const Portfolio = (value) => {
        return (
            (filter === "All" || filter === value.type) &&
            <Bounce bottom key={value.title}>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src={value.photo.file.url} className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href={value.photo.file.url} data-gall="portfolioGallery" className="venobox" title={value.title}><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </Bounce>
        )
    };

    return (
        <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>{portfolioData.contentfulPortfolio.title}</h2>
            <p>{portfolioData.contentfulPortfolio.description}</p>
          </div>
          <div className="row" data-aos="fade-up">
            <Bounce bottom>
              <div className="col-lg-12 d-flex justify-content-center">
                <ul className="portfolio-flters">
                    <button className={filter === "All"?"filter-active":''} onClick={(e) => onChangeFilter("All")} href="/#">All</button>
                    <button className={filter === "App"?"filter-active":''} onClick={(e) => onChangeFilter("App")} href="/#">App</button>
                    <button className={filter === "Card"?"filter-active":''} onClick={(e) => onChangeFilter("Card")} href="/#">Card</button>
                    <button className={filter === "Web"?"filter-active":''} onClick={(e) => onChangeFilter("Web")} href="/#">Web</button>
                </ul>
              </div>
            </Bounce>
          </div>
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
            { portfolioData.contentfulPortfolio.portfolios.map(Portfolio)}
          </div>
        </div>
      </section>
    )
}

export default PortfolioSection;