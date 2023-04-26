import React, { useState, useEffect } from "react";
import Image from "next/image";
import bannerimg from "../../assets/user-profile/banner.png";
import whitebanner from "../../assets/user-profile/white-banner.png";
import profileimg from "../../assets/user-profile/profile.png";
import pc from "../../assets/user-profile/airplay.png";
import valorant from "../../assets/user-profile/valorant.png";
import twitter from "../../assets/user-profile/twitter.png";
import instagram from "../../assets/user-profile/instagram.png";
import editprofile from "../../assets/user-profile/edit.png";
import { useTheme } from "next-themes";
import EditProfileModal from "../Modals/EditProfileModal";
const EmptyProfileDetail = () => {
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
        <div
          onClick={() => onClickOpenModal()}
          className="dark:bg-brandLightOpacity10 bg-borderEditProfile dark:hover:bg-brandLightOpacity20 rounded-3xl inline-block px-4	 py-2.5 absolute top-6	right-6	 cursor-pointer	 mw-sm1:py-1.5 mw-sm1:px-3"
        >
          <Image
            src={editprofile}
            alt="edit user"
            className="inline-block w-[20px] h-[20px] mr-2	"
          />
          <span className="text-base  font-semibold leading-5 text-white	dark:text-brandLightOpacity100	montserratfont mw-sm1:text-sm">
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
        <div className="profile_detail flex  justify-between pt-[15px] pr-[95px] mw-11:pr-[60px] pb-[50px] pl-[80px]  mw-lg:pl-[50px] mw-md:pr-[30px] mw-md:pl-[30px] mw-sm1:flex-col ">
          <div className="about-user w-[55%] mw-9:w-[50%] border-l-2 border-brandDark2	dark:border-brand pl-3.5 mw-sm1:w-full mb-[20px]">
            <h3 className="title text-2xl leading-7	font-bold montserratfont text-brandDark2	 dark:text-brandLightOpacity100 ">
              Naveen
            </h3>
            <p className="hover:text-[#000000] dark:hover:text-[white] about-user-description montserratfont text-base leading-7 text-textColorGray	font-normal test-textColorGray dark:text-brandLightOpacity70 pt-5  underline underline-offset-2		">
              + Add mantra
            </p>
            <p className="joined-data text-textColorGray dark:text-brandLightOpacity70 font-medium montserratfont leading-4	 text-sm">
              Joined Feb 2023
            </p>
            <p className="hover:text-[#000000] dark:hover:text-[white] about-user-description montserratfont text-base leading-7 text-textColorGray	font-normal dark:text-brandLightOpacity70 pt-5 h-[100px]	 underline underline-offset-2">
              + Add description
            </p>
          </div>
          <div className="about-rank w-[45%] pl-[80px] mw-9:w-[50%] pl-[80px] mw-lg:pl-[50px] flex justify-between flex-col mw-sm1:pl-0 mw-sm1:w-full">
            <div className="plyaing-detail pl-3.5 border-l-2 border-brandDark2 dark:border-brand pl-4		">
              <h4 className="text-base dark:text-brandLightOpacity100 montserratfont leading-5 font-semibold pb-2	">
                Currently playing:
              </h4>
              <div className="flex items-center">
                <p className=" hover:text-[#000000] dark:hover:text-[white] about-user-description montserratfont text-textColorGray text-base leading-7  test-textColorGray	font-normal dark:text-brandLightOpacity70 pt-5	 underline underline-offset-2">
                  + Add game
                </p>
              </div>
            </div>
            <div className="more flex justify-between mw-sm1:mt-[20px]">
              <div className="saved border-l-2 border-brandDark2 dark:border-brand pl-4	 ">
                <h4 className="text-base leading-5 font-semibold text-brandDark2  dark:text-brandLightOpacity100 montserratfont capitalize mb-4	">
                  saved:
                </h4>
                <p className="montserratfont test-base leading-5 font-normal dark:text-brandLightOpacity100 text-brandDark2 ">
                  -
                </p>
              </div>
              <div className="social-link border-l-2 border-brandDark2  dark:border-brand pl-4	 ">
                <h4 className="text-base leading-5 font-semibold dark:text-brandLightOpacity100 montserratfont capitalize mb-2.5	">
                  Social Handles:
                </h4>
                <div className="hover:text-[#000000] dark:hover:text-[white] image flex  test-textColorGray text-textColorGray dark:text-brandLightOpacity70  underline underline-offset-2">
                  + Add
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

export default EmptyProfileDetail;
