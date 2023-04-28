import React from "react";
import ExportEventBannerSlider from "./Slider";

const ExportsEventBanner = () => {
  return (
    <div className="ExportsEventBanner pt-11 mw-md:pt-8	">
      <div className="max-w-[1440px] w-full m-auto">
        <div className="2xl:container exports-banner relative">
          <ExportEventBannerSlider />
        </div>
      </div>
    </div>
  );
};

export default ExportsEventBanner;
