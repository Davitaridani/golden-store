import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const btnToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="btn-scroll-to-top fixed-bottom">
      <Container>
        <button
          onClick={btnToTop}
          style={{ display: showTopBtn ? "block" : "none" }}
        >
          <span>
            <iconify-icon icon="ic:baseline-keyboard-double-arrow-up"></iconify-icon>
          </span>
        </button>
      </Container>
    </div>
  );
};

export default ScrollToTop;
