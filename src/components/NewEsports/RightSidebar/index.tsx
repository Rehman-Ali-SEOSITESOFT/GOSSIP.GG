import React from "react";
import ad1 from "../../../assets/newsports/add1.png";
import ad2 from "../../../assets/newsports/add2.png";
import Image from "next/image";
const Advertise = () => {
  return (
    <>
      <aside className="w-[200px] mw-md:hidden">
        <div className="sticky top-[150px]">
          <Image src={ad1} alt="top " className="ml-auto mr-0  mb-[12px]" />

          <Image src={ad2} alt="bottom " className="ml-auto mr-0" />
        </div>
      </aside>
    </>
  );
};

export default Advertise;
