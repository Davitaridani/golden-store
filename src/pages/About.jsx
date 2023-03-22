import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cardAbout from "../assets/data/dataAbout";
import SectionBanner from "../components/UI/SectionBanner";
import imgAbout from "../assets/img/img-about.jpg";
import Helmet from "../components/Helmet/Helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Helmet title="About">

      <div className="banner-about" >
        <Container>
          <div className="img-banner"
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={imgAbout}
              alt="Banner"
              className="img-fluid w-100"
            />
          </div>
        </Container>
        <SectionBanner titleBanner="About Me" />
      </div>

      <Container>
        <div className="title text-center">
          <h3>Profile Golden</h3>
        </div>
        <Row>
          <Col lg="8" className="mx-auto">
            <div className="text-about text-center">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere earum, quod nulla accusantium laboriosam quia temporibus voluptatibus veniam aut doloribus.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam explicabo dolorum voluptatem adipisci hic sit aperiam perferendis ea esse, consequatur, temporibus delectus est possimus inventore fuga, vitae quam. Odit corporis temporibus voluptatibus veniam aut doloribus consequatur dolorum rerum optio architecto.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique pariatur sapiente cumque deleniti, accusamus ipsam molestiae natus dolorem dicta ipsum debitis aspernatur aut perferendis, sint totam iste necessitatibus quis eius facere enim suscipit. Veniam, voluptatem et ullam laboriosam iste nihil debitis cum praesentium, corporis aliquam saepe minima !</p>
            </div>
          </Col>
        </Row>

        <Row className="card-services justify-content-center">
          {
            cardAbout.map((item) => (
              <Col className="card-about" lg="4" md="6" sm="12" key={item.id}>
                <div className="card border-0 text-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={item.delayAos}
                  data-aos-offset="200"
                >
                  <div className="icon mx-auto" data-aos="zoom-in" data-aos-delay={item.delayIcon} data-aos-duration="1000" data-aos-offset="200">
                    <iconify-icon className="" icon={item.icon}></iconify-icon>
                  </div>
                  <div className="items-text">
                    <div className="tilte-card">
                      <h3>{item.titleName}</h3>
                    </div>
                    <div className="desc">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </Helmet>
  );

}

export default About;
