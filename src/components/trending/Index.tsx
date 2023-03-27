"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import trendingLight from "../../assets/globals/trending-light.png";
import trendingDard from "../../assets/globals/trending-dark.png";
import styles from "./trending.module.css";
import { useTheme } from "next-themes";
const Trending = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  interface TagsList {
    name: string;
    link: string;
  }

  const [tags, setTags] = useState<TagsList[]>([
    {
      name: "Hogwarts",
      link: "/",
    },
    {
      name: "Flame Throwers",
      link: "/",
    },
    {
      name: "Hogwarts Championship",
      link: "/",
    },
    {
      name: "Fire",
      link: "/",
    },
    {
      name: "Hogwarts",
      link: "/",
    },
    {
      name: "Wizards",
      link: "/",
    },
    {
      name: "Dragons",
      link: "/",
    },
    {
      name: "Fire Balls",
      link: "/",
    },
    {
      name: "Hogwarts",
      link: "/",
    },
    {
      name: "Flame Throwers",
      link: "/",
    },
    {
      name: "Hogwarts",
      link: "/",
    },
    {
      name: "Flame Throwers",
      link: "/",
    },
    {
      name: "Hogwarts",
      link: "/",
    },
    {
      name: "Flame Throwers",
      link: "/",
    },
  ]);
  const { theme, setTheme } = useTheme();

  return (
    <section className={`${styles.trending} trending`}>
      <div className="global-section-width">
        <div className="2xl:container">
          <div className="flex items-center	">
            <div className={`${styles.trend_left}`}>
              {theme === "dark" ? 
               <Image
               src={trendingLight}
               alt="trending"
               className="inline-block w-5"
             />:
             <Image
             src={trendingDard}
             alt="trending"
             className="inline-block w-5"
           />
              }
             
              <h4
                className={`inline-block ${styles.font_styls} text-brandDark2 dark:text-brandLightOpacity100 `}
              >
                Trending:
              </h4>
            </div>
            <Slider
              {...settings}
              className={`${styles.trend_right} ${styles.trendingteass} trendingteass`}
            >
              {tags.map((item, index) => {
                return (
                  <a
                    href="#"
                    className={`${styles.tags} bg-grayCard hover:bg-grayCardHover dark:bg-brandLightOpacity10 dark:text-brandLightOpacity70 dark:hover:bg-brandLightOpacity30 `}
                    key={index}
                  >
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
