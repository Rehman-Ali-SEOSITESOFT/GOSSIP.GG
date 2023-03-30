import React from "react";
import Image from "next/image";
import logo from "../../assets/images/footer/main-logo.png";
import MobileLogo from "../../assets/images/footer/m-footer-logo.png";
import Instgram from "../../assets/images/footer/instagram.png";
import Twitter from "../../assets/images/footer/twitter.png";
import style from './Footer.module.css';
const Footer = () => {
  return (
    <footer className="bg-brandDark2 mw-lg:mb-16 dark:bg-brandDark3">
      <div className="global-section-width">
        {/* Desktop Footer Start */}
        <div className="pt-14 mw-lg:hidden">
          <Image src={logo} alt="Gossip GG" />
          <div className="pt-6 flex flex-row justify-between">
            <div className="max-w-[70%]">
              <p className={`text-brandLightOpacity100 text-base ${style.font_text1} max-w-[80%]`}>
                Gossip.GG brings you the latest scoop from Gaming, Esports,
                Tech, and a whole lot more. From breaking the latest industry
                news to in-depth reviews and features, Gossip.GG has you
                covered.
              </p>
            </div>
            <div className="flex flex-row">
              <div className="h-10 w-10 rounded-3xl bg-brandDark1 flex justify-center  items-center">
                <Image src={Instgram} alt="Instagram Profile" />
              </div>
              <div className="h-10 w-10 ml-10 rounded-3xl bg-brandDark1 flex justify-center  items-center">
                <Image src={Twitter} alt="Twitter Profile" />
              </div>
            </div>
            <div>
              <ul className="flex flex-col text-brandLightOpacity100 text-base text-right font-text">
                <li>
                  <a href="#">About us</a>
                </li>
                <li className="pt-1">
                  <a href="#">Contact Us</a>
                </li>
                <li className="pt-1">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="flex flex-row text-brandLightOpacity100 pt-10 text-base font-text">
              <li>
                <a href="#">Disclaimer</a>
              </li>
              <li className="pl-10">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="pl-10">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center pt-5 pb-7 text-base font-text">
            <p className="text-brandLightOpacity100">
              (c) 2023 Gossip.gg - All Rights Reserved
            </p>
          </div>
        </div>
        {/* Desktop Footer end */}
        {/* Mobile Footer Start */}
        <div className="hidden pt-5  pb-5 mw-lg:block">
          <Image src={MobileLogo} alt="Gossip GG" />
          <p className={`pt-3 text-brandLightOpacity100  ${style.font_text2} `}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="pt-7 flex flex-row justify-between">
            <div>
              <ul className={`flex flex-col text-brandLightOpacity100 text-left  ${style.font_text2}   `}>
                <li>
                  <a href="#">About us</a>
                </li>
                <li className="pt-1">
                  <a href="#">Contact Us</a>
                </li>
                <li className="pt-1">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-row">
              <div className="h-10 w-10 mr-5 rounded-3xl bg-brandDark1 flex justify-center  items-center">
                <Image src={Instgram} alt="Instagram Profile" />
              </div>
              <div className="h-10 w-10  rounded-3xl bg-brandDark1 flex justify-center  items-center">
                <Image src={Twitter} alt="Twitter Profile" />
              </div>
            </div>
            <div>
              <ul className={`flex flex-col text-brandLightOpacity100   ${style.font_text2}   text-right`}>
                <li>
                  <a href="#">Disclaimer</a>
                </li>
                <li className="pt-1">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="pt-1">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`flex justify-center items-center pt-7  ${style.font_text2}  `}>
            <p className="text-brandLightOpacity100">
              (c) 2023 Gossip.gg - All Rights Reserved
            </p>
          </div>
        </div>
        {/* Mobile Footer End */}
      </div>
    </footer>
  );
};

export default Footer;
