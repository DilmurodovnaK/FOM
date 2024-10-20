"use client"
import React from 'react'
import image from "../img/doctor2.png"
import Navbar from './navbar'
import plus from "../img/plus.png"
const Malumot: React.FC = () => {
  return (
    
   <>
    <div className=' w-full pt-14  '>
      <div className='flex px-20 items-center  justify-between xl:gap-x-7 xl:px-12 md:gap-8 lg:px-8 md:flex-col nb:px-5  md:items-center'>
      <div className='flex  flex-col w-[50%] items-start gap-7 xl:gap-4  md:w-[100%]'>
        <h3 className='font-nunito font-bold text-[48px] xl:text-[40px]  leading-[48px] text-black max-w-[550px] md:text-[34px] md:leading-[34px]'><span className='text-[#712176]'>Немного
          </span> о нашем медицинском центре</h3>
      <p className='font-nunito font-normal text-[18px] text-black  lg:text-[14px]  leading-[28px] max-w-[580px] md:font-normal md:text-[16px] md:leading-[22px]'>Многопрофильное амбулаторно-поликлиническое учреждение для детей и взрослых в городе Мытищи. У нас ежегодно обслуживаются более 150000 пациентов.</p>
    
    </div>
   
      <img src={image.src} alt="" className='max-w-[550px] w-[50%]  md:w-[100%] md:max-w-[400px] md:max-h-[420px] md:hidden' />
   </div>
    </div>

    <div className="w-full  ">
      <div className="p-14  mx-20 xl:mx-10 xl:px-5 nb:mx-5 lg:mx-8 bg-[#F0F6F9] md:py-14 rounded-[5px]">
        <div className='grid grid-cols-4  sm:grid-cols-2 sm:gap-7 justify-between gap-x-5'>
          <div className='flex flex-col items-start max-w-[260px] gap-2'>
            <img src={plus.src} alt="" />
            <span className='text-[#017CC1] md:text-xl text-2xl font-medium'>10+</span>
            <span className='font-normal text-black md:text-base lg:text-sm  text-lg max-w-[222px]'>лет заботы о вашем здоровье</span>
          </div>
           <div className='flex flex-col items-start max-w-[260px] gap-2'>
            <img src={plus.src} alt="" />
            <span className='text-[#017CC1] md:text-xl text-2xl font-medium'>150</span>
            <span className='font-normal text-black md:text-base lg:text-sm  text-lg max-w-[222px]'> Опытные специалисты</span>
          </div>
           <div className='flex flex-col items-start max-w-[260px] gap-2'>
            <img src={plus.src} alt="" />
            <span className='text-[#017CC1] md:text-xl text-2xl font-medium'>3000</span>
            <span className='font-normal text-black md:text-base lg:text-sm  text-lg max-w-[222px]'>медицинских услуг по всем направлениям</span>
          </div>
           <div className='flex flex-col items-start max-w-[260px] gap-2'>
            <img src={plus.src} alt="" />
            <span className='text-[#017CC1] md:text-xl text-2xl nb:text-lg font-medium'>День в день</span>
            <span className='font-normal text-black md:text-base lg:text-sm  text-lg max-w-[222px]'>Приём к врачу в день обращения</span>
          </div>
        </div>
        

      </div>
      </div>
   </>
  )
}

export default Malumot