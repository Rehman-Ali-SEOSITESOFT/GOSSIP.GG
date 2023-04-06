import React, { useState, useRef } from "react";
import Image from "next/image";
import bannerimg from "../../../assets/user-profile/banner.png";
import whitebanner from "../../../assets/user-profile/white-banner.png";
import profileimg from "../../../assets/user-profile/profile.png";
import pc from "../../../assets/user-profile/airplay.png";
import valorant from "../../../assets/user-profile/valorant.png";
import twitter from "../../../assets/user-profile/twitter.png";
import instagram from "../../../assets/user-profile/instagram.png";
import editprofile from "../../../assets/user-profile/edit.png";
import styles from "./style.module.css";
import { useTheme } from "next-themes";
import EditProfileModal from "@/components/Modals/EditProfileModal";
const ProfileDetail = () => {
  const { theme, setTheme } = useTheme();
 
  const [open, setOpen] = useState<boolean | null>(false);

  const onClickOpenModal = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={` ${styles.banner_image}  relative h-[190px]`}>
      {theme === "dark" ? (
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
          className="dark:bg-brandLightOpacity10 bg-borderEditProfile dark:hover:bg-brandLightOpacity20 rounded-3xl inline-block px-4	 py-2.5 absolute top-6	right-6	 cursor-pointer	"
        >
          <Image
            src={editprofile}
            alt="edit user"
            className="inline-block w-[20px] h-[20px] mr-2	"
          />
          <span className="text-base  font-semibold leading-5 text-white	dark:text-brandLightOpacity100	montserratfont">
            Edit Profile
          </span>
        </div>
      </div>
      <div className="profile_description relative">
        <div className="profle-image ml-[50px]  mt-[-80px] h-[160px] w-[160px] ">
          <Image
            src={profileimg}
            className="w-full h-full object-cover"
            alt="profile-image"
          />
        </div>
        <div className="profile_detail flex  justify-between pt-[15px] pr-[95px] pb-[50px] pl-[80px]">
          <div className="about-user w-[55%] border-l-2 border-brandDark2	dark:border-brand pl-3.5">
            <h3 className="title text-2xl leading-7	font-bold montserratfont text-brandDark2	 dark:text-brandLightOpacity100 ">
              Naveen
            </h3>
            <h5 className="rank text-lg leading-6 font-normal		tracking-[0.03em]	 text-brandDark2 dark:text-brandLightOpacity100 robotoslub py-2.5	">
              I&#39;m not a player, I&#39;m a gamer.
            </h5>
            <p className="joined-data text-textColorGray dark:text-brandLightOpacity70 font-medium montserratfont leading-4	 text-sm">
              Joined Feb 2023
            </p>
            <p className="about-user-description montserratfont text-base leading-7 text-brandDark2	font-normal dark:text-brandLightOpacity100 pt-5	">
              Naveen has been a passionate Esports fan since he was a kid. He
              has been a freelance Esports player since 2014 and has been on the
              Gossip team since the start.
            </p>
          </div>
          <div className="about-rank w-[45%] pl-[80px] flex justify-between flex-col">
            <div className="plyaing-detail pl-3.5 border-l-2 border-brandDark2 dark:border-brand pl-4		">
              <h4 className="text-base dark:text-brandLightOpacity100 montserratfont leading-5 font-semibold pb-2	">
                Currently playing:
              </h4>
              <div className="flex items-center">
                <div
                  className="text-sm	leading-4 montserratfont font-normal	dark:text-brandLightOpacity100 
                border border-brandDark2 dark:border-brandLightOpacity100 rounded w-[75px] h-[35px] flex items-center justify-center	"
                >
                  <Image
                    alt="pc"
                    className="inline-block mr-2 brightness-0	dark:brightness-100 "
                    src={pc}
                  />{" "}
                  <span>PC</span>
                </div>
                <div className="text-sm	leading-4	montserratfont font-normal	dark:text-brandLightOpacity100 border border-brandDark2 dark:border-brandLightOpacity100 rounded w-[103px] h-[35px] flex items-center justify-center ml-3">
                  <Image
                    alt="pc"
                    src={valorant}
                    className="inline-block  mr-2 w-[20px] h-16px brightness-0	dark:brightness-100"
                  />{" "}
                  <span>Valorant</span>
                </div>
              </div>
            </div>
            <div className="more flex justify-between">
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
                  Social Links:
                </h4>
                <div className="image flex">
                  <Image
                    src={instagram}
                    alt=""
                    className="w-[24px] h-[24px] mr-4 brightness-0	dark:brightness-100		"
                  />
                  <Image
                    src={twitter}
                    alt=""
                    className="w-[24px] h-[24px] brightness-0	dark:brightness-100"
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
