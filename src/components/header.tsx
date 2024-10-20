"use client"
import React from 'react'
import image from "../img/doctor1.png"
import Navbar from './navbar'
const Header: React.FC = () => {
  return (
    // bg-[#90D26D]
  //  bg-[#4caf50]
    <div className=' w-full pt-14 pb-10   btn3  '>
      <div className='flex px-20 items-center max-h-[670px] justify-between xl:gap-x-7 xl:px-12 md:gap-8 lg:px-8 md:flex-col nb:px-5 md:items-center'>
      <div className='flex  flex-col w-[50%] items-start gap-7 xl:gap-4  md:w-[100%]'>
        <h1 className='font-nunito font-bold text-[60px] xl:text-[48px]  leading-[60px] text-white max-w-[550px] md:text-[40px] md:leading-[40px]'>Клиника Фатхулла ота</h1>
      <p className='font-nunito font-normal text-[20px] text-white  lg:text-[15px]  leading-[30px] max-w-[580px] md:font-light md:text-[16px] md:leading-[22px]'>Осуществляем комплексное медицинское обслуживание населения: консультации и амбулаторное лечение у специалистов всех направлений, медицинские обследования и диагностические процедуры.</p>
    <button className='font-nunito font-normal btn2 text-lg px-10 py-3 bg-[#00d2ff] text-white rounded-md  lg:rounded-[5px] lg:px-8'>Записаться</button>
    </div>
   
      <img src={image.src} alt="" className='max-w-[550px] w-[50%]  md:w-[100%] md:max-w-[400px] md:max-h-[420px]' />
   </div>
    </div>
   
  )
}

export default Header