import React from "react"
import topimg from "../../../assets/tech/news-top.png"
import bottomimg from "../../../assets/tech/new-bottom.png"
import Image from "next/image"
const RightSidebar = () => {
  return (
    <>
      <aside className="w-[250px] pt-12  mw-lg:w-[230px]  mw-md:hidden">
        <div className="top-img sticky top-[120px] ">
          <Image src={topimg} alt="top " className="ml-auto mr-0  mb-8" />

          <Image src={bottomimg} alt="bottom " className="ml-auto mr-0" />
        </div>
      </aside>
    </>
  )
}

export default RightSidebar
