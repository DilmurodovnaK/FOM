"use client"
import React from 'react'
import logo from "../img/logo.png"
import insta from "../img/instagram.svg"
import tg from "../img/telegram.svg"
const Footer: React.FC = () => {
  return (
     <div className=' w-full mt-14 py-10 px-20 xl:px-10 nb:px-5  bg-[#F0F6F9]   '>
        <div className='flex  xl:px-0  justify-between sm:gap-x-4   items-start gap-x-10 xl:gap-x-7   md:flex-col  md:items-center'>

<div className='flex justify-between w-[50%] gap-x-10 md:w-[100%] sm:flex-col sm:items-center'>
<div className='flex flex-col items-start gap-5 sm:items-center'>
    <p className='text-3xl font-bold flex lg:text-xl sm:text-center flex-col gap-4'>Клиника Фатхулла ота</p>
    <p className='max-w-[350px] lg:text-sm text-center '>Клиника "Фатхулла ота" известна своим профессиональным подходом к лечению пациентов.</p>
    <p className='font-normal max-w-[350px] text-center lg:text-sm text-base text-[#4F4F4F]'>© 2011-2024 Городской Медицинский Центр. Все права защищены.</p>
</div>

    {/* <ul className='flex flex-col gap-3 mt-10'>
        <li className='font-bold text-base text-[#4F4F4F]'>Направления</li>
        <li className='font-bold text-base text-[#4F4F4F]'>Направления</li>
         <li className='font-bold text-base text-[#4F4F4F]'>Направления</li>
          <li className='font-bold text-base text-[#4F4F4F]'>Направления</li>
        
    </ul> */}
<div className='flex flex-col gap-3 mt-10'>
    <p className='font-semibold text-xl text-center'>Телефон</p>
    <p className='font-semibold text-xl lg:text-sm text-center text-[#6A0572]'>(998) 90 908-70-74</p>
    <p className='font-semibold text-xl lg:text-sm text-center text-[#6A0572]'> (998) 55 502-05-76</p>
</div>
</div>
<div className='flex justify-between w-[50%] gap-x-10 md:w-[100%] sm:flex-col sm:items-center'>
<div className='flex flex-col gap-3 mt-10'>
    <p className='font-normal lg:text-sm text-base text-center'>Ташкент, просп. Бунёдкор (дублёр), 1этаж 1</p>
    <p className='font-normal lg:text-sm text-base text-center'>Ежедневно с 8.00 до 15.00</p>
    <p className='font-medium lg:text-sm text-base text-center'>Воскресенье закрыто</p>
</div>
<div className='flex flex-col gap-3 mt-10 text-center'><span className='flex items-center gap-x-2 font-semibold'><img src={insta.src} alt="" width={30} height={30} />Написать в Инстаграм</span>
<span className='flex items-center gap-x-2 text-center font-semibold'><img src={tg.src} alt="" width={30} height={30} />Написать в Телеграм</span>
 <button className='font-nunito font-semibold text-center mt-2 text-lg px-7 py-3 text-[#4F4F4F] rounded-md bg-[#E3EFF5] lg:rounded-[5px] lg:px-8'>Записаться</button>
</div>
</div>
        </div>
</div>  
  )
}

export default Footer