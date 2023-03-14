import React from "react";
import { Container } from "react-bootstrap";

const SectionBanner = ({ titleBanner }) => {
  return (
    <div className="">
      <Container fluid className="p-0">
        <div className="title-banner text-center">
          <h3>{titleBanner}</h3>
        </div>
      </Container>
    </div>
  );
};

export default SectionBanner;
