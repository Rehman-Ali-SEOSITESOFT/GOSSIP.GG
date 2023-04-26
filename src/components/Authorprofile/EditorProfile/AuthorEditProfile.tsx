import React, { useState, useEffect } from "react";
import Image from "next/image";
import bannerimg from "../../../assets/user-profile/banner.png";
import whitebanner from "../../../assets/user-profile/white-banner.png";
import profileimg from "../../../assets/author-profile/author.png";
import pc from "../../../assets/user-profile/airplay.png";
import valorant from "../../../assets/user-profile/valorant.png";
import twitter from "../../../assets/user-profile/twitter.png";
import instagram from "../../../assets/user-profile/instagram.png";
import linkined from "../../../assets/author-profile/linkedin.png";
import mail from "../../../assets/author-profile/mail.png";
import icon from "../../../assets/author-profile/esport-icon.png";
import lighticon from "../../../assets/images/modal/light-logo.png";
import editprofile from "../../../assets/user-profile/edit.png";
import { useTheme } from "next-themes";
const AuthorEditProfile = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  return (
    <>
      <div
        className={` banner_image  relative h-[190px] mw-sm1:h-[150px]  mw-sm:h-[110px]`}
      >
        {isDarkTheme === "dark" ? (
          <Image
            src={bannerimg}
            className="banner w-full h-full object-cover  "
            alt="banner "
          />
        ) : (
          <Image
            src={whitebanner}
            className="banner w-full h-full object-cover  "
            alt="banner "
          />
        )}
        {/* <div className="dark:bg-brandLightOpacity10 bg-borderEditProfile dark:hover:bg-brandLightOpacity20 rounded-3xl inline-block px-4	 py-2.5 absolute top-6	right-6	 cursor-pointer	">
          <Image
            src={editprofile}
            alt="edit user"
            className="inline-block w-[20px] h-[20px] mr-2	"
          />
          <span className="text-base  font-semibold leading-5 text-white	dark:text-brandLightOpacity100	montserratfont">
            Edit Profile
          </span>
        </div> */}
      </div>
      <div className="profile_description relative">
        <div className="profle-image ml-[50px]  mt-[-80px] h-[160px] w-[160px] mw-lg:ml-[30px] mw-lg:h-[140px] mw-lg:w-[140px]  mw-sm1:w-[100px] mw-sm1:h-[100px] ">
          <Image
            src={profileimg}
            className="w-full h-full object-cover"
            alt="profile-image"
          />
        </div>
        <div className="profile_detail flex  justify-between pt-[15px] pr-[95px] mw-11:pr-[60px] pb-[50px] pl-[80px]  mw-lg:pl-[50px] mw-md:pr-[30px] mw-md:pl-[30px] mw-sm1:flex-col">
          <div className="about-user w-[55%] mw-9:w-[50%] border-l-2 border-brandDark2	dark:border-brand pl-3.5 mw-sm1:w-full mw-sm1:mb-[20px]">
            <h3 className="title text-2xl leading-7	font-bold montserratfont text-brandDark2	 dark:text-brandLightOpacity100 ">
              John D.
            </h3>
            <h5 className="rank text-lg leading-6 font-bold	tracking-[0.03em] text-brand dark:text-brand montserratfont py-2.5">
              Esports Writer
              <Image
                src={isDarkTheme === "dark" ? icon : lighticon}
                alt=""
                className="inline-block dark:pt-[5px] pt-[0px] h-[28px] w-[28px] dark:h-[40px] dark:w-[38px]"
              />
            </h5>
            <p className="joined-data text-textColorGray dark:text-brandLightOpacity70 font-medium montserratfont leading-4	 text-sm">
              Joined Feb 2023
            </p>
            <p className="about-user-description montserratfont text-base leading-7 text-brandDark2	font-normal dark:text-brandLightOpacity100 pt-5 mw-sm1:text-sm mw-sm1:pt-2	">
              John D. has been a passionate Esports fan since he was a kid. He
              has been a freelance Esports writer since 2014 and has been on the
              Gossip team since the start.
            </p>
          </div>
          <div className="about-rank w-[45%] mw-9:w-[50%] pl-[80px] mw-lg:pl-[50px] flex justify-between items-end mw-md:pl-[30px] mw-sm1:pl-[0] mw-sm1:w-full">
            <div className="more flex justify-between w-full">
              <div className="saved border-l-2 border-brandDark2 dark:border-brand pl-4	 ">
                <h4 className="text-base leading-5 font-semibold text-brandDark2  dark:text-brandLightOpacity100 montserratfont capitalize mb-4	">
                  Written:
                </h4>
                <p className="montserratfont test-base leading-5 font-normal dark:text-brandLightOpacity100 text-brandDark2 mw-sm1:text-sm ">
                  239 articles
                </p>
              </div>
              <div className="social-link border-l-2 border-brandDark2  dark:border-brand pl-4	 ">
                <h4 className="text-base leading-5 font-semibold dark:text-brandLightOpacity100 montserratfont capitalize mb-2.5	">
                  Social Handles:
                </h4>
                <div className="image flex">
                  <Image
                    src={instagram}
                    alt=""
                    className="w-[24px] h-[24px]  mw-sm1:w-[18px] mw-sm1:h-[18px] mr-4 brightness-0	dark:brightness-100		"
                  />
                  <Image
                    src={twitter}
                    alt=""
                    className="w-[24px] h-[24px] mw-sm1:w-[18px] mw-sm1:h-[18px] mr-4 brightness-0	dark:brightness-100		"
                  />
                  <Image
                    src={mail}
                    alt=""
                    className="w-[24px] h-[24px] mw-sm1:w-[18px] mw-sm1:h-[18px] mr-4 brightness-0	dark:brightness-100		"
                  />
                  <Image
                    src={linkined}
                    alt=""
                    className="w-[24px] h-[24px] mw-sm1:w-[18px] mw-sm1:h-[18px] brightness-0	dark:brightness-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorEditProfile;
