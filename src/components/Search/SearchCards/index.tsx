import Pagination from "@/components/Pagination";
import React, { useState } from "react";
import img1 from "../../../assets/user-saved/1.png";
import img2 from "../../../assets/user-saved/2.png";
import img3 from "../../../assets/user-saved/3.png";
import img4 from "../../../assets/user-saved/4.png";
import img5 from "../../../assets/user-saved/5.png";
import img6 from "../../../assets/user-saved/6.png";
import img7 from "../../../assets/user-saved/7.png";
import img8 from "../../../assets/user-saved/8.png";
import img9 from "../../../assets/user-saved/9.png";
import img10 from "../../../assets/user-saved/10.png";
import img11 from "../../../assets/user-saved/11.png";
import img12 from "../../../assets/user-saved/12.png";
import bookmakred from "../../../assets/user-for-you/fill-bookmark.png";
import bookmarkLight from "../../../assets/gaming/bookmark.png";
import bookmarkDark from "../../../assets/gaming/bookmark-dark.png";
import Image from "next/image";
import { useTheme } from "next-themes";
const SearchCard = () => {
  const items = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  return (
    <section className="user-section-width">
        <div className="mt-[48px]">
          <p className="montserratfont text-base font-semibold text-brandDark2 dark:text-brandLightOpacity100">Showing results for:</p>
          <p className="montserratfont pt-[14px] text-2xl font-bold text-brandDark2 dark:text-brandLightOpacity100">Hogwarts Championship</p>
          <p className="montserratfont pt-[12px] pb-[48px] text-lg font-normal text-brandDark2 dark:text-brandLightOpacity100">1-15 of 237 results</p>
        </div>
      <div className="saved-component">
        <div className="items flex flex-wrap justify-between">
          {items.map((ele, index) => {
            return (
              <div
                className={`item py-4 rounded-sm w-[328px] h-[328px]  dark:bg-brandDark1 bg-white border border-grayCard	flex flex-col justify-between ${
                  index === 9 || index === 10 || index === 11 ? "mb-0" : "mb-12"
                }`}
                key={index}
              >
                <div className="save-img-wrap">
                  <Image src={ele} alt="Imag" className="m-auto" />
                </div>
                <div className="save-title-wrap">
                  <h4 className="montserratfont font-bold text-base leading-5 dark:text-brandLightOpacity100 text-brandDark2  pl-4">
                    Check out the Great Indian Amazon Sale this month from this
                    day onw...
                  </h4>
                </div>
                <div className="save-tagss-wrap flex justify-between items-center px-4">
                  <div className="flex  ">
                    <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                      News
                    </div>
                    <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                      Esports
                    </div>
                  </div>
                  {/* <div className="icon  cursor-pointer">
                    <Image
                      src={bookmakred}
                      alt="bookmarked"
                     className="brightness-0	dark:brightness-100"
                    />
                  </div> */}
                  <div className="flex flex-row items-center justify-center">
                  <span className="montserratfont pr-[12px] italic text-xs dark:text-brandLightOpacity70 text-brandDark2">1 month ago</span>
                  <div className="bookmark text-textColorGray hover:text-textColor  dark:text-brandLightOpacity70 dark:hover:text-brandLightOpacity100 w-[12px]">
                     
                      <Image
                        src={bookmarkLight}
                        alt="book"
                        className=" brightness-0 opacity-80 hover:opacity-100  dark:brightness-200"
                      />
                    </div>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Pagination />
    </section>
  );
};

export default SearchCard;
