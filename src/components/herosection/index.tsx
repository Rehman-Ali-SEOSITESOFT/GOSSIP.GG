import Image from "next/image";
import React from "react";
import leftside from "../../assets/images/hero/hero-section-left-side.png";
import book1 from "../../assets/images/hero/right-side-01.png";
import book2 from "../../assets/images/hero/right-side-012.png";
import book3 from "../../assets/images/hero/right-side-03.png";
const HeroSection = () => {
  return (
    <section className="herosection">
      <div className="global-section-width">
        <div className="2xl:container">
          <div className="flex">
            <div className="w-7/12">
              <div className="left-side">
                <Image src={leftside} alt="demo" />
                <h2>
                  JONATHAN Stays Loyal to BGMI, No Plans to Shift to New State
                  Mobile Yet
                </h2>
              </div>
            </div>
            <div className="w-5/12">
              <div className="right-side">
                {["", "", ""].map((e, i) => {
                  return (
                    <div className="single-item flex" key={i}>
                      <div className="image-wrapper ">
                        <Image src={book1} alt="demo " className=" " />
                      </div>
                      <div className="desc-wrapper">
                        <h3 className="text-base font-bold text-brandDark2 cu_font_family">
                          MR Luna has announced he is stepping down as CEO{" "}
                        </h3>
                        <p className="text-xs text-textColor roboto_slab">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when...
                        </p>
                        <small className="text-textColorGray text-xs">
                          <span>3 hrs ago </span> <span>5 min read</span>
                        </small>
                      </div>
                      <div className="thumnail-wrapper">
                        <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard hover:bg-grayCardHover cursor-pointer rounded-3xl">
                          <i className="fa-regular fa-bookmark"></i>{" "}
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="single-item flex">
                  <div className="image-wrapper">
                    <Image src={book1} alt="demo" />
                  </div>
                  <div className="desc-wrapper">
                    <h3>MR Luna has announced he is stepping down as CEO </h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when...
                    </p>
                    <p>
                      <span>3 hrs ago </span> <span>5 min read</span>
                    </p>
                  </div>
                  <div className="thumnail-wrapper">
                    <div className="bookmark">
                      <i className="fa-regular fa-bookmark"></i>{" "}
                    </div>
                  </div>
                </div>
                <div className="single-item">
                  <div className="image-wrapper">
                    <Image src={book2} alt="demo" />
                  </div>
                  <div className="desc-wrapper">
                    <h3>MR Luna has announced he is stepping down as CEO </h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when...
                    </p>
                    <p>
                      <span>3 hrs ago </span> <span>5 min read</span>
                    </p>
                  </div>
                  <div className="thumnail-wrapper">
                    <div className="bookmark">
                      <i className="fa-regular fa-bookmark"></i>{" "}
                    </div>
                  </div>
                </div>
                <div className="single-item">
                  <div className="image-wrapper">
                    <Image src={book3} alt="demo" />
                  </div>
                  <div className="desc-wrapper">
                    <h3>MR Luna has announced he is stepping down as CEO </h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when...
                    </p>
                    <p>
                      <span>3 hrs ago </span> <span>5 min read</span>
                    </p>
                  </div>
                  <div className="thumnail-wrapper">
                    <div className="bookmark">
                      <i className="fa-regular fa-bookmark"></i>{" "}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
