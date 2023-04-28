import React from "react";
import Image from 'next/image';
import One from '../../../assets/images/article/1.png';
import Two from '../../../assets/images/article/2.png';
import Three from '../../../assets/images/article/3.png';
import Four from '../../../assets/images/article/4.png';
import Five from '../../../assets/images/article/5.png';
import Six from '../../../assets/images/article/6.png';
import Seven from '../../../assets/images/article/7.png';
import Eight from '../../../assets/images/article/8.png';
import Nine from '../../../assets/images/article/3.png';
import Amazon from '../../../assets/images/article/amazon.png';
const ListBox = () => {
 
 const list = [
  {
  id:1,
  image: One,
  image2: Amazon,
  title:'Samsung QN90B QLED TV (45 inch)',
  discount_price:'900000',
  price:'100000',
  off:"(15% off)"

 },
 {
  id:2,
  image: Two,
  image2: Amazon,
  title:'Samsung QN90B QLED TV (45 inch)',
  discount_price:'900000',
  price:'100000',
  off:"(15% off)"

 },
 {
  id:3,
  image: Three,
  image2: Amazon,
  title:'Samsung QN90B QLED TV (45 inch)',
  discount_price:'900000',
  price:'100000',
  off:"(15% off)"

 },
 {
  id:4,
  image: Four,
  image2: Amazon,
  title:'Samsung QN90B QLED TV (45 inch)',
  discount_price:'900000',
  price:'100000',
  off:"(15% off)"

 },
 {
  id:5,
  image: Five,
  image2: Amazon,
  title:'Samsung QN90B QLED TV (45 inch)',
  discount_price:'900000',
  price:'100000',
  off:"(15% off)"

 },
 {
  id:6,
  image: Six,
  image2: Amazon,
  title:'Samsung QN90B QLED TV (45 inch)',
  discount_price:'900000',
  price:'100000',
  off:"(15% off)"

 },
 {
  id:7,
  image: Seven,
  image2: Amazon,
  title:'Samsung QN90B QLED TV (45 inch)',
  discount_price:'900000',
  price:'100000',
  off:"(15% off)"

 },
 {
  id:8,
  image: Eight,
  image2: Amazon,
  title:'Samsung QN90B QLED TV (45 inch)',
  discount_price:'900000',
  price:'100000',
  off:"(15% off)"

 },
 {
  id:9,
  image: Nine,
  image2: Amazon,
  title:'Samsung QN90B QLED TV (45 inch)',
  discount_price:'900000',
  price:'100000',
  off:"(15% off)"

 }
]
 
  return (
    <div className="global-section-width-article ">
      <div className="w-full mw-sm1:pt-[10px] pt-[20px] rounded border border-brandLightOpacity100 dark:border-brandLightOpacity10 mw-sm1:px-[10px] px-[37px] max-w-[968px] dark:bg-brandDark1 bg-white">
         {list.map((item, index) => 
           <div key={index} className={`flex mw-sm1:flex-col  flex-row py-[24px] justify-between items-center ${(list.length - 1) !== index  ? 'border-b border-b-brandLightOpacity100 dark:border-b-brandLightOpacity10' : ""} `}>
           <div className="flex items-center">
             <Image src={item.image} className="mw-sm4:h-[50px] mw-sm4:w-[90px] mw-md:h-[75px] mw-md:w-[105px] mw-9:h-[95px] mw-9:w-[130px]" alt="article"/>
             <div className="ml-[26px] mw-md:ml-[10px] mw-9:ml-[15px]">
               <p className="montserratfont mw-sm4:text-[10px] font-bold mw-md:text-[14px] mw-9:text-[16px] text-[18px] dark:text-brandLightOpacity100 text-brandDark3 ">{item.title}</p>
               <div className="flex items-center">
                 <Image src={item.image2} alt="amazon"/>
                 <span className=" montserratfont mw-sm4:text-[8px] pl-[8px] font-medium text-base mw-md:text-[12px] mw-9:text-[14px] dark:text-brandLightOpacity70 text-brandDark2">&#x20B9;{item.discount_price}</span><del className="mw-sm4:text-[8px] mw-md:text-[12px] mw-9:text-[14px] pl-[8px] montserratfont font-medium text-base dark:text-brandLightOpacity30 text-textColorGray">&#x20B9;{item.price}</del><span className="mw-sm4:text-[8px] mw-md:text-[12px] mw-9:text-[14px] pl-[8px] montserratfont font-medium text-base dark:text-brandLightOpacity70 text-brandDark2">{item.off}</span> 
               </div>
             </div>
           </div>
           <div>
           <a className="dark:hover:bg-[#353233] mw-sm1:mt-[20px] mw-sm1:w-[100px] hover:bg-arrowicon skip_btn mw-md:w-[130px]  mw-9:w-[180px] w-[231px] border border-brandDark2 dark:border-brandLightOpacity100 inline-block py-3	rounded-3xl	text-center m-auto  w-md:text-[12px] mw-9:text-[16px] text-lg leading-6 text-brandDark2 dark:text-brandLightOpacity100 font-bold montserratfont	cursor-pointer   mw-sm3:w-[80px] mw-sm:text-[12px]  mw-sm:text-semibold">
             Buy Now
           </a>
           </div>
       </div>
         )}
                
      </div>
    </div>
  );
};

export default ListBox;
