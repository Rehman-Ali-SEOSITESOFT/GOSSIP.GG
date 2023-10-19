"use client";
import React, { useEffect, useState } from "react";
import arrowup from "../../assets/livematchessstags/arrow-up.png";
import Image from "next/image";
import "./TopButton.css";
const TopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  let scroll_position = 0;
  let scroll_direction;

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      scroll_direction =
        document.body.getBoundingClientRect().top < scroll_position
          ? setShowTopBtn(false)
          : setShowTopBtn(true);
      scroll_position = document.body.getBoundingClientRect().top;
      console.log(scroll_direction, "scroll dir");
      console.log(scroll_position, "scroll directions");
    });
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 0) {
  //       setShowTopBtn(false);
  //       console.log("scroll is none");
  //     } else if (window.scrollY < 200) {
  //       setShowTopBtn(true);
  //       console.log("scroll is here");
  //     }
  //   });
  // }, []);
  // const goToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrolledToBottom =
  //       window.innerHeight + window.scrollY <= document.body.offsetHeight - 100;

  //     if (window.scrollY - window.innerHeight <= 0) {
  //       setIsVisible(true);
  //       console.log(window.innerHeight, "scroll is unactive");
  //       console.log(window.scrollY - window.innerHeight, "total");
  //     } else {
  //       console.log(scrolledToBottom, "scroll is active");
  //       setIsVisible(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <div className=" top-to-btm">
        {showTopBtn && (
          <Image
            src={arrowup}
            alt="arrow up"
            className="icon-position icon_style"
            onClick={scrollToTop}
          />
        )}
      </div>

      {/* {isVisible && (
        <Image
          src={arrowup}
          alt="arrow up"
          className="icon_style"
          onClick={scrollToTop}
        />
      )} */}
    </>
  );
};

export default TopButton;
