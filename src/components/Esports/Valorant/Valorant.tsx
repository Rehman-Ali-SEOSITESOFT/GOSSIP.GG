import React from "react"
import BgmiTabs from "../EsportsBgmi/BgmiTabs/BgmiTabs"
import Image from "next/image"
import SectionSaprator from "@/components/SecSaprator"
import BgmiEvents from "../EsportsBgmi/BgmiEvents/BgmiEvents"
import BgmiNewsCards from "../EsportsBgmi/BgmiNewsCards/BgmiNewsCards"
import Pagination from "@/components/Pagination"
import image1 from "../../../assets/esprotsbgmi/image1.png"
import EsportsRightSidebar from "../EsportsRightSidebar/EsportsRightSidebar"
import addvertisement from "../../../assets/esports/advertisement.png"
import img1 from "../../../assets/user-saved/1.png"
import img2 from "../../../assets/user-saved/2.png"
import img3 from "../../../assets/user-saved/3.png"
import img4 from "../../../assets/user-saved/4.png"
import img5 from "../../../assets/user-saved/5.png"
import img6 from "../../../assets/user-saved/6.png"
import img7 from "../../../assets/user-saved/7.png"
import img8 from "../../../assets/user-saved/8.png"
import img9 from "../../../assets/user-saved/9.png"
import img10 from "../../../assets/user-saved/10.png"
import img11 from "../../../assets/user-saved/11.png"
import img12 from "../../../assets/user-saved/12.png"
import bookmark from "../../../assets/author-profile/bookmark.png"
import bookmakred from "../../../assets/user-for-you/fill-bookmark.png"
const Valorant = () => {
  const items2 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img11]
  return (
    <section className="esports-bgmi_wrapper">
      <div className="global-section-width">
        <div className="2xl:container ">
          <div className="top_section pt-[44px] flex justify-between pb-[42px]">
            <div className="w-[70%]">
              <h4 className="montserratfont text-[32px] leading-[39px] font-bold dark:text-[#E5E5E5] pb-[16px]">
                Valorant
              </h4>
              <p className="montserratfont text-[14px] leading-[17px] font-normal dark:text-[#E5E5E5] mw-sm:text-[12px]">
                First Person Shooter &nbsp; | &nbsp; Simulation Video Game
                &nbsp;|&nbsp; X box Series X and Series S
              </p>
              <div className="tabs ">
                <BgmiTabs />
              </div>
              <p className="montserratfont text-[16px] leading-[27px] dark:text-[#E5E5E5] font-normal mw-sm:text-[14px] mw-sm:leading-[22px]">
                Battlegrounds Mobile India is the Indian version of PUBG Mobile,
                exclusively for players in India. It is an online multiplayer
                battle royale game developed and published by Krafton. The game
                released on 2 July 2021 for Android devices, and on 18 August
                2021 for iOS devices.
              </p>
            </div>
            <div className="w-[26%] mw-lg:w-[100%] mw-lg:pb-[24px]">
              <div className="img_wrapper">
                <Image src={image1} alt="" />
              </div>
            </div>
          </div>

          <div className="bgmi_events">
            <div className="heading">
              <SectionSaprator title="Valorant EVENTS" />
            </div>
            <div>
              <BgmiEvents />
            </div>
          </div>
          <div className="bgmi_news third_section">
            <div className="bgmi_news_heading pt-[48px]">
              <SectionSaprator title="Valorant NEWS" />
            </div>
            <div className="mw-lg:hidden  flex justify-between relative">
              <div className="w-[78%]">
                <BgmiNewsCards />
              </div>

              <EsportsRightSidebar />
            </div>
            <div className="hidden mw-lg:flex">
              <div className="items2 flex flex-wrap justify-between">
                {items2.map((ele, index) => {
                  return (
                    <>
                      {index === 6 ? (
                        <div className="mb-[48px] border-y	b border-y-grayCard dark:border-y-brandLightOpacity10 w-full pl-[40px] py-8 mw-sm3:pl-[10px]">
                          <h4 className="montserratfont font-medium text-xs leading-[15px] dark:text-brandLightOpacity70 text-textColor pb-[10px]">
                            Advertisement
                          </h4>
                          <Image src={addvertisement} alt="demo" />
                        </div>
                      ) : (
                        <>
                          <div
                            className={`item p-[16px] rounded-sm w-[32%]   dark:bg-brandDark1 bg-white border border-grayCard	flex flex-col justify-between h-min mw-md:w-[49%] mw-sm:w-[100%] mw-sm:mb-[24px] ${
                              index === 9 || index === 10 || index === 11
                                ? "mb-0"
                                : "mb-12"
                            }`}
                            key={index}
                          >
                            <div className="save-img-wrap">
                              <Image
                                src={ele}
                                alt="Imag"
                                className="m-auto mw-sm:w-[100%]"
                              />
                            </div>
                            <div className="save-title-wrap pt-[16px] pb-[16px]">
                              <h4 className="montserratfont font-bold text-base leading-5 dark:text-brandLightOpacity100 text-brandDark2 mw-sm:text-[16px] mw-sm:leading-[20px]">
                                Check out the Great Indian Amazon Sale this
                                month from this day onw...
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
                                {index === 1 ||
                                index === 3 ||
                                index === 5 ||
                                index === 7 ||
                                index === 9 ||
                                index === 10 ||
                                index === 11 ? (
                                  <Image
                                    src={bookmakred}
                                    alt="bookmarked"
                                    className="brightness-0	dark:brightness-100"
                                  />
                                ) : (
                                  <Image
                                    src={bookmark}
                                    alt="bookmarked"
                                    className=" brightness-0 opacity-80 hover:opacity-100  dark:brightness-200"
                                  />
                                )}
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
    </section>
  )
}

export default Valorant
