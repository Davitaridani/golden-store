import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import producstIcon from "../../assets/data/product";

const ListKategoryProductCompt = () => {
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
                <img src={item.imgUrl} alt="" />
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
