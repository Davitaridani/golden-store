import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const CardProduct = ({ item }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Col lg="3" md="6" sm="12">
      <div className="card-products">
        <div
          className="img-product"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay={item.delayAos}
          data-aos-offset="100"
        >
          <img
            src={item.imgUrl}
            alt="card-product"
            className="img-product img-fluid"
          />
        </div>
        <div className="card-info text-center">
          <div className="product-title">
            <h3 className="text-capitalize">{item.productName}</h3>
          </div>
          <Link className="btn-card" to={`/product/${item.id}`}>
            Detail Product
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default CardProduct;
