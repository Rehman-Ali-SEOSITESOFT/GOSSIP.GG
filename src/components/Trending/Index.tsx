"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import trendingLight from "../../assets/globals/trending-light.png";
import trendingDard from "../../assets/globals/trending-dark.png";
import styles from "./trending.module.css";
import { useTheme } from "next-themes";
import Link from "next/link";
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
          arrows: true,
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
      link: "/tag-search",
    },
    {
      name: "Flame Throwers",
      link: "/tag-search",
    },
    {
      name: "Hogwarts Championship",
      link: "/tag-search",
    },
    {
      name: "Fire",
      link: "/tag-search",
    },
    {
      name: "Hogwarts",
      link: "/tag-search",
    },
    {
      name: "Wizards",
      link: "/tag-search",
    },
    {
      name: "Dragons",
      link: "/tag-search",
    },
    {
      name: "Fire Balls",
      link: "/tag-search",
    },
    {
      name: "Hogwarts",
      link: "/tag-search",
    },
    {
      name: "Flame Throwers",
      link: "/tag-search",
    },
    {
      name: "Hogwarts",
      link: "/tag-search",
    },
    {
      name: "Flame Throwers",
      link: "/tag-search",
    },
    {
      name: "Hogwarts",
      link: "/tag-search",
    },
    {
      name: "Flame Throwers",
      link: "/tag-search",
    },
  ]);
  const { theme, setTheme } = useTheme();

  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);

  return (
    <section className={`${styles.trending} trending `}>
      <div className="global-section-width">
        <div className="2xl:container">
          <div className="flex items-center	">
            <div className={`${styles.trend_left}`}>
              <Image
                src={trendingLight}
                alt="trending"
                className={` inline-block w-5  brightness-0 dark:brightness-100		`}
              />

              <h4
                className={`inline-block ${styles.font_styls} text-brandDark2 dark:text-brandLightOpacity100 `}
              >
                Trending:
              </h4>
            </div>
            <Slider
              {...settings}
              className={`${styles.trend_right} ${
                styles.trendingteass
              } trendingteass ${
                isDarkTheme === "dark" ? " dark-arrow" : " light-arrow"
              }`}
            >
              {tags.map((item, index) => {
                return (
                  <Link
                    href={item.link}
                    className={`${styles.tags} bg-grayCard 
                    text-textColorGray hover:text-brandDark2 hover:bg-borderEditProfile dark:bg-brandLightOpacity10 dark:text-brandLightOpacity70 
                    dark:hover:text-brandLightOpacity100
                    dark:hover:bg-brandLightOpacity20 `}
                    key={index}
                  >
                    <span>{item.name}</span>
                  </Link>
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
