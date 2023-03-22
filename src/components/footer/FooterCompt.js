import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgGradientFooter from "../../assets/img/img-gradient.png";

import imgLogo from "../../assets/img/logo.png";
// Logo Our Customer
import logoCompany1 from "../../assets/img/logo-company-1.jpg";
import logoCompany2 from "../../assets/img/logo-company-2.jpg";
import logoCompany3 from "../../assets/img/logo-company-3.jpg";
import logoCompany4 from "../../assets/img/logo-company-4.jpg";
import logoCompany5 from "../../assets/img/logo-company-5.jpg";
import logoCompany6 from "../../assets/img/logo-company-6.jpg";
import logoCompany7 from "../../assets/img/logo-company-7.jpg";
import logoCompany8 from "../../assets/img/logo-company-8.jpg";
import logoCompany9 from "../../assets/img/logo-company-9.jpg";
import logoCompany10 from "../../assets/img/logo-company-10.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import ScrollToTop from "../UI/ScrollToTop";

const FooterCompt = () => {
  const imgOurCUstomer = [
    {
      imgUrl: logoCompany1,
    },
    {
      imgUrl: logoCompany2,
    },
    {
      imgUrl: logoCompany3,
    },
    {
      imgUrl: logoCompany4,
    },
    {
      imgUrl: logoCompany5,
    },
    {
      imgUrl: logoCompany6,
    },
    {
      imgUrl: logoCompany7,
    },
    {
      imgUrl: logoCompany8,
    },
    {
      imgUrl: logoCompany9,
    },
    {
      imgUrl: logoCompany10,
    },
  ];

  return (
    <footer className="footer">
      <section className="">
        <Container className="bg-gradient">
          <Row>
            <Col
              lg="6"
              sm="12"
              className="d-flex ps-5 align-items-center info-sosmed"
            >
              <div className="text-info">
                <div className="title">
                  <h3>
                    <span> Follow Us </span> on Instagram
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam, cumque delectus. Accusantium consequatur ducimus quo
                    iusto suscipit nulla eveniet nihil, ad praesentium alias,
                    atque modi? Vitae debitis itaque explicabo saepe!
                  </p>
                </div>
                <div className="icon-sosmed d-flex align-items-center">
                  <span>
                    <iconify-icon icon="mdi:instagram"></iconify-icon>
                  </span>
                  <p className="mb-0">
                    Instagram <br />
                    <Link className="nav-link p-0">GoldenStore.id</Link>
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" sm="12" className="p-0">
              <div className="img-gradient">
                <img
                  className="w-100"
                  src={imgGradientFooter}
                  alt="Gradient Footer"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sect-our-customers">
        <Container>
          <div className="title text-center">
            <h3>Our Customers</h3>
          </div>

          <Swiper
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            speed={1500}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {imgOurCUstomer.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.imgUrl} alt="" className="img img-fluid" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>

      <section className="foot-top">
        <Container>
          <Row>
            <Col lg="3" md="6" sm={12} className="p-0">
              <div className="items-text border  border-start-0 p-3">
                <h3>Product GoldenStore.id</h3>
                <ul className="item-menu p-0">
                  <Nav.Link className="nav-link">Fruits</Nav.Link>
                  <Nav.Link className="nav-link">Fruit Juice</Nav.Link>
                  <Nav.Link className="nav-link">Fruit Salad</Nav.Link>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-0">
              <div className="items-text border border-start-0 p-3">
                <h3>Browse Fruitstore.id</h3>
                <ul className="item-menu p-0">
                  <Nav.Link className="nav-link">About Me </Nav.Link>
                  <Nav.Link className="nav-link">Contact Us</Nav.Link>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-0">
              <div className="items-text border  border-start-0 p-3">
                <h3>Product Orders</h3>
                <ul className="item-menu p-0">
                  <Nav.Link className="nav-link d-flex align-items-center items-icon">
                    <span>
                      <iconify-icon icon="ic:round-whatsapp"></iconify-icon>
                    </span>
                    <p className="mb-0">Whatsapp +62 85-0909-3000</p>
                  </Nav.Link>
                  <Nav.Link className="nav-link ">
                    <span className="d-flex align-items-center">
                      <iconify-icon icon="material-symbols:home-work-outline"></iconify-icon>
                      <p className="mb-0">Marketing Office</p>
                    </span>
                    <p className="mb-0 pt-2">
                      Jl.Diponegoro Kec.Balung Kab.Jember Jawa Timur, Indonesia
                    </p>
                  </Nav.Link>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-0">
              <div className="items-text border  border-end-0 p-3 border-start-0">
                <h3>Social Media</h3>
                <ul className="item-menu p-0">
                  <Nav.Link className="nav-link d-flex align-items-center">
                    <span>
                      <iconify-icon icon="mdi:instagram"></iconify-icon>
                    </span>
                    <p className="mb-0">instagram</p>
                  </Nav.Link>
                  <Nav.Link className="nav-link d-flex align-items-center">
                    <span>
                      <iconify-icon icon="ri:facebook-fill"></iconify-icon>
                    </span>
                    <p className="mb-0">Facebook</p>
                  </Nav.Link>
                  <Nav.Link className="nav-link d-flex align-items-center">
                    <span>
                      <iconify-icon icon="uil:twitter-alt"></iconify-icon>
                    </span>
                    <p className="mb-0">Twitter</p>
                  </Nav.Link>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="foot-bottom">
        <Container>
          <Row className="justify-content-lg-center mx-auto">
            <Col>
              <div className="items-foot d-flex align-items-center">
                <Link className="nav-link">
                  <img src={imgLogo} alt="logo footer" />
                </Link>
                <p className="mb-0">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                  temporibus repudiandae.
                </p>
              </div>
            </Col>
            <Col className=" d-flex align-items-center justify-content-end">
              <p className="mb-0 text-end">
                Copyright © 2023 GoldenStore.id All rights reserved.
              </p>
            </Col>
          </Row>
          <hr />
          <div className="text-by-web text-center">
            <p className="mb-0 ">Website Design By Ahmat Davit</p>
          </div>
        </Container>
      </section>

      <ScrollToTop />
    </footer>
  );
};

export default FooterCompt;
