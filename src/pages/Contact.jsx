import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionBanner from "../components/UI/SectionBanner";
import imgContact from "../assets/img/img-contact.jpg";
import Helmet from "../components/Helmet/Helmet";
import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Helmet title="Contact">

      <div className="banner-contact">
        <Container>
          <div className="img-banner"
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine">
            <img
              src={imgContact}
              alt="Banner"
              className="img img-fluid w-100"
            />
          </div>
        </Container>
        <SectionBanner titleBanner="Contact Me" />
      </div>

      <section className="sect-2-contact">
        <Container>
          <div className="item-text text-center">
            <h3>Hubunggi Kami Melalui WhatsApp Kami 24/7</h3>
            <p>Tim marketing kami akan siap membantu anda mencari produk yang anda butuhkan.</p>
          </div>
          <div className="items-whatsapp text-center">
            <Link to="#" className="nav-link">
              <div className="icon">
                <iconify-icon icon="logos:whatsapp-icon"></iconify-icon>
              </div>
              <span>
                +62 821-0994-0000
              </span>
              <p>(Klik untuk mengubungi)</p>
            </Link>
          </div>
          <hr />

          <div className="items-location text-center">
            <h3>Alamat Toko Kami</h3>
            <Link to="#" className="nav-link">
              <p>Jl. Diponegoro No.999, Kec. Balung <br />
                Jember, Jawa Timur 61567, Indonesia
              </p>
              <div className="icon">
                <iconify-icon icon="material-symbols:location-on"></iconify-icon>
              </div>
              <p>Klik untuk lihat di Google Map</p>
            </Link>
          </div>

        </Container>
      </section>

    </Helmet>
  );
};

export default Contact;
