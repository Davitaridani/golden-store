import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const CardProduct = ({ item }) => {
  return (
    <Col lg="3" md="6" sm="12">
      <div className="card-products">
        <div className="img-product">
          <img src={item.imgUrl} alt="card-product" className="img-product" />
        </div>
        <div className="card-info text-center">
          <div className="product-title">
            <h3 className="text-capitalize">{item.productName}</h3>
          </div>
          <Link className="btn btn-card" to={`/product/${item.id}`}>
            Detail Product
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default CardProduct;
