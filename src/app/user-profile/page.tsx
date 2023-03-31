"use client";
import UserForYou from "@/components/Userprofile/UserForyou";
import ProfileDetail from "@/components/Userprofile/UserProfile";
import React from "react";

const page = () => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <section className="user-profile">
      <div className="user-section-width">
        <div className="2xl:container">
          <div className="flex">
            <div className="w-full border dark:border-brandLightOpacity10 rounded-lg dark:bg-userprofilebg mt-[78px] mb-[88px]">
              <ProfileDetail />
            </div>
          </div>
        </div>
      </div>
      <div className="user-section-width">
        <div className="2xl:container">
          <div className="flex flex-col">
            <ul className="flex full">
              <li className="">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-brand border-b border-brand"
                      : "text-brandLightOpacity70 ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  For You
                </a>
              </li>
              <li className="">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-brand border-b border-brand "
                      : "text-brandLightOpacity70")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  saved(50)
                </a>
              </li>
            </ul>
            <div className="tab-content tab-space w-full">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <UserForYou />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                saved(50)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
