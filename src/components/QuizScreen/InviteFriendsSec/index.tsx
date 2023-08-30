import React , {Fragment, useState}from "react";
import Image from "next/image";
import image1 from "../../../assets/rewards/one.png";
import image2 from "../../../assets/rewards/two.png";
import image3 from "../../../assets/rewards/three.png";
import { Menu, Transition } from "@headlessui/react";
import noti from "../../../assets/images/header/notif.png";

const InviteFriendSection = () => {
 
 
  const [notifictionList, setNotificationList] = useState([
    {
      title: "Quiz Results 19 July",
      disc: "Three Lucky Winners snagged Asus Gaming Keyboard and Mouse Combo Three Lucky Winners snagged Asus Gaming Keyboard and Mouse Combo",
      time: "1 min ago",
      quiz: false,
      read: false,
    },
    {
      title: "Reminder",
      disc: "Quiz begins in 10 mins! Today’s Lucky Winners take home Bose Gaming Headphones!",
      time: "3 hrs ago",
      quiz: true,
      read: false,
    },
    {
      title: "Quiz Results 18 July",
      disc: "Five Lucky Winners took home Sades Snowwolf Gaming Headphones",
      time: "yesterday",
      quiz: false,
      read: true,
    },
    {
      title: "Quiz Results 18 July",
      disc: "Five Lucky Winners took home Sades Snowwolf Gaming Headphones",
      time: "yesterday",
      quiz: false,
      read: true,
    },
  ]);
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
         <span className=" mr-[16px] mt-[16px] text-brandDark1 dark:text-brandLightOpacity70 border-b-[1px] border-b-brandDark1 dark:border-b-brandLightOpacity70 leading-none min-w-min montserratfont text-[12px] font-medium">
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
              className={`bg-transparent	w-[0] h-[0] absolute z-[111] border-l-[10px] border-r-[10px] border-l-transparent border-r-transparent top-auto bottom-[-15px] left-auto right-auto	  border-b-[10px] border-b-white	 dark:border-y-brandDark1`}
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
          <Menu.Items className="absolute pt-3 pl-4 pb-3 pr-1	 bg-white    dark:bg-brandDark1 right-[16px] top-[5px]   left-auto    notifiction-shadow ">
            <div className=" w-[300px] max-h-[145px] overflow-x-hidden scrollbar-thin  scrollbar-thumb-choosebox  scrollbar-track-bodycolor  scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-[transparent] box-scroll pr-1 notifiction-shadow mw-sm5:w-[300px]">
              <div className="flex justify-between items-end	 ">
                <h3 className="text-brand text-lg	leading-[22px] font-bold">
                  Notifications
                </h3>
                <h3
                  className="montserratfont font-normal	 text-xs	 leading-[15px] text-brandLightOpacity70 cursor-pointer"
                  // onClick={(e) => onClickClearAllNotification(e)}
                >
                  {notifictionList.length > 0 ? "Clear all" : ""}
                </h3>
              </div>
              <div className="list-on-notif">
                {notifictionList.length > 0 ? (
                  notifictionList.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className="notification-box flex item-start justify-between border-t-[1px] border-brandLightOpacity10 py-[12px]  first:my-[0] first:border-t-0  "
                      >
                        <div>
                          <h4
                            className={`notifi-title montserratfont text-sm	 mb-2   ${
                              e.read
                                ? "text-brandLightOpacity70 font-normal"
                                : "text-brandLightOpacity1 font-semibold	"
                            }`}
                          >
                            <span className="text-brand">
                              {e.title} : &nbsp;
                            </span>
                            {e.disc}
                          </h4>
                          <p
                            className={`text-[10px] leading-[13px] montserratfont ${
                              e.read
                                ? "font-normal text-brandLightOpacity70"
                                : "font-semibold text-brandLightOpacity1"
                            }`}
                          >
                            {e.time}
                          </p>
                        </div>
                        <div className="min-w-[115px] text-end pr-[10px]">
                          <button
                            // onClick={
                            //   e.quiz
                            //     ? (e) => onClickOpenIntroModal(e)
                            //     : (e) => onClickOpenPrizeOfDayModal(e)
                            // }
                            className={`text-brandLightOpacity70 montserratfont text-sm leading-[15px] font-medium	underline`}
                          >
                            {e.quiz ? "Play Quiz" : "View Results"}
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="pt-[8px] montserratfont dark:text-brandLightOpacity70 text-[12px] ">
                    No notifications
                  </p>
                )}
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
