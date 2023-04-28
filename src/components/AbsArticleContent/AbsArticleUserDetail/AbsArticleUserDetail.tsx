import Image from "next/image"
import React from "react"
import image1 from "../../../assets/esportevents2/image1.png"
import stroke from "../../../assets/esportevents2/stroke.png"
import insta from "../../../assets/esportevents2/instagram.png"
import twitters from "../../../assets/esportevents2/twitter.png"
import mail from "../../../assets/esportevents2/mail.png"
import linkedin from "../../../assets/esportevents2/linkedin.png"
import bookmark from "../../../assets/esporting-events/bookmark.png"
import forward from "../../../assets/esporting-events/forward.png"
import upwordarrow from "../../../assets/esportevents2/upword.png"
import downword from "../../../assets/esportevents2/downword.png"

const AbsArticleUserDetail = () => {
  return (
    <>
      <div className="user_detail items-center flex pt-[53px] pb-[55px] border-t-2 border-b-2 dark:border-brandLightOpacity10  mw-9:flex-col mw-9:items-start mw-9:py-[20px]">
        <div className="user_detail_section_left_side w-[32%] flex border-r-2 border-[#ED4E50] mw-9:w-[98%] mw-9:border-r-[0]">
          <div className="image_wrap">
            <Image src={image1} alt="" />
          </div>
          <div className="ml-[12px]">
            <h4 className="montserratfont text-[18px] leading-[22px] font-bold dark:text-[#E5E5E5]">
              John Dafgafgafg
            </h4>
            <p className="flex pt-[4px] items-center montserratfont text-[18px] font-bold leading-[22px] text-[#ED4E50]">
              Esports Writer
              <span className="h-[30px] w-[30px]">
                <Image src={stroke} alt="" />
              </span>
            </p>
            <div className="flex mt-[7px] mw-9:mb-[7px]">
              <a href="#" className="mr-[16px]">
                <Image
                  src={insta}
                  alt=""
                  className="brightness-0 dark:brightness-200"
                />
              </a>
              <a href="#" className="mr-[16px]">
                <Image
                  src={twitters}
                  alt=""
                  className="brightness-0 dark:brightness-200"
                />
              </a>
              <a href="#" className="mr-[16px]">
                <Image
                  src={mail}
                  alt=""
                  className="brightness-0 dark:brightness-200"
                />
              </a>
              <a href="#" className="mr-[16px]">
                <Image
                  src={linkedin}
                  alt=""
                  className="brightness-0 dark:brightness-200"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="right_side_user_detail_section w-[65%] mw-9:w-[98%] ">
          <p className="ml-[15px] montserratfont text-[16px] leading-[27px] font-normal dark:text-[#E5E5E5] mw-sm:text-[14px] mw-sm:ml-[0px]  mw-sm:leading-[18px] mw-sm3:text-[12px] mw-sm3:leading-[14px]">
            John is a professional Dota 2 player and a winner of multiple
            championships. He has been a freelance Esports journalist since
            2013.professional Dota 2 player and a winner of multiple
            championships. He has been a freelance Esports journalist since
          </p>
        </div>
      </div>
      <div className="tags_wrapper pt-[32px] flex  mw-sm:pt-[20px]">
        <div className="share_forward flex w-[32%]">
          <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20    hover:bg-grayCardHover cursor-pointer rounded-3xl mr-[32px]">
            <Image
              src={bookmark}
              alt=""
              className="dark:brightness-200 brightness-0 "
            />
          </div>
          <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20    hover:bg-grayCardHover cursor-pointer rounded-3xl">
            <Image
              src={forward}
              alt=""
              className="dark:brightness-200 brightness-0 "
            />
          </div>
        </div>
        <div className="arrows  w-[65%] flex ml-[150px] items-center mw-sm3:ml-[70px]">
          <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
            <Image
              src={upwordarrow}
              alt=""
              className="dark:brightness-100 brightness-0"
            />
          </div>
          <div className="count dark:text-brandLightOpacity100 montserratfont font-semibold text-base center leading-5 py-1  mx-[16px]">
            17
          </div>
          <div className="down-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
            <Image
              src={downword}
              alt=""
              className="dark:brightness-200 brightness-0 "
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AbsArticleUserDetail
