import React from "react";

const Helmet = (props) => {
  document.title = `Golden Store - ${props.title}`;

  return <div>{props.children}</div>;
};

export default Helmet;
