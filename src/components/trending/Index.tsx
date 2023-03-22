"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import trendingLight from "../../assets/globals/trending-light.png";
import trendingDard from "../../assets/globals/trending-dark.png";
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
  return (
    <section className="trending">
      <div className="global-section-width">
        <div className="2xl:container">
          <div className="flex items-center	">
            <div className="trend--left">
              <Image
                src={trendingDard}
                alt="trending"
                className="inline-block w-5"
              />
              <h4 className="inline-block font-styls text-brandDark2">
                Trending:
              </h4>
            </div>
            <Slider {...settings} className="trend--right trendingteass">
              {tags.map((item, index) => {
                return (
                  <a
                    href="#"
                    className="tags bg-grayCard hover:bg-grayCardHover"
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
