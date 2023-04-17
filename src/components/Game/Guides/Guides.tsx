import Filter from "@/components/Filter/Filter"
import React from "react"
import GuidesCards from "./GuidesCards/GuidesCards"
import Pagination from "@/components/Pagination"

import Image from "next/image"
import RightSidebar from "../rightbar2/RightSidebar"

const Guides = () => {
  return (
    <>
      <>
        <section className="guide_category_wrapper">
          <div className="global-section-width">
            <div className="2xl:container">
              <Filter />
              <div className="guides_cards_wrappers_tabs flex justify-between	relative">
                <div className="w-4/5">
                  <GuidesCards />
                </div>
                <RightSidebar />
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
