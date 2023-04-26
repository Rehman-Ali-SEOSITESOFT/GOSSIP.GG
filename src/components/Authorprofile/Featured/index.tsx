import Pagination from "@/components/Pagination";
import React, { useState } from "react";
import img1 from "../../../assets/user-saved/1.png";
import img2 from "../../../assets/user-saved/2.png";
import img3 from "../../../assets/user-saved/3.png";
import img4 from "../../../assets/user-saved/4.png";
import img5 from "../../../assets/user-saved/5.png";
import img6 from "../../../assets/user-saved/6.png";
import img7 from "../../../assets/user-saved/7.png";
import bookmark from "../../../assets/author-profile/bookmark.png";

import bookmakred from "../../../assets/user-for-you/fill-bookmark.png";
import Image from "next/image";

const FeaturedAuhor = () => {
  const items = [img1, img2, img3, img4, img5, img6, img7];
  return (
    <>
      <div className="saved-component">
        <div className="items flex flex-wrap  justify-between mw-12:justify-between">
          {items.map((ele, index) => {
            return (
              <div
                className={`item p-4 mw-sm:p-2 rounded-sm w-[328px] h-[328px] mw-12:h-auto mw-11:max-w-[32%]  dark:bg-brandDark1 bg-white border border-grayCard mw-md:max-w-[48%] 	flex flex-col justify-between mx-14:mr-12 mw-md:h-auto  mw-xl:mr-8 mw-12:mr-0  ${
                  index === 9 || index === 10 || index === 6
                    ? "mb-0"
                    : "mb-12 mw-md:mb-8"
                }`}
                key={index}
              >
                <div className="save-img-wrap ">
                  <Image src={ele} alt="Imag" className="m-auto" />
                </div>
                <div className="save-title-wrap">
                  <h4 className="montserratfont font-bold text-base leading-5 dark:text-brandLightOpacity100 text-brandDark2 foryou-user-title mw-12:my-4 mw-sm:my-2 mw-sm:text-sm ">
                    Check out the Great Indian Amazon Sale this month from this
                    day onw...
                  </h4>
                </div>
                <div className="save-tagss-wrap flex justify-between items-end ">
                  <div className="flex ">
                    <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                      News
                    </div>
                    <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                      Esports
                    </div>
                  </div>
                  <div className="icon  cursor-pointer">
                    <Image
                      src={bookmakred}
                      alt="bookmarked"
                      className="brightness-0	dark:brightness-100"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default FeaturedAuhor;
