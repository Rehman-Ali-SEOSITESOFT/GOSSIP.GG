import Image from "next/image";
import React, { useState } from "react";
import leftside from "../../assets/images/hero/hero-section-left-side.png";
import book1 from "../../assets/images/hero/right-side-01.png";
import book2 from "../../assets/images/hero/right-side-012.png";
import book3 from "../../assets/images/hero/right-side-03.png";
import styles from "./herosection.module.css";
const HeroSection = () => {
  interface List {
    name: string;
    picture: any;
  }
  const [item, setItem] = useState<List[]>([
    {
      name: "MR Luna has announced he is stepping down as CEO",
      picture: book1,
    },
    {
      name: "Esports Gambling Report, January 2023 is a big...",
      picture: book2,
    },
    {
      name: "Bayes Esports appoints York Scheunemann as COO",
      picture: book3,
    },
  ]);
  return (
    <section
      className={`pt-3 mw-md:pt-11 ${styles.herosection} mw-md:border-t border-brand dark:border-brandLightOpacity10	`}
    >
      <div className="global-section-width">
        <div className="2xl:container">
          <div className="flex mw-lg:flex-col">
            <div className="w-7/12 mw-xl:w-1/2 mw-lg:w-full ">
              <div className={styles.left_side}>
                <Image src={leftside} alt="demo" />
                <div className={styles.overlay}></div>
                <h2 className={`${styles.title} text-brandLightOpacity100`}>
                  JONATHAN Stays Loyal to BGMI, No Plans to Shift to New State
                  Mobile Yet
                </h2>
              </div>
            </div>
            <div className="w-5/12 mw-xl:w-1/2  mw-lg:w-full">
              <div className="right-side pl-8 mx-14:pl-6 mw-lg:pl-0 mw-lg:py-5">
                {item.map((elem, index) => {
                  return (
                    <div
                      className={`${styles.single_item} mw-sm:border-l-brand flex`}
                      key={index}
                    >
                      <div className={`${styles.image_wrapper}`}>
                        <Image src={elem.picture} alt="demo " />
                      </div>
                      <div className={styles.desc_wrapper}>
                        <h3 className="text-base font-bold  leading-5	 text-brandDark2 montserratfont dark:text-brandLightOpacity100">
                          {" "}
                          {elem.name}{" "}
                        </h3>
                        <p className="text-xs text-textColor robotoslub py-2.5 mx-14:py-2 mw-sm:hidden dark:text-brandLightOpacity90">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when...
                        </p>
                        <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs">
                          <span className="montserratfont">
                            {" "}
                            <i>3 hrs ago</i>{" "}
                          </span>{" "}
                          <span
                            className={`${styles.line} border-l border-l-textColorGray dark:border-l-brandLightOpacity70 montserratfont`}
                          >
                            5 min read
                          </span>
                        </small>
                      </div>
                      <div className={styles.thumnail_wrapper}>
                        <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity30  hover:bg-grayCardHover cursor-pointer rounded-3xl">
                          <i className="fa-regular fa-bookmark "></i>{" "}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
