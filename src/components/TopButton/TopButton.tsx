"use client";
import React, { useEffect, useState } from "react";
import arrowup from "../../assets/livematchessstags/arrow-up.png";
import Image from "next/image";
import "./TopButton.css";
const TopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="global-section-width">
        <div className="2xl-container">
          <div className=" top-to-btm">
            {showTopBtn && (
              <Image
                src={arrowup}
                alt="arrow up"
                className="icon-position icon_style"
                onClick={goToTop}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopButton;
