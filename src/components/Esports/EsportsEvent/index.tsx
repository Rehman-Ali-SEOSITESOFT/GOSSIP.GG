"use client";
import ExportsEventBanner from "./Banner";
import Bgmi from "./Bgmi";
import FilterBy from "./FilterBy";
import Others from "./Others";
import CsGo from "./Csgo";
import Valorant from "./Valorant/index";
import React from "react";

const Page = () => {
  const responsive = {
    tablet: {
      breakpoint: { max: 639, min: 360 },
      items: 1,
      paritialVisibilityGutter: 200,
      arrows: false,
    },
    tablet2: {
      breakpoint: { max: 510, min: 460 },
      items: 1,
      paritialVisibilityGutter: 150,
      arrows: false,
    },
    mobile: {
      breakpoint: { max: 460, min: 360 },
      items: 1,
      paritialVisibilityGutter: 60,
      arrows: false,
    },
  };
  return (
    <section className="exports-event pb-[88px] mw-md:pb-12	">
      <ExportsEventBanner />
      <FilterBy />
      <Valorant responsive={responsive} />
      <Bgmi responsive={responsive} />
      <CsGo responsive={responsive} />
      <Others responsive={responsive} />
    </section>
  );
};

export default Page;
