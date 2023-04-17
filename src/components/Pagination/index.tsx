"use client";
import React, { useState } from "react";

import arrow from "../../assets/user-profile/back.png";
import Image from "next/image";
const Pagination = () => {
  const [page, setPage] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [selectNumber, setSelectNumber] = useState<number>(1);
  const [mobilepage, setMobilePage] = useState<number[]>([1, 2, 3, 4, 10]);

  const [mobileSelectNumber, setMobileSelectNumber] = useState<number>(1);
  const hanldeNumberSelect = (e: number) => {
    setSelectNumber(e);
  };
  const mobile = (e: number) => {
    setMobileSelectNumber(e);
  };

  return (
    <>
      <div className="2xl:container ">
        <div className="flex w-full py-[88px] mw-md:py-[70px] mw-sm:py-[50px]">
          <div className="w-[450px] m-auto">
            <div className="pagination flex justify-between items-center">
              <div className="back-arrow inline-block bg-grayCard dark:bg-brandDark1 dark:hover:bg-brandLightOpacity10 w-[32px] h-[32px] leading-[32px] flex justify-center items-center rounded-2xl cursor-pointer hover:bg-borderEditProfile">
                <Image
                  src={arrow}
                  alt="back-arrow"
                  className="	 brightness-0	dark:brightness-100	w-[8px]"
                />
              </div>
              <div className="mw-sm1:hidden count-number flex items-center justify-between w-[calc(100%_-_100px)]	">
                {page.map((element, index) => {
                  return index === 5 ? (
                    <span
                      key={index}
                      className="inline-block w-[25px] h-[25px]  montserratfont font-normal text-base rounded-2xl	 leading-5 text-brandDark2	dark:text-brandLightOpacity100  text-center leading-[30px] 	"
                    >
                      ...
                    </span>
                  ) : (
                    <span
                      key={index}
                      className={`inline-block w-[32px] h-[32px]  montserratfont font-normal text-base rounded-2xl	leading-5 text-brandDark2	dark:text-brandLightOpacity100  text-center leading-[30px] cursor-pointer	  border ${
                        selectNumber === index
                          ? " dark:bg-brandLightOpacity10 bg-white  border-brandDark2 dark:border-brandLightOpacity100 "
                          : "bg-none border-none"
                      }`}
                      onClick={() => hanldeNumberSelect(index)}
                    >
                      {element}
                    </span>
                  );
                })}
              </div>
              <div className="hidden mw-sm1:flex count-number  items-center justify-between w-[calc(100%_-_100px)]	">
                {mobilepage.map((element, index) => {
                  return index === 3 ? (
                    <span
                      key={index}
                      className={`inline-block w-[25px] h-[25px]  montserratfont font-normal text-base rounded-2xl	 leading-5 text-brandDark2	dark:text-brandLightOpacity100  text-center leading-[30px]`}
                    >
                      ...
                    </span>
                  ) : (
                    <span
                      key={index}
                      className={`inline-block w-[30px] h-[30px]  montserratfont font-normal text-base rounded-2xl leading-[30px] text-brandDark2 border	dark:text-brandLightOpacity100  text-center cursor-pointer ${
                        mobileSelectNumber === index
                          ? " dark:bg-brandLightOpacity10  border-brandDark2 dark:border-brandLightOpacity100 "
                          : "bg-none border-none"
                      }`}
                      onClick={() => mobile(index)}
                    >
                      {element}
                    </span>
                  );
                })}
              </div>
              <div className="next-arrow inline-block bg-grayCard hover:bg-borderEditProfile  dark:bg-brandDark1 dark:hover:bg-brandLightOpacity10 w-[31px] h-[32px] leading-[32px] flex justify-center items-center  rounded-2xl rotate-180	cursor-pointer pr-[2px]">
                <Image
                  src={arrow}
                  alt="back-arrow"
                  className="brightness-0	dark:brightness-100	w-[8px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
