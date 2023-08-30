import SectionSaprator from "@/components/SecSaprator";
import React, { useState } from "react";
import give1 from "../../../assets/rewards/give1.png";
import give2 from "../../../assets/rewards/give2.png";
import give3 from "../../../assets/rewards/give3.png";
import give4 from "../../../assets/rewards/give4.png";
import AbsPreiousGiveAway from "../AbsPreviousGiveAway/AbsPreiousGiveAway";
import ViewMore from "@/components/Gamings/ViewMore/ViewMore";
const PreviousGiveAways = () => {
  interface List {
    iamges: any;
    qty: any;
    title: any;
    overPara: any;
  }
  const [list, setList] = useState<List[]>([
    {
      iamges: give1,
      qty: "500 units",
      title: "Title",
      overPara:
        "audi Arabian esports tournament organiser Gamers8 has announced a prize pool of $45million for its 2023 event",
    },
    {
      iamges: give2,
      qty: "380 units",
      title: "Title",
      overPara:
        "audi Arabian esports tournament organiser Gamers8 has announced a prize pool of $45million for its 2023 event",
    },
    {
      iamges: give3,
      qty: "220 units",
      title: "Title",
      overPara:
        "audi Arabian esports tournament organiser Gamers8 has announced a prize pool of $45million for its 2023 event",
    },
    {
      iamges: give4,
      qty: "150 units",
      title: "Title",
      overPara:
        "audi Arabian esports tournament organiser Gamers8 has announced a prize pool of $45million for its 2023 event",
    },
  ]);
  return (
    <>
      <section>
        <div className="global-section-width">
          <div className="2xl:container">
            <div className="mt-[88px] mw-sm:mt-[29px]">
              <SectionSaprator title="Previous Giveaways" />
            </div>
            <div className="flex justify-between flex-wrap">
              {list.map((e, idx) => {
                return (
                  <div
                    className="w-[24%] mw-xl:w-[33%] mw-lg:w-[49%]  mb-[10px]"
                    key={idx}
                  >
                    <AbsPreiousGiveAway
                      iamges={e.iamges}
                      qty={e.qty}
                      overPara={e.overPara}
                      title={e.title}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-[16px] mb-[28px] mw-md:mb-[28px] mw-sm4:mb-[0px] text-start mw-md:text-center">
              <p className="montserratfont text-[16px] text-medium capitalize underline text-brandLightOpacity70 leading-normal">
                See More{" "}
                <span className="ml-[9px]">
                  <i className="fa-solid fa-angle-down"></i>
                </span>{" "}
              </p>
              {/* <ViewMore /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PreviousGiveAways;
