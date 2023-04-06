import Filter from "@/components/Filter/Filter"
import React from "react"
import GuidesCards from "./GuidesCards/Guidescards"

const Guides = () => {
  return (
    <>
      <>
        <section className="guide_category_wrapper">
          <div className="global-section-width">
            <div className="2xl:container">
              <Filter />
              <div className="guides_cards_wrappers_tabs">
                <GuidesCards />
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  )
}

export default Guides
