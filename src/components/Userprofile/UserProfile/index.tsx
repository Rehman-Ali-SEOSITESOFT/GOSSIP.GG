import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import bannerimg from "../../../assets/user-profile/banner.png";
import whitebanner from "../../../assets/user-profile/white-banner.png";
import profileimg from "../../../assets/user-profile/profile.png";
import valorant from "../../../assets/profile/valorant.png";
import console from "../../../assets/profile/console.png";
import twitter from "../../../assets/user-profile/twitter.png";
import instagram from "../../../assets/user-profile/instagram.png";
import editprofile from "../../../assets/user-profile/edit.png";
import styles from "./style.module.css";
import { useTheme } from "next-themes";
import EditProfileModal from "@/components/Modals/EditProfileModal";
const ProfileDetail = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState<boolean | null>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);

  const onClickOpenModal = () => {
    setOpen(!open);
  };
  return (
    <>
      <div
        className={` ${styles.banner_image}  relative h-[190px] mw-sm1:h-[150px] mw-sm:h-[110px]`}
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
        <div
          onClick={() => onClickOpenModal()}
          className="dark:bg-brandLightOpacity10 bg-borderEditProfile dark:hover:bg-brandLightOpacity20 rounded-3xl inline-block px-4	 py-2.5 absolute top-6	right-6	 cursor-pointer mw-sm1:py-1.5 mw-sm1:px-3	"
        >
          <Image
            src={editprofile}
            alt="edit user"
            className="inline-block w-[20px] h-[20px] mr-2	"
          />
          <span className="text-base  font-semibold leading-5 text-white	dark:text-brandLightOpacity100	montserratfont mw-sm1:text-sm ">
            Edit Profile
          </span>
        </div>
      </div>
      <div className="profile_description relative">
        <div className="profle-image ml-[50px]  mt-[-80px] h-[160px] w-[160px] mw-lg:ml-[30px] mw-lg:h-[140px] mw-lg:w-[140px]  mw-sm1:w-[80px] mw-sm1:h-[80px] mw-sm1:mt-[-50px] ">
          <Image
            src={profileimg}
            className="w-full h-full object-cover"
            alt="profile-image"
          />
        </div>
        <div className="profile_detail flex  justify-between pt-[15px] pr-[95px] mw-11:pr-[60px] pb-[50px] pl-[80px]  mw-lg:pl-[50px] mw-md:pr-[30px] mw-md:pl-[30px] mw-sm1:flex-col">
          <div className="about-user w-[55%] mw-9:w-[50%] border-l-2 border-brandDark2	dark:border-brand pl-3.5 mw-sm1:w-full mw-sm1:mb-[20px]">
            <h3 className="title text-2xl leading-7	font-bold montserratfont text-brandDark2	 dark:text-brandLightOpacity100 ">
              Naveen
            </h3>
            <h5 className="rank text-lg leading-6 font-semibold		montserratfont	tracking-[0.03em]	 text-brandDark2 dark:text-brandLightOpacity100  py-2.5 mw-md:text-base	">
              I&#39;m not a player, I&#39;m a gamer.
            </h5>
            <p className="joined-data text-textColorGray montserratfont dark:text-brandLightOpacity70 font-medium montserratfont leading-4	 text-sm">
              Joined Feb 2023
            </p>
            <p className="about-user-description montserratfont text-base leading-7 text-brandDark2	font-normal dark:text-brandLightOpacity100 pt-5 mw-sm1:text-sm mw-sm1:pt-2	">
              Naveen has been a passionate Esports fan since he was a kid. He
              has been a freelance Esports player since 2014 and has been on the
              Gossip team since the start.
            </p>
          </div>
          <div className="about-rank w-[45%] mw-9:w-[50%] pl-[80px]  mw-9:pl-[50px] flex justify-between flex-col mw-md:pl-[30px]  mw-sm1:pl-[0] mw-sm1:w-full ">
            <div className="plyaing-detail pl-3.5 border-l-2 border-brandDark2 dark:border-brand pl-4		">
              <h4 className="text-base dark:text-brandLightOpacity100 montserratfont leading-5 font-semibold pb-2	">
                Currently playing:
              </h4>
              <div className="flex items-center">
                <div
                  className="text-sm	leading-4 montserratfont font-normal	dark:text-brandLightOpacity100 
                border border-brandDark2 dark:border-brandLightOpacity100 rounded w-[116px] h-[44px] flex items-center justify-center	"
                >
                  <Image
                    alt="valorant game"
                    className="inline-block mr-2 "
                    src={valorant}
                  />
                  <span className="dark:text-brandLightOpacity70 text-base mw-sm1:text-sm">
                    Valorant
                  </span>
                </div>
                <div className="text-sm	leading-4	montserratfont font-normal	dark:text-brandLightOpacity100 border border-brandDark2 dark:border-brandLightOpacity100 rounded w-[121px] h-[44px] flex items-center justify-center ml-4">
                  <Image
                    alt="consol"
                    src={console}
                    className="inline-block  mr-2 w-[20px] h-16px brightness-0	dark:brightness-100 "
                  />
                  <span className="dark:text-brandLightOpacity70 text-base mw-sm1:text-sm">
                    Console
                  </span>
                </div>
              </div>
            </div>
            <div className="more mw-sm1:mt-[20px] flex justify-between">
              <div className="saved border-l-2 border-brandDark2 dark:border-brand pl-4	 ">
                <h4 className="text-base leading-5 font-semibold text-brandDark2  dark:text-brandLightOpacity100 montserratfont capitalize mb-4	">
                  saved
                </h4>
                <p className="montserratfont test-base leading-5 font-normal dark:text-brandLightOpacity100 text-brandDark2 ">
                  50 articles
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
                    className="w-[24px] h-[24px] mw-sm1:w-[18px] mw-sm1:h-[18px] mr-4 brightness-0	dark:brightness-100		"
                  />
                  <Image
                    src={twitter}
                    alt=""
                    className="w-[24px] h-[24px]  mw-sm1:w-[18px] mw-sm1:h-[18px] brightness-0	dark:brightness-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditProfileModal open={open} onClickOpenModal={onClickOpenModal} />
    </>
  );
};

export default ProfileDetail;
