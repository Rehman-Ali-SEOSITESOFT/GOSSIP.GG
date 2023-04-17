import Filter from "@/components/Filter/Filter"
import React from "react"
import ReviewCards from "./ReviewCards/ReviewCards"
import rog1 from "../../../assets/gaming-guides-feature/rog1.png"
import rog2 from "../../../assets/gaming-guides-feature/rog2.png"
import Image from "next/image"
import Pagination from "@/components/Pagination"
import AsideBar from "@/components/Tech/Asidebar"
import RightSidebar from "../rightbar2/RightSidebar"
const Reviews = () => {
  return (
    <>
      <section>
        <div className="reviews_category_wrapper ">
          <div className="global-section-width">
            <div className="2xl-container">
              <div>
                <Filter />
              </div>
              <div className="flex justify-between relative">
                <div className="w-9/12">
                  <ReviewCards />
                </div>
                <RightSidebar />
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
