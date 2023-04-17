import React, { useState } from "react";
import img1 from "../../../../assets/esports/other-01.png";
import img2 from "../../../../assets/esports/other-02.png";
import img3 from "../../../../assets/esports/other-03.png";
import img4 from "../../../../assets/esports/other-04.png";
import img5 from "../../../../assets/esports/other-05.png";
import img6 from "../../../../assets/esports/other-06.png";
import img7 from "../../../../assets/esports/other-07.png";
import img8 from "../../../../assets/esports/other-08.png";

import icon1 from "../../../../assets/esports/v-mask-01.png";
import icon2 from "../../../../assets/esports/b-mask-02.png";
import icon3 from "../../../../assets/esports/v-mask-03.png";
import Link from "next/link";
import chevronsright from "../../../../assets/esports/chevrons-right.png";
import Image from "next/image";
import SectionSaprator from "@/components/SecSaprator";
const Others = () => {
  interface List {
    image: any;
    title: string;
    icon_img: any;
  }
  const [item, setTiems] = useState<List[]>([
    {
      image: img1,
      title: "DOTA Pro Circuit 2023 Tour 1.",
      icon_img: icon3,
    },
    {
      image: img2,
      title: "UMG Apex Legends Pro League",
      icon_img: icon2,
    },
    {
      image: img3,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img4,
      title: "AMD Presents Super Fan Cup",
      icon_img: icon1,
    },
    {
      image: img5,
      title: "AMD Presents Super Fan Cup",
      icon_img: icon1,
    },
    {
      image: img6,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img7,
      title: "UMG Apex Legends Pro League",
      icon_img: icon2,
    },
    {
      image: img8,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img1,
      title: "DOTA Pro Circuit 2023 Tour 1.",
      icon_img: icon3,
    },
    {
      image: img2,
      title: "UMG Apex Legends Pro League",
      icon_img: icon2,
    },
    {
      image: img3,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img4,
      title: "AMD Presents Super Fan Cup",
      icon_img: icon1,
    },
    {
      image: img5,
      title: "AMD Presents Super Fan Cup",
      icon_img: icon1,
    },
    {
      image: img6,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img7,
      title: "UMG Apex Legends Pro League",
      icon_img: icon2,
    },
    {
      image: img8,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img1,
      title: "DOTA Pro Circuit 2023 Tour 1.",
      icon_img: icon3,
    },
    {
      image: img2,
      title: "UMG Apex Legends Pro League",
      icon_img: icon2,
    },
    {
      image: img3,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img4,
      title: "AMD Presents Super Fan Cup",
      icon_img: icon1,
    },
    {
      image: img5,
      title: "AMD Presents Super Fan Cup",
      icon_img: icon1,
    },
    {
      image: img6,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img7,
      title: "UMG Apex Legends Pro League",
      icon_img: icon2,
    },
    {
      image: img8,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
  ]);
  const [itemLimit, setItemLimit] = useState<number>(8);
  const hanldeIncreaseOtherCards = () => {
    setItemLimit(itemLimit + 8);
  };
  const hanldeBacktoTop = () => {
    setItemLimit(8);
  };
  return (
    <div className="others-component">
      <div className="global-section-width">
        <div className="pt-16">
          <SectionSaprator title="OTHERS" />
        </div>

        <div className="2xl:container">
          <div className="flex  justify-between  flex-wrap ">
            {item.slice(0, itemLimit).map((ele, index) => {
              return (
                <Link
                href="/esports/event-details"
                key={index}
                  className="w-[300px] max-w-[24%] rounded   dark:border-brandLightOpacity10 bg-white hover:border-brandDark1 hover:dark:border-brand hover:dark:shadow-[0_0_8px_0_#ed4e50] hover:shadow-[0_0_8px_0_#e5e5e5] m-1 dark:bg-brandDark1 border-inherit dark:border-brandDark1 border  p-2.5 mb-8"
                >
                  <div className="img-wrapper h-[150px]">
                    <Image
                      src={ele.image}
                      alt={ele.title}
                      className="w-full h-full rounded-sm	"
                    />
                  </div>
                  <div className="detail">
                    <h4 className="text-brandDark2 dark:text-brandLightOpacity100  font-bold montserratfont texe-base leading-5   pt-4">
                      {ele.title}
                    </h4>
                    <div className="flex flex-row  py-2.5 ">
                      <div className="icon-img w-[40px] h-[40px]">
                        <Image
                          src={ele.icon_img}
                          alt={ele.title}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col pl-2">
                        <p className="text-brandDark2 dark:text-brandLightOpacity100 text-xs montserratfont	leading-[15px]  font-medium ">
                          DEC 02, 2022 - JAN 18, 2023
                        </p>
                        <p className=" text-brandDark2 dark:text-brandLightOpacity100 font-medium pt-1.5 flex items-center text-xs montserratfont leading-[15px]">
                          South Asia
                          <span className="h-1 w-1 bg-brandDark2 opacity-70 dark:opacity-100    dark:bg-brandLightOpacity100 inline-block rounded-full ml-[7px] mr-[8px]"></span>
                          Prizepool $4500
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center items-center pt-3 border-t border-grayCard dark:border-brandLightOpacity10">
                      <a
                        href="#"
                        className="montserratfont font-medium  text-xs leading-[15px]  capitalize  text-brandDark2 dark:text-brandLightOpacity100  "
                      >
                        registration open{" "}
                        <Image
                          src={chevronsright}
                          alt="arro"
                          className="inline-block ml-4 mt-[-1px]"
                        />
                      </a>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {item.length === itemLimit ? (
            <div className="w-fit m-auto	 pt-14 text-center ">
              <p
                className="text-textColorGray dark:text-brandLightOpacity70 montserratfont font-base  leading-5 font-medium	 dark:hover:text-white underline
              dark:hover:decoration-white 
              hover:decoration-black 
              hover:text-black cursor-pointer"
                onClick={hanldeBacktoTop}
              >
                <span className="view-more "> Back to Top</span>
              </p>
            </div>
          ) : (
            <div className="w-fit m-auto	 pt-14 text-center ">
              <p
                className="text-textColorGray dark:text-brandLightOpacity70 montserratfont font-base  leading-5 font-medium	 dark:hover:text-white underline
              dark:hover:decoration-white 
              hover:decoration-black 
              hover:text-black cursor-pointer"
                onClick={hanldeIncreaseOtherCards}
              >
                <span className="view-more "> Load more</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Others;
