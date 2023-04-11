import React, { useState } from "react";
import img1 from "../../../assets/esports/valorant-01.png";
import img2 from "../../../assets/esports/valorant-02.png";
import img3 from "../../../assets/esports/valorant-03.png";
import img4 from "../../../assets/esports/valorant-04.png";

import icon1 from "../../../assets/esports/v-mask-01.png";
import icon2 from "../../../assets/esports/v-mask-02.png";
import icon3 from "../../../assets/esports/v-mask-03.png";
import icon4 from "../../../assets/esports/v-mask-04.png";
import Image from "next/image";
const Valorant = () => {
  interface List {
    image: any;
    title: string;
    icon_img: any;
  }
  const [item, setTiems] = useState<List[]>([
    {
      image: img1,
      title: "Valorant Champion Cup II",
      icon_img: icon1,
    },
    {
      image: img2,
      title: "Break of First Light",
      icon_img: icon2,
    },
    {
      image: img3,
      title: "TEC Valorant 1v1 Gold Series",
      icon_img: icon3,
    },
    {
      image: img4,
      title: "Wolfoxy - Valorant 5X5 - #382",
      icon_img: icon4,
    },
  ]);
  return (
    <div className="valorant-component">
      <div className="global-section-width">
        <div className="2xl:container">
          <div className="flex  justify-between  flex-wrap">
            {item.map((ele, index) => {
              return (
                <div
                  key={index}
                  className="w-[300px] max-w-[24%] rounded border  dark:border-brandLightOpacity10 bg-white hover:border-brandDark1 hover:dark:border-brand hover:dark:shadow-[0_0_8px_0_#ed4e50] hover:shadow-[0_0_8px_0_#e5e5e5] m-1 dark:bg-brandDark1 border-inherit dark:border-brandDark1 border  p-2.5"
                >
                  <div className="img-wrapper">
                    <Image src={ele.image} alt={ele.title} />
                  </div>
                  <div className="detail">
                    <h4 className="text-brandDark2 dark:text-brandLightOpacity100  font-bold montserratfont texe-base leading-5   pt-4">
                      {ele.title}
                    </h4>
                    <div className="flex flex-row  pt-2.5 ">
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
                          <span className="h-1 w-1 text-brandDark2  dark:text-brandLightOpacity10 text-xs montserratfont	leading-[15px] inline-block rounded-full ml-[7px] mr-[8px]"></span>{" "}
                          Prizepool $4500
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center items-center pt-3">
                      <p className="text-brandDark2 dark:text-brandLightOpacity100  font-medium pr-1.5 ">
                        registration open
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valorant;
