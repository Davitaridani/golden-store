import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import producstIcon from "../../assets/data/product";
import AOS from "aos";
import "aos/dist/aos.css";

const ListKategoryProductCompt = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Container>
        <Row className="gap-0">
          {producstIcon.map((item) => (
            <Col
              lg="2"
              className="justify-content-center items-kategory-product text-center d-inline-block col-6 mb-3"
              key={item.id}
            >
              <div className="icon-product">
                <img
                  src={item.imgUrl}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration={item.durationAos}
                  data-aos-delay={item.delayAos}
                />
              </div>
              <div className="name-product">
                <h3>{item.productName}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ListKategoryProductCompt;
