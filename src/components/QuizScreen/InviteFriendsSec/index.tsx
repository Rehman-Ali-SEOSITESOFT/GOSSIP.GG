import React, { Fragment, useState, useEffect, useRef } from "react";
import Image from "next/image";
import image1 from "../../../assets/rewards/one.png";
import image2 from "../../../assets/rewards/two.png";
import image3 from "../../../assets/rewards/three.png";
import { Menu, Transition } from "@headlessui/react";
import Twitter from "../../../assets/quiz-model/Twitter.png";
import Whatsapp from "../../../assets/quiz-model/WhatsApp.png";
import Email from "../../../assets/quiz-model/Envelope.png";
import Discord from "../../../assets/quiz-model/Discord.png";
import Copy from "../../../assets/quiz-model/copy.png";
import Line from "../../../assets/images/general/Line.png";
import DarkLine from "../../../assets/images/general/dark-line.png";
import { useTheme } from "next-themes";

const InviteFriendSection = () => {
  const { theme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);

  const [copySuccess, setCopySuccess] = useState<String>("");
  const textAreaRef = useRef<any | null>(null);

  const copyToClipboard = (e) => {
    let textField = document.createElement("textarea");
    textField.innerText = "https://gossip-gg.vercel.app";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setCopySuccess("Copied to clipboard!");
    setTimeout(() => {
      setCopySuccess("");
    }, 2000);
  };

  return (
    <div className="flex flex-row justify-between items-center content-center  ">
      <div className="flex items-center ml-[43px] mt-[12px] ">
        <div className="flex items-center relative">
          <Image
            src={image1}
            alt=""
            className="w-[24px] h-[24px] absolute left-[-28px] z-[1]"
          />
          <Image
            src={image2}
            alt=""
            className="w-[24px] h-[24px] absolute left-[-12px]"
          />
          <Image src={image3} alt="" className="w-[24px] h-[24px] " />
        </div>
        <div className="ml-[5px]">
          <p className="montserratfont text-[12px] font-normal text-brandDark1 dark:text-[#E5E5E5]">
            and 54 others are playing
          </p>
        </div>
      </div>
      {/* <p className="cursor-pointer  mr-[16px] mt-[16px] text-brandDark1 dark:text-brandLightOpacity70 border-b-[1px] border-b-brandDark1 dark:border-b-brandLightOpacity70 leading-none min-w-min montserratfont text-[12px] font-medium">
        Invite Friends
      </p> */}

      <Menu as="div">
        <Menu.Button className="cursor-pointer">
          <span className=" mr-[16px] mt-[16px]  text-brandDark1 dark:text-brandLightOpacity70 border-b-[1px] border-b-brandDark1 dark:border-b-brandLightOpacity70 leading-none min-w-min montserratfont text-[12px] font-medium focus:outline-[0]">
            Invite Friends
          </span>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div
              className={`bg-transparent	w-[0] h-[0] absolute z-[111] border-l-[10px] border-r-[10px] border-l-transparent border-r-transparent top-auto bottom-auto left-auto right-[40px]	  border-b-[10px] border-b-white	 dark:border-y-brandDark1`}
            ></div>
          </Transition>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="relative">
            <Menu.Items className="absolute px-[12px] pt-[8px] pb-[20px]	 bg-white    dark:bg-brandDark1 right-[16px] top-[5px]   left-auto    notifiction-shadow ">
              <div className=" w-[300px] max-h-[145px] overflow-x-hidden scrollbar-thin  scrollbar-thumb-choosebox  scrollbar-track-bodycolor  scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-[transparent] box-scroll pr-1 notifiction-shadow mw-sm5:w-[300px]">
                <div>
                  <p className="text-brandDark2 dark:text-brandLightOpacity70 montserratfont  text-[11px] font-medium text-left">
                    Invite Friends
                  </p>
                  <div className="flex justify-center items-center mw-sm1:hidden">
                    <Image
                      src={isDarkTheme === "dark" ? DarkLine : Line}
                      className="w-[100%]"
                      alt="saprator line"
                    />
                  </div>
                  <div className="mt-[8px] mb-[10px] flex flex-row items-center justify-around ">
                    <div className="flex flex-col items-center ">
                      <div className="flex items-center justify-center h-[29px] w-[29px] rounded-full bg-brandDark1 dark:bg-brandLightOpacity10">
                        <Image src={Twitter} alt="twitter" />
                      </div>
                      <p className="text-brandDark2 dark:text-brandLightOpacity70 montserratfont  text-[11px] font-medium">
                        Twitter
                      </p>
                    </div>
                    <div className="flex flex-col items-center ">
                      <div className="flex items-center justify-center h-[29px] w-[29px] rounded-full bg-brandDark1 dark:bg-brandLightOpacity10">
                        <Image src={Whatsapp} alt="whatsapp" />
                      </div>
                      <p className="text-brandDark2 dark:text-brandLightOpacity70 montserratfont  text-[11px] font-medium">
                        Twitter
                      </p>
                    </div>
                    <div className="flex flex-col items-center ">
                      <div className="flex items-center justify-center h-[29px] w-[29px] rounded-full bg-brandDark1 dark:bg-brandLightOpacity10">
                        <Image src={Email} alt="email" />
                      </div>
                      <p className="text-brandDark2 dark:text-brandLightOpacity70 montserratfont  text-[11px] font-medium">
                        Twitter
                      </p>
                    </div>
                    <div className="flex flex-col items-center ">
                      <div className="flex items-center justify-center h-[29px] w-[29px] rounded-full bg-brandDark1 dark:bg-brandLightOpacity10">
                        <Image src={Discord} alt="twitter" />
                      </div>
                      <p className="text-brandDark2 dark:text-brandLightOpacity70 montserratfont  text-[11px] font-medium">
                        Twitter
                      </p>
                    </div>
                  </div>
                  <div className="px-[8px] flex flex-row items-center justify-between h-[30px] border border-brandLightOpacity100  dark:border-brandLightOpacity10 rounded">
                    <span className="text-brandDark2 dark:text-brandLightOpacity100 montserratfont text-[12px] font-medium">
                      https://gossip-gg.vercel.app
                    </span>
                    <div
                      onClick={copyToClipboard}
                      className="flex flex-row  items-center"
                    >
                      <Image
                        className="mr-[4px] brightness-0 dark:brightness-100"
                        src={Copy}
                        alt="copy"
                      />
                      <span className=" cursor-pointer text-brandDark1 dark:text-brandLightOpacity70 border-b-[1px] border-b-brandDark1 dark:border-b-brandLightOpacity70 leading-none min-w-min montserratfont text-[11px] font-medium">
                        Copy Link
                      </span>
                    </div>
                  </div>
                  <p className="pt-[8px] text-brandDark2 dark:text-brandLightOpacity70 montserratfont  text-[11px] font-medium">
                    {copySuccess}
                  </p>
                </div>
              </div>
            </Menu.Items>
          </div>
        </Transition>
      </Menu>
    </div>
  );
};

export default InviteFriendSection;
