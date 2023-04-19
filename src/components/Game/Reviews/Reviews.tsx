import Filter from "@/components/Filter/Filter"
import React , {useEffect, useState}from "react"
import ReviewCards from "./ReviewCards/ReviewCards"
import bookmarkDark from "../../../assets/gaming/bookmark-dark.png"

import Image from "next/image"
import Pagination from "@/components/Pagination"
import AsideBar from "@/components/Tech/Asidebar"
import { useTheme } from "next-themes"
import image1 from "../../../assets/gaming/odyssey.png"
import image2 from "../../../assets/gaming/pubg.png"
import image3 from "../../../assets/gaming/cod.png"
import image4 from "../../../assets/gaming/odyssey.png"
import bookmark from "../../../assets/gaming/bookmark.png"
import addvertisement from "../../../assets/esports/advertisement.png"
import RightSidebar from "../rightbar2/RightSidebar"
const Reviews = () => {
  const imagesList = [
    image1,
    image3,
    image2,
    image3,
    image4,
    image1,
    image3,
    image2,
    image3,
    image4,
    image1,
    image3,
    image2,
    image3,
  ]
  const imagesList2 = [
    image1,
    image3,
    image2,
    image3,
    image4,
    image1,
    image3,
    image2,
    image3,
    image4,
    image1,
    image3,
    image2,
    image3,
  ]

  const { theme } = useTheme()
  const [isDarkTheme, setIsDarkTheme] = useState<string>("")
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light")
  }, [theme])
  return (
    <>
      <section>
        <div className="reviews_category_wrapper ">
          <div className="global-section-width">
            <div className="2xl-container">
              <div>
                <Filter />
              </div>
              <div className="flex mw-md:hidden">
                <div className="w-[calc(100%_-_250px)] mw-lg:w-[calc(100%_-_230px)]">
                  <div className="flex flex-wrap mw-xl:justify-between mw-lg:mt-[28px]">
                    {imagesList.map((elem, index) => {
                      return (
                        <div
                          className="w-[270px] mw-12:w-[31%] mr-[40px] mx-13:mr-[25px]  mw-xl:mr-[0] mt-12 mw-lg:w-[48%] mw-lg:mt-[20px]"
                          key={index}
                        >
                          <div className="img-wrapper  h-[305px] mw-12:h-[250px] mw-11:h-[220px] mw-lg:h-[200px] mw-sm:h-[180px] mw-sm3:h-[150px] rounded relative">
                            <Image
                              src={elem}
                              alt="hello"
                              className="w-full h-full mw-11:object-cover rounded"
                            />

                            <div className="review w-[60px] h-[60px] bg-arrowicon bg-brand flex justify-center items-center rounded-[50px] absolute top-[8px] right-[8px] mw-sm:w-[50px] mw-sm:h-[50px]">
                              <span className="montserratfont font-bold text-lg leading-[22px] text-brandLightOpacity100 mw-sm:text-sm ">
                                4/5
                              </span>
                            </div>
                          </div>
                          <div className="review_card_content pt-[12px] flex justify-between">
                <div className="title_disp">
                  <h4 className="montserratfont font-bold text-base dark:text-[#E5E5E5] leading-5  text-[#221e1f] mw-sm:text-[14px] mw-sm:text-semibold mw-sm:leading-[17px]">
                    One Piece Odyssey
                  </h4>
                  <p className="montserratfont text-sm font-normal  text-[#221e1f] dark:text-[#E5E5E5] leading-[17px] pt-[5px]">
                    Panic Barn
                  </p>
                  <p className="montserratfont  text-xs italic leading-[15px] font-normal dark:text-brandLightOpacity70 text-brandDark2 pt-[5px]">
                    Adventure,Indie,Puzzle
                  </p>
                </div>
                <div className="bookmark_check rounded-full bg-grayCard w-8 h-8 dark:bg-brandLightOpacity10 flex items-center justify-center cursor-pointer dark:hover:bg-brandLightOpacity20    hover:bg-grayCardHover">
                  <Image
                    src={isDarkTheme === "dark" ? bookmark : bookmarkDark}
                    alt="bookmark"
                  />
                </div>
              </div>
                         
                        </div>
                      )
                    })}
                  </div>
                </div>
                <RightSidebar />
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
                                className="w-[270px] mw-12:w-[31%] mr-[40px] mx-13:mr-[25px]  mw-xl:mr-[0] mt-12 mw-lg:w-[48%] mw-lg:mt-[20px]"
                                key={index}
                              >
                                <div className="img-wrapper  h-[305px] mw-12:h-[250px] mw-11:h-[220px] mw-lg:h-[200px] mw-sm:h-[180px] mw-sm3:h-[150px] rounded relative">
                                  <Image
                                    src={elem}
                                    alt="hello"
                                    className="w-full h-full mw-11:object-cover rounded"
                                  />

                                  <div className="review w-[60px] h-[60px] bg-arrowicon bg-brand flex justify-center items-center rounded-[50px] absolute top-[8px] right-[8px] mw-sm:w-[40px] mw-sm:h-[40px]">
                                    <span className="montserratfont font-bold text-lg leading-[22px] text-brandLightOpacity100 mw-sm:text-sm ">
                                      4/5
                                    </span>
                                  </div>
                                </div>
                                <div className="description flex justify-between pt-3 ">
                                  <h4 className="text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 pr-2 review-title mw-sm:text-sm mw-sm:leading-[17px] mw-sm:font-semibold">
                                    Check out the Great Indian Amazon Sale this
                                    month
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
                                  <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                                    News
                                  </div>
                                  <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                                    Esports
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews
