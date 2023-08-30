import React from "react";
import Image from "next/image";
import image1 from "../../../assets/rewards/one.png";
import image2 from "../../../assets/rewards/two.png";
import image3 from "../../../assets/rewards/three.png";
const InviteFriendSection = () => {
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
      <p className="cursor-pointer  mr-[16px] mt-[16px] text-brandDark1 dark:text-brandLightOpacity70 border-b-[1px] border-b-brandDark1 dark:border-b-brandLightOpacity70 leading-none min-w-min montserratfont text-[12px] font-medium">
        Invite Friends
      </p>
    </div>
  );
};

export default InviteFriendSection;
