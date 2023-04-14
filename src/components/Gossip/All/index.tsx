import React from "react";
import Post1 from "../../../assets/images/gossip/post1.png";
import Post2 from "../../../assets/images/gossip/post2.png";
import Post3 from "../../../assets/images/gossip/post3.png";
import downarrow from "../../../assets/user-for-you/down-arrow.png";
import downarrowColor from "../../../assets/user-for-you/fill-down-arrow.png";
import uparrow from "../../../assets/user-for-you/up-arrow.png";
import uparrowColor from "../../../assets/user-for-you/fill-up-arrow.png";
import comment from "../../../assets/images/gossip/comment.png";
import bookmark from "../../../assets/user-for-you/bookmark.png";
import bookmarkfill from "../../../assets/user-for-you/fill-bookmark.png";
import sharedbtn from "../../../assets/user-for-you/share.png";

import Image from "next/image";
const AllSection = () => {
  return (
    <section className="w-[778px] ">
      <div className="min-w-[100%] mt-[44px] mb-[24px] rounded dark:bg-brandDark1">
        <div className="px-[24px] py-[24px]">
          <p className="montserratfont font-bold  text-brandDark2 dark:text-brandLightOpacity100 text-[24px]">
            Bayes Esports appoints York Scheunemann as COO of their company
          </p>
          <small className="pt-[16px]">
            <a
              href="#"
              className="underline text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	font-normal underline-offset-2 mw-9:text-[12px]	"
            >
              John D
            </a>
            <span className="mx-[18px] border-l w-[1px] border-l-brandDark2   dark:border-l-brandLightOpacity100"></span>
            <span className="  border-brandDark2  text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	 font-normal  mw-9:text-[12px]">
              Jan 30th, 2023, 18:08
            </span>
            <span className="mx-[18px] border-l w-[1px] border-l-brandDark2   dark:border-l-brandLightOpacity100"></span>

            <span className=" border-brandDark2    text-brandDark2 dark:text-brandLightOpacity100 text-sm  mw-9:text-[12px]	 montserratfont leading-4	font-normal">
              5 min read
            </span>
          </small>
          <p className="robotoslub font-normal pt-[16px] text-base text-brandLightOpacity90 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type...
          </p>
          <div className="relative">
          <Image className="my-[24px]" src={Post1} alt="post" />
          <span className="absolute right-[0px] top-[24px] bg-brand font-medium flex items-center justify-center montserratfont text-brandLightOpacity100 h-[40px] w-[80px] font-bold text-base">LEAKS</span>
          </div>
          <div className=" flex flex-row justify-between border-t border-b border-t-brandLightOpacity10 border-b-brandLightOpacity10">
            <div className="my-[22px] item-iamge-arrows text-center flex flex-row">
              <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={uparrowColor}
                  alt="up-arrow"
                  className=" dark:brightness-100 brightness-100"
                />
              </div>
              <div className="px-4 count dark:text-brandLightOpacity100 montserratfont font-semibold	 text-base center	leading-5 py-1		">
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
            <div className="shared-icons flex items-center">
              <div className="relative icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={comment}
                  alt="up-arrow"
                  className=" dark:brightness-200 brightness-0 "
                />
                <span className="absolute right-[-10px] top-[-4px] bg-brand font-medium flex items-center justify-center montserratfont text-brandLightOpacity100 h-[16px] w-[16px] rounded-full text-[11px]" >15</span>
              </div>
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
          </div>
        </div>
      </div>
      <div className="min-w-[100%]  mb-[24px] rounded dark:bg-brandDark1">
        <div className="px-[24px] py-[24px]">
          <p className="montserratfont font-bold  text-brandDark2 dark:text-brandLightOpacity100 text-[24px]">
            Bayes Esports appoints York Scheunemann as COO of their company
          </p>
          <small className="pt-[16px]">
            <a
              href="#"
              className="underline text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	font-normal underline-offset-2 mw-9:text-[12px]	"
            >
              John D
            </a>
            <span className="mx-[18px] border-l w-[1px] border-l-brandDark2   dark:border-l-brandLightOpacity100"></span>
            <span className="  border-brandDark2  text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	 font-normal  mw-9:text-[12px]">
              Jan 30th, 2023, 18:08
            </span>
            <span className="mx-[18px] border-l w-[1px] border-l-brandDark2   dark:border-l-brandLightOpacity100"></span>

            <span className=" border-brandDark2    text-brandDark2 dark:text-brandLightOpacity100 text-sm  mw-9:text-[12px]	 montserratfont leading-4	font-normal">
              5 min read
            </span>
          </small>
          <p className="robotoslub font-normal pt-[16px] text-base text-brandLightOpacity90 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type...
          </p>
          <Image className="my-[24px]" src={Post2} alt="post" />
          <div className=" flex flex-row justify-between border-t border-b border-t-brandLightOpacity10 border-b-brandLightOpacity10">
            <div className="my-[22px] item-iamge-arrows text-center flex flex-row">
              <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={uparrowColor}
                  alt="up-arrow"
                  className=" dark:brightness-100 brightness-100"
                />
              </div>
              <div className="px-4 count dark:text-brandLightOpacity100 montserratfont font-semibold	 text-base center	leading-5 py-1		">
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
            <div className="shared-icons flex items-center">
              <div className="relative icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={comment}
                  alt="up-arrow"
                  className=" dark:brightness-200 brightness-0 "
                />
                <span className="absolute right-[-10px] top-[-4px] bg-brand font-medium flex items-center justify-center montserratfont text-brandLightOpacity100 h-[16px] w-[16px] rounded-full text-[11px]" >15</span>
              </div>
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
          </div>
        </div>
      </div>
      <div className="min-w-[100%]  mb-[24px] rounded dark:bg-brandDark1">
        <div className="px-[24px] py-[24px]">
          <p className="montserratfont font-bold  text-brandDark2 dark:text-brandLightOpacity100 text-[24px]">
            Bayes Esports appoints York Scheunemann as COO of their company
          </p>
          <small className="pt-[16px]">
            <a
              href="#"
              className="underline text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	font-normal underline-offset-2 mw-9:text-[12px]	"
            >
              John D
            </a>
            <span className="mx-[18px] border-l w-[1px] border-l-brandDark2   dark:border-l-brandLightOpacity100"></span>
            <span className="  border-brandDark2  text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	 font-normal  mw-9:text-[12px]">
              Jan 30th, 2023, 18:08
            </span>
            <span className="mx-[18px] border-l w-[1px] border-l-brandDark2   dark:border-l-brandLightOpacity100"></span>

            <span className=" border-brandDark2    text-brandDark2 dark:text-brandLightOpacity100 text-sm  mw-9:text-[12px]	 montserratfont leading-4	font-normal">
              5 min read
            </span>
          </small>
          <p className="robotoslub font-normal pt-[16px] text-base text-brandLightOpacity90 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type...
          </p>
          <Image className="my-[24px]" src={Post3} alt="post" />
          <div className=" flex flex-row justify-between border-t border-b border-t-brandLightOpacity10 border-b-brandLightOpacity10">
            <div className="my-[22px] item-iamge-arrows text-center flex flex-row">
              <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={uparrowColor}
                  alt="up-arrow"
                  className=" dark:brightness-100 brightness-100"
                />
              </div>
              <div className="px-4 count dark:text-brandLightOpacity100 montserratfont font-semibold	 text-base center	leading-5 py-1		">
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
            <div className="shared-icons flex items-center">
              <div className="relative icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={comment}
                  alt="up-arrow"
                  className=" dark:brightness-200 brightness-0 "
                />
                <span className="absolute right-[-10px] top-[-4px] bg-brand font-medium flex items-center justify-center montserratfont text-brandLightOpacity100 h-[16px] w-[16px] rounded-full text-[11px]" >15</span>
              </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllSection;
