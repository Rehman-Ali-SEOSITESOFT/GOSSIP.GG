import ProfileDetail from "@/components/Userprofile/UserProfile";
import React from "react";

const page = () => {
  return (
    <section className="user-profile">
      <div className="user-section-width">
        <div className="2xl:container">
          <div className="flex">
            <div className="w-full border dark:border-brandLightOpacity10 rounded-lg dark:bg-[#2a2627]">
              <ProfileDetail />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
