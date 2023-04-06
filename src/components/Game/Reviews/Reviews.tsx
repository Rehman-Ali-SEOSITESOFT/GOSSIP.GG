import Filter from "@/components/Filter/Filter"
import React from "react"
import ReviewCards from "./ReviewCards/ReviewCards"
import rog1 from "../../../assets/gaming-guides-feature/rog1.png"
import rog2 from "../../../assets/gaming-guides-feature/rog2.png"
import Image from "next/image"
import Pagination from "@/components/Pagination"
const Reviews = () => {
  return (
    <>
      <section>
        <div className="reviews_category_wrapper">
          <div className="global-section-width">
            <div className="2xl-container">
              <div>
                <Filter />
              </div>
              <div className="flex justify-between">
                <div className="w-9/12">
                  <ReviewCards />
                </div>
                <div className="image_section pt-[48px]">
                  <Image src={rog1} alt="image" />
                  <Image src={rog2} alt="image" className="pt-[32px]" />
                </div>
              </div>
              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews
