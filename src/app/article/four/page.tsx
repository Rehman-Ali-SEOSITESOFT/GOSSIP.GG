"use client";


import ListBox from '@/components/Article/Listing';
import Comments from '@/components/Article/Comments';
import React from 'react'
import UserLogoSection from '@/components/Article/UserInfoSection';
import AsNavFor from '@/components/Article/Slider';

const Page = () => {
  return (
    <div>
      {/* <ListBox/>
       <div className='mt-[48px]'>
      <UserLogoSection/>
      </div>
      <div className='mt-[10px]'>
      <Comments/>
     
      </div> */}
        <AsNavFor/>      
    </div>
  )
}

export default Page