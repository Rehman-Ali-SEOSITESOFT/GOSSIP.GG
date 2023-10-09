import React, { useState } from "react";
import herobg from "../../../../assets/newsports/herobg.png";
import Image from "next/image";
import style from "./heroSection.module.css";
import LowerContentHeroSection from "./LowerContent";
import content1 from "../../../../assets/newsports/content1.png";
import content2 from "../../../../assets/newsports/content2.png";
import content3 from "../../../../assets/newsports/content3.png";
const HeroSection = () => {
  interface LOWERCONTENT {
    contentIamge: any;
    discription: String;
    para: String;
  }
  const [lowerData, setLowerData] = useState<LOWERCONTENT[]>([
    {
      contentIamge: content1,
      discription: `"The FTC was not responsible for uploading Microsoft's plans": Says FTC's Director of Public Affairs`,
      para: "A wave of key information has been pouring out from the leaked documents that were used in FTC vs. Microsoft trial. A number of ",
    },
    {
      contentIamge: content2,
      discription: `Massive Xbox-Bethesda Leaks: Xbox-Nintendo Merger, New Controller, Xbox Console Refresh`,
      para: "A wave of key information has been pouring out from the leaked documents that were used in FTC vs. Microsoft trial. A number of  ",
    },
    {
      contentIamge: content3,
      discription: `EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free Referee Stoppages, And More season`,
      para: "A wave of key information has been pouring out from the leaked documents that were used in FTC vs. Microsoft trial. A number of  ",
    },
  ]);
  return (
    <>
      <div className="relative  overflow-hidden mw-lg:hidden">
        <Image src={herobg} alt="image" />
        <div className={`${style.overlayy} overlay  absolute inset-0 `}></div>
        <div className="absolute bottom-[9px] left-[12px]">
          <h4 className="montserratfont text-[20px] font-bold leading-normal text-[#E5E5E5] pr-[18px]">
            Ubisoft&#39;s Tom Clancy&#39;s The Division 3 Announced: Ubisoft
            Massive Leading Development
          </h4>
        </div>
      </div>
      <div>
        {lowerData.map((e, idx) => {
          return (
            <LowerContentHeroSection
              key={idx}
              contentIamge={e.contentIamge}
              discription={e.discription}
              para={e.para}
            />
          );
        })}
      </div>
    </>
  );
};

export default HeroSection;
