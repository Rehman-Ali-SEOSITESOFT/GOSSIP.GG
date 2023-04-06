import React from "react";
import topimg from "../../../assets/tech/news-top.png";
import bottomimg from "../../../assets/tech/new-bottom.png";
import Image from "next/image";

const AsideBar = () => {
  return (
    <aside className="w-[250px] pt-12 ">
      <div className="top-img mb-8">
        <Image src={topimg} alt="top " className="ml-auto mr-0" />
      </div>
      <div className="top-img">
        <Image src={bottomimg} alt="bottom " className="ml-auto mr-0" />
      </div>
    </aside>
  );
};

export default AsideBar;
