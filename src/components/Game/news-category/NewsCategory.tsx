"use client"
import Image from "next/image"
import React, { useState } from "react"
import NewCategoryList from "@/components/NewCategoryList/NewCategoryList"
import rog2 from "../../../assets/new-category/rogImage.png"
import rog1 from "../../../assets/new-category/roglargeImg.png"
import Filter from "@/components/Filter/Filter"
import Pagination from "@/components/Pagination"
const page = () => {
  return (
    <>
      <section className="new_category_main_wrapper">
        <div className="global-section-width">
          <div className="2xl:container">
            <Filter />
            <div className="news_category_list flex justify-between">
              <div className="w-4/5">
                <NewCategoryList />
              </div>
              <div className="pt-[48px]">
                <Image src={rog1} alt="Image" />
                <Image src={rog2} alt="Image" className="mt-[32px]" />
              </div>
            </div>
            <div>
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
