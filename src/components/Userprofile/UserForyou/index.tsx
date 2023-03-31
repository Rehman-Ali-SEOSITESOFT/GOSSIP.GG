import Image from "next/image";
import React from "react";

const UserForYou = () => {
  return (
    <div className="userforyou--items">
      <p>Manage your preferences to fine-tune this feed</p>
      {["", "", "", "", ""].map((elemet, index) => {
        return (
          <div className="item" key={index}>
            <div className="item-iamge-wrap">
              <Image src="" alt="Image" />
            </div>
            <div className="item-iamge-description">
              <h2>
                Bayes Esports appoints York Scheunemann as COO of their company
              </h2>
              <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs montserratfont">
                  <a href="#" className="underline">
                    John D
                  </a>
                <span className="border-l border-l-textColorGray pl-2 ml-2 border-textColorGray   dark:border-l-brandLightOpacity10   ">
                  Jan 30th, 2023, 18:08
                </span>
                <span className="border-l border-l-textColorGray pl-2 ml-2 border-textColorGray   dark:border-l-brandLightOpacity10   ">
                  5 min read
                </span>
              </small>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type...
              </p>

              <div className="flex py-4 montserratfont">
                <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                  News
                </div>
                <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                  Esports
                </div>
              </div>
            </div>
            <div className="item-iamge-arrow"></div>
          </div>
        );
      })}
    </div>
  );
};

export default UserForYou;
