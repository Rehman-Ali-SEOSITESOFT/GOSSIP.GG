import React from "react";
import Image from "next/image";
import logo from "../../assets/images/footer/main-logo.png";
import Instgram from "../../assets/images/footer/instagram.png";
import Twitter from "../../assets/images/footer/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-brandDark2">
      <div className="global-section-width">
        {/* <div className="container"> */}
          <div className="pt-10 px-5 pb-5">
            <Image src={logo} alt="Gossip GG" />
            <div className="pt-7 flex flex-row justify-between">
             <div className="max-w-[70%]">
             <p className="text-brandLightOpacity100 text-base font-text max-w-[80%]">
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
                  <li  className="pt-1">
                    <a href="#">Contact Us</a>
                  </li>
                  <li  className="pt-1">
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
            <div className="flex justify-center items-center pt-7 text-base font-text">
                <p className="text-brandLightOpacity100">(c)  2023 Gossip.gg - All Rights Reserved </p>
            </div>
          </div>
        </div>
      {/* </div> */}
    </footer>
    
  );
};

export default Footer;
