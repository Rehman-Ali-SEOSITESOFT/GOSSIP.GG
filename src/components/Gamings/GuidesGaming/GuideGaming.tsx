import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../../../assets/select/image-react-1.png";
import image2 from "../../../assets/select/image-react-2.png";
import image3 from "../../../assets/select/image-react-3.png";
import image4 from "../../../assets/select/image-react-4.png";
import ViewMore from "../ViewMore/ViewMore";
import bookmark from "../../../assets/gaming/bookmark.png";
import bookmarkDark from "../../../assets/gaming/bookmark-dark.png";
import { useTheme } from "next-themes";
const GuideGaming = () => {
  const [list, setList] = useState<any[]>([image1, image2, image3, image4]);
  const { theme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  return (
    <>
      <section className="Guides_wrapper">
        <div className="global-section-width">
          <div className="2xl:container">
            <div className="flex  flex-wrap justify-between">
              {list.map((element, index) => {
                return (
                  <div
                    className="w-[23.5%] mw-lg:w-[48%] mw-sm1:w-[98%] mw-sm3:w-full"
                    key={index}
                  >
                    <div className="img-wrapper h-[230px] mw-lg:h-[200px] mw-md:h-[236px] rounded">
                      <Image
                        src={element}
                        alt="Demo"
                        className="w-full h-full object-cover rounded	"
                      />
                    </div>
                    <div className="description flex justify-between pt-3	">
                      <h4 className="montserratfont  text-brandDark2 dark:text-brandLightOpacity100 news-title   text-base font-semibold leading-[17px] pr-[19px] mw-sm:text-[14px] mw-sm:leading-[17px]">
                        Bayes Esports appoints York Scheunemann as COO of
                        reputed gaming company
                      </h4>
                      <div>
                        <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20    hover:bg-grayCardHover cursor-pointer rounded-3xl">
                          <Image
                            src={
                              isDarkTheme === "dark" ? bookmark : bookmarkDark
                            }
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex py-4 montserratfont">
                      <div className="montserratfont mx-14:text-[10px] text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
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
            <ViewMore />
          </div>
        </div>
      </section>
    </>
  );
};

export default GuideGaming;
