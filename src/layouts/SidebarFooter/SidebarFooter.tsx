import React from "react";
import Image from "next/image";
import logo from "../../assets/images/footer/main-logo.png";
import MobileLogo from "../../assets/images/footer/m-footer-logo.png";
import Instgram from "../../assets/images/footer/instagram.png";
import Twitter from "../../assets/images/footer/twitter.png";
import style from "./SidebarFooter.module.css";

const SidebarFooter = () => {
  return (
    <footer className="bg-brandDark2  dark:bg-brandDark3">
      <div className="global-section-width">
        {/* Mobile Footer Start */}
        <div className="hidden pt-5  pb-[21px] mw-lg:block">
          <Image src={MobileLogo} alt="Gossip GG" />
          <p
            className={`pt-3 text-brandLightOpacity100 montserratfont ${style.font_text2} `}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <div className="pt-7 flex flex-row justify-between">
            <div>
              <ul
                className={`flex flex-col text-brandLightOpacity100 text-left montserratfont  ${style.font_text2}   `}
              >
                <li>
                  <a href="#" className="montserratfont">
                    About us
                  </a>
                </li>
                <li className="pt-1">
                  <a href="#" className="montserratfont">
                    Contact Us
                  </a>
                </li>
                <li className="pt-1">
                  <a href="#" className="montserratfont">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex">
              <div className="h-10 w-10   hover:bg-brandLightOpacity20 cursor-pointer rounded-3xl bg-brandDark1 flex justify-center  items-center">
                <Image src={Instgram} alt="" />
              </div>
              <div className="h-10 w-10   hover:bg-brandLightOpacity20 cursor-pointer rounded-3xl bg-brandDark1 flex justify-center  items-center ml-[25px]">
                <Image src={Twitter} alt="" />
              </div>
            </div>
            <div>
              <ul
                className={`flex flex-col text-brandLightOpacity100   ${style.font_text2}   text-right`}
              >
                <li>
                  <a className="montserratfont" href="#">
                    Disclaimer
                  </a>
                </li>
                <li className="pt-1">
                  <a className="montserratfont" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li className="pt-1">
                  <a className="montserratfont" href="#">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`flex justify-center items-center pt-7   ${style.font_text2}  `}
          >
            <p className="text-brandLightOpacity100 montserratfont ">
              (c) 2023 Gossip.gg - All Rights Reserved
            </p>
          </div>
        </div>
        {/* Mobile Footer End */}
      </div>
    </footer>
  );
};

export default SidebarFooter;
