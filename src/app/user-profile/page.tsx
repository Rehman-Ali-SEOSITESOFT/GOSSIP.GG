import ProfileDetail from "@/components/Userprofile/UserProfile";
import React from "react";

const page = () => {
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
    </section>
  );
};

export default page;
