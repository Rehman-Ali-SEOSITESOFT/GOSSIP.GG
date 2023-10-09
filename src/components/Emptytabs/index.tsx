import Image from "next/image";
import Link from "next/link";
import React from "react";
import cable from "../../assets/emptytab/empty.png";
const EmptyTabs = () => {
  return (
    <>
      <div className="mt-[81px] text-center">
        <h4 className="montserratfont text-center text-[16px] font-normal leading-normal dark:text-[#E5E5E5]">
          Recommended articles will appear here based on topics you are
          following.
        </h4>
        <h2 className="pt-[32px] montserratfont text-[16px] font-semibold dark:text-[#E5E5E5] text-center">
          Get started by{" "}
          <Link href="#" className="underline">
            {" "}
            adding your preferences.
          </Link>
        </h2>
        <div className="pt-[136px] text-center flex justify-center">
          <Image src={cable} alt="plug" />
        </div>
      </div>
    </>
  );
};

export default EmptyTabs;
