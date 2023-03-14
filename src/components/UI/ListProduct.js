import React from "react";
import CardProduct from "../UI/CardProduct";

const ListProduct = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <CardProduct key={item.id} item={item} />
      ))}
    </>
  );
};

export default ListProduct;
