import Image from "next/image";
import React, { useState, useEffect } from "react";
import image1 from "../../../../assets/select/image-react-1.png";
import image2 from "../../../../assets/select/image-react-2.png";
import image3 from "../../../../assets/select/image-react-3.png";
import image4 from "../../../../assets/select/image-react-4.png";
import image5 from "../../../../assets/gaming-guides-feature/image5.png";
import image6 from "../../../../assets/gaming-guides-feature/image6.png";
import image7 from "../../../../assets/gaming-guides-feature/image7.png";
import image8 from "../../../../assets/gaming-guides-feature/image8.png";
import image9 from "../../../../assets/gaming-guides-feature/image9.png";
import image10 from "../../../../assets/gaming-guides-feature/image10.png";
import image11 from "../../../../assets/gaming-guides-feature/image11.png";
import bookmark from "../../../../assets/gaming/bookmark.png";
import bookmarkDark from "../../../../assets/gaming/bookmark-dark.png";
import addvertisement from "../../../../assets/esports/advertisement.png";
import { useTheme } from "next-themes";
const GuidesCards = () => {
  const { theme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  const [list, setList] = useState<any[]>([
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image11,
    image8,
    image9,
    image10,
    image11,
  ]);
  const imagesList2 = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image11,
    image8,
    image9,
    image10,
    image11,
  ];
  return (
    <>
      <section className="guides_cards_inner_section ">
        <div className="flex mw-md:hidden  flex-wrap justify-between">
          {list.map((element, index) => {
            return (
              <div
                className="w-[30%] mw-lg:w-[46%] mw-sm3:w-full pt-[48px]"
                key={index}
              >
                <div className="img-wrapper h-[230px] mw-lg:h-[295px] mw-sm:h-[180px] mw-sm3:h-[150px] rounded">
                  <Image
                    src={element}
                    alt="Demo"
                    className="w-full h-full object-cover rounded	"
                  />
                </div>
                <div className="description flex justify-between pt-3	">
                  <h4 className="text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 pr-2">
                    Check out the Great Indian Amazon Sale this month
                  </h4>
                  <div>
                    <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20    hover:bg-grayCardHover cursor-pointer rounded-3xl">
                      <Image
                        src={isDarkTheme === "dark" ? bookmark : bookmarkDark}
                        alt=" "
                      />
                    </div>
                  </div>
                </div>
                <div className="flex py-4 montserratfont">
                  <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                    News
                  </div>
                  <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                    Esports
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden mw-md:flex">
          <div className="w-full">
            <div className="flex flex-wrap justify-between">
              {imagesList2.map((elem, index) => {
                return (
                  <>
                    {index === 6 ? (
                      <div className="border-y	b border-y-grayCard dark:border-y-brandLightOpacity10 w-full pl-[40px] py-8 mw-sm3:pl-[10px]">
                        <h4 className="montserratfont font-medium text-xs leading-[15px] dark:text-brandLightOpacity70 text-textColor pb-[10px]">
                          Advertisement
                        </h4>
                        <Image src={addvertisement} alt="demo" />
                      </div>
                    ) : (
                      <>
                        <div
                          className="w-[270px] mw-12:w-[31%] mr-[40px] mx-13:mr-[25px]  mw-xl:mr-[0] mt-12 mw-lg:w-[48%] mw-lg:mt-[20px] mw-sm:w-[100%]"
                          key={index}
                        >
                          <div className="img-wrapper  h-[305px] mw-12:h-[250px] mw-11:h-[220px] mw-lg:h-[200px] mw-sm:h-[180px] mw-sm3:h-[150px] rounded relative">
                            <Image
                              src={elem}
                              alt="hello"
                              className="w-full h-full mw-11:object-cover rounded"
                            />
                          </div>
                          <div className="description flex justify-between pt-3 ">
                            <h4 className="text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 pr-2 review-title mw-sm:text-sm mw-sm:leading-[17px] mw-sm:font-semibold">
                              Check out the Great Indian Amazon Sale this month
                            </h4>
                            <div>
                              <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20    hover:bg-grayCardHover cursor-pointer rounded-3xl ">
                                <Image
                                  src={bookmark}
                                  alt="demo"
                                  className=" brightness-0 dark:brightness-200"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex py-4 montserratfont">
                            <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                              News
                            </div>
                            <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                              Esports
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuidesCards;
