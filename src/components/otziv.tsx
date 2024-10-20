"use client"
import React from 'react'
import stars from "../img/stars.png"
const Otziv: React.FC = () => {
  return (
    <div className="w-full mt-20 nb:mt-16">
      <div className="px-20 xl:px-12 lg:px-8 md:px-5 flex flex-col items-center gap-8">
        <div className=" w-full text-start">
          <h3 className="font-nunito font-bold text-[44px] xl:text-[38px] text-start md:text-[34px] leading-tight text-black max-w-[550px]">
         <span className='text-[#6A0572]'>Отзывы</span> пациентов
          </h3>
          </div>
<div className='flex justify-between gap-x-10 sm:flex-col sm:gap-12'>
<div className='w-[50%] flex flex-col items-start gap-5 sm:w-[100%] sm:gap-3'>
    <div className='flex flex-col'>
          <span className='font-semibold text-base'>Балушина Татьяна  </span>
          <span className='font-normal text-base'>18 апреля 2023</span>
    </div>
  
   <img src={stars.src} alt="" />
   <p className='otzivip font-semibold text-lg lg:text-base nb:text-sm '>Попала Татьяне спонтанно.Oчень довольна приёмом и проведением ультразвуковой диагностики. Спасибо за внимательное отношение к пациентам При возникнвении проблем теперь только к ней!</p>

<span className='font-semibold text-xl lg:text-base'> Врач: <span className='text-[#20C997] font-semibold text-xl lg:text-base'>Савина Наталья Владимировна</span></span>
</div>

<div className='w-[50%] flex flex-col items-start gap-5 sm:w-[100%] sm:gap-3'>
    <div className='flex flex-col '>
          <span className='font-semibold text-base'>Трофимов Иван</span>
          <span className='font-normal text-base'>2 март 2024</span>
    </div>
  
   <img src={stars.src} alt="" />
   <p className='otzivip font-semibold text-lg lg:text-base nb:text-sm'>Огромное спасибо врачу за тщательное обследование. Выявили нехватку витамина Д, проблем с щитовидной, к счастью, не оказалось. Доктор приятная в общении и настоящий профессионал!</p>

<span className='font-semibold text-xl lg:text-base'> Врач: <span className='text-[#20C997] font-semibold text-xl lg:text-base'>Крятов Андрей Михайлович</span></span>
</div>



</div>

          </div>

          </div>
  )
}

export default Otziv