import React from "react";
import NavbarCompt from "../navbar/NavbarCompt";
import Routers from "../../routers/Routers";
import FooterCompt from "../footer/FooterCompt";

const MainLayout = () => {
  return (
    <div className="main-layouts">
      <NavbarCompt />
      <div>
        <Routers />
      </div>
      <FooterCompt />
    </div>
  );
};

export default MainLayout;
