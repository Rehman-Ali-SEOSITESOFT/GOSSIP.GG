import React, { useEffect, useState } from "react";
import Image from "next/image";
import UserLogo from "../../../assets/images/article/user.png";
import DarkLogo from "../../../assets/images/article/dark-logo.png";
import LinkedIn from "../../../assets/images/article/linkedin.png";
import Mail from "../../../assets/images/article/mail.png";
import Twitter from "../../../assets/images/article/twitter.png";
import Insta from "../../../assets/images/article/insta.png";
import downarrow from "../../../assets/user-for-you/down-arrow.png";
import uparrowColor from "../../../assets/user-for-you/fill-up-arrow.png";
import bookmark from "../../../assets/user-for-you/bookmark.png";
import sharedbtn from "../../../assets/user-for-you/share.png";
import textIconColor from "../../../assets/author-profile/esport-icon-2.png";
import { useTheme } from "next-themes";
const UserLogoSection = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  return (
    <div className="global-section-width-article ">
      <div className="w-full   border-t border-t-brandLightOpacity100 dark:border-t-brandLightOpacity10 border-b border-b-brandLightOpacity100 dark:border-b-brandLightOpacity10  max-w-[968px]">
        <div className="flex flex-row mw-lg:flex-col mw-lg:mt-[20px]  items-center justify-between pt-[40px] pb-[40px]">
          <div className=" flex items-center">
            <Image src={UserLogo} alt="User Logo" />
            <div className="ml-[12px]">
              <p className="montserratfont dark:text-brandLightOpacity100 text-brandDark2 text-[18px] font-bold ">
                John William
              </p>
              <div className="flex flex-row">
                <p className="montserratfont  text-brand text-[18px] font-bold ">
                  Esports Writer
                </p>
                <Image
                  src={isDarkTheme === "dark" ? DarkLogo : textIconColor}
                  alt="logo"
                />
              </div>
              <div className="flex flex-row">
                <Image
                  src={Insta}
                  className="dark:brightness-100 brightness-0"
                  alt="Instagram"
                />
                <Image
                  className="ml-[16px] dark:brightness-100 brightness-0"
                  src={Twitter}
                  alt="Twitter"
                />
                <Image
                  className="ml-[16px] dark:brightness-100 brightness-0"
                  src={Mail}
                  alt="mail"
                />
                <Image
                  className="ml-[16px] dark:brightness-100 brightness-0"
                  src={LinkedIn}
                  alt="LinkedIn"
                />
              </div>
            </div>
          </div>
          <div className="hidden mw-sm1:block border-t-[2px] dark:border-brand border-brandDark2 w-full max-w-[96px] mt-[28px] mb-[10px]"></div>
          <div className="mw-lg:mt-[20px] border-l-3 dark:border-l-brand border-l-brandDark2 mw-sm1:border-0">
            <p className=" max-w-[638px]  mw-sm1:text-[14px] pl-[16px] text-left montserratfont text-base dark:text-brandLightOpacity100 text-brandDark2 mw-sm1:pl-0 mw-sm1:text-sm mw-sm1:leading-[27px]">
              John is a professional Dota 2 player and a winner of multiple
              championships. He has been a freelance Esports journalist since
              2013.professional Dota 2 player and a winner of multiple
              championships. He has been a freelance Esports journalist since
              2013.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-row  mt-[26px]  max-w-[968px] mw-lg:justify-between mw-sm1:mt-[16px]">
        <div className="shared-icons flex items-center mw-sm1:order-1">
          <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer mx-[28px] mw-lg:mx-[15px]  hover:bg-borderEditProfile">
            <Image
              src={bookmark}
              alt="up-arrow"
              className="dark:brightness-100 brightness-0"
            />
          </div>
          <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
            <Image
              src={sharedbtn}
              alt="up-arrow"
              className="dark:brightness-200  brightness-0 "
            />
          </div>
        </div>

        <div className="my-[22px] mw-sm1:my-0 mw-lg:ml-[0px] ml-[318px] item-iamge-arrows text-center flex flex-row   items-center">
          <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
            <Image
              src={uparrowColor}
              alt="up-arrow"
              className=" dark:brightness-100 brightness-100"
            />
          </div>
          <div className="px-4 mw-lg:text-[14px] count dark:text-brandLightOpacity100 montserratfont font-semibold	 text-base center	leading-5 py-1		">
            17
          </div>
          <div className="down-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
            <Image
              src={downarrow}
              alt="down-arrow"
              className="brightness-0 dark:brightness-100	"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogoSection;
