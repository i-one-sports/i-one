import React from 'react'
import facebook from '@/assets/images/Fb.png'
import twitter from '@/assets/images/Tw.png'
import instagram from '@/assets/images/Ig.png'
const Footer2 = () => {
  return (
    <div className="bg-[black] px-6 md:px-[75px] py-5 md:py-[57px]  w-full h-full ">
      <div className="flex flex-col gap-7 md:flex-row w-full justify-between md:items-center ">
        <div>
          <h1 className="text-[24px] sm:text-[28px] w-full text-[white] text-left md:text-[30px] font-extrabold">
            i-<span className="text-primary">o</span>ne
          </h1>
        </div>
        <div>
          <p className="text-[14px]  text-[#667185]">
            © {new Date().getFullYear()} I-One. All rights reserved.
          </p>
        </div>
        <div className="flex  gap-[15px]  items-center">
          <img src={facebook} className="w-[34px] " alt="" />
          <img src={twitter} className="w-[34px] " alt="" />
          <img src={instagram} className="w-[34px] " alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer2
