import React from "react";

import arrow from "../../assets/user-profile/back.png";
import Image from "next/image";
const Pagination = () => {
  return (
    // user-section-width
    <>
      <div className="2xl:container ">
        <div className="flex w-full py-[88px]">
          <div className="w-[450px] m-auto">
            <div className="pagination flex justify-between items-center">
              <div className="back-arrow inline-block bg-grayCard dark:bg-brandLightOpacity10 w-[32px] h-[32px] leading-[32px] flex justify-center items-center rounded-2xl ">
                <Image
                  src={arrow}
                  alt="back-arrow"
                  className="brightness-0	dark:brightness-100	"
                />
              </div>
              <div className="count-number flex items-center justify-between w-[calc(100%_-_100px)]	">
                <span className="inline-block w-[25px] h-[25px]  montserratfont font-normal text-base rounded-2xl	 leading-5 text-brandDark2	dark:text-brandLightOpacity100  text-center leading-[30px]	">
                  1
                </span>
                <span className="inline-block w-[25px] h-[25px]  montserratfont font-normal text-base rounded-2xl	 leading-5 text-brandDark2	dark:text-brandLightOpacity100  text-center leading-[30px]">
                  2
                </span>
                <span className="inline-block bg-grayCard dark:bg-brandLightOpacity10 border border-brandDark2 dark:border-brandLightOpacity100 w-[32px] h-[32px]  montserratfont font-normal text-base rounded-2xl	 leading-5	dark:text-brandLightOpacity100  text-center leading-[30px] mt-[4px] text-brandDark2">
                  3
                </span>
                <span className="inline-block w-[25px] h-[25px]  montserratfont font-normal text-base rounded-2xl	 leading-5	 text-brandDark2 dark:text-brandLightOpacity100  text-center leading-[30px]">
                  4
                </span>
                <span className="inline-block w-[25px] h-[25px]  montserratfont font-normal text-base rounded-2xl	 leading-5 text-brandDark2	dark:text-brandLightOpacity100  text-center leading-[30px]">
                  5
                </span>
                <span className="inline-block w-[25px] h-[25px]  montserratfont font-normal text-base rounded-2xl	 leading-5	text-brandDark2 dark:text-brandLightOpacity100  text-center leading-[30px]">
                  ...
                </span>
                <span className="inline-block w-[25px] h-[25px]  montserratfont font-normal text-base rounded-2xl	 leading-5	dark:text-brandLightOpacity100  text-center leading-[30px]">
                  6
                </span>
                <span className="inline-block w-[25px] h-[25px]  montserratfont font-normal text-base rounded-2xl	 leading-5	 text-brandDark2 dark:text-brandLightOpacity100  text-center leading-[30px]">
                  7
                </span>
                <span className="inline-block w-[25px] h-[25px]  montserratfont font-normal text-base rounded-2xl	 leading-5 text-brandDark2	dark:text-brandLightOpacity100  text-center leading-[30px]">
                  8
                </span>
                <span className="inline-block w-[25px] h-[25px]  montserratfont font-normal text-base rounded-2xl	 leading-5 text-brandDark2	dark:text-brandLightOpacity100  text-center leading-[30px]">
                  9
                </span>
                <span className="inline-block w-[25px] h-[25px]  montserratfont font-normal text-base rounded-2xl	 leading-5 text-brandDark2	dark:text-brandLightOpacity100  text-center leading-[30px]">
                  10
                </span>
              </div>
              <div className="next-arrow inline-block bg-grayCard  dark:bg-brandLightOpacity10  w-[31px] h-[32px] leading-[32px] flex justify-center items-center  rounded-2xl">
                <Image
                  src={arrow}
                  alt="back-arrow"
                  className="brightness-0	dark:brightness-100	"
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
