import React from "react"
import Slider from 'react-slick';
import Bounce from 'react-reveal/Bounce';
import { useStaticQuery, graphql } from "gatsby"

const TestimonialSection = () => {
    const testimonialData = useStaticQuery(graphql`
        query TestimonialQuery {
            contentfulTestimonial(internalName: {eq: "Home Testimonial"}) {
                description
                title
                testimonials {
                    ... on ContentfulTestimonialItem {
                        photo {
                            file {
                                url
                            }
                        }
                        quote {
                            content {
                                content {
                                    value
                                }
                            }
                        }
                        customerName
                        customerJob
                    }
                }
            }
        }
  `);

    const settings = {
        dots: true,
        infinite: true,
        initialSlide: 1,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    const testimonial = (value) => {
        return (
            <Bounce bottom key={value.customerName}>
                <div className="testimonial-item" data-aos="fade-up">
                    <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {value.quote.content[0].content[0].value}
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src={value.photo.file.url} className="testimonial-img" alt=""/>
                    <h3>{value.customerName}</h3>
                    <h4>{value.customerJob}</h4>
                </div>
            </Bounce>
        )
    };
    return (
        <section id="testimonials" className="testimonials section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>{testimonialData.contentfulTestimonial.title}</h2>
                    <p>{testimonialData.contentfulTestimonial.description}</p>
                </div>
                <div className="owl-carousel testimonials-carousel">
                    <Slider className='horizontalSlider' {...settings}>
                        {testimonialData.contentfulTestimonial.testimonials.map(testimonial)}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;