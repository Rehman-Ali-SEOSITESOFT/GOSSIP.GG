import Filter from "@/components/Filter/Filter"
import React from "react"
import GuidesCards from "./GuidesCards/GuidesCards"
<<<<<<< HEAD
import Pagination from "@/components/Pagination"
import rog1 from "../../../assets/gaming-guides-feature/rog1.png"
import rog2 from "../../../assets/gaming-guides-feature/rog2.png"
import Image from "next/image"
=======
>>>>>>> 4ed076598d8d2c1e5670db63da01f19b56fde779

const Guides = () => {
  return (
    <>
      <>
        <section className="guide_category_wrapper">
          <div className="global-section-width">
            <div className="2xl:container">
              <Filter />
              <div className="guides_cards_wrappers_tabs flex justify-between	">
                <div className="w-4/5">
                  <GuidesCards />
                </div>
                <div className="right_side_guide_section pt-[48px]">
                  <Image src={rog1} alt="image" />
                  <Image src={rog2} alt="image" className="mt-[32px]" />
                </div>
              </div>
              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  )
}

export default Guides
