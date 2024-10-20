"use client";
import React, { useState } from 'react';

const Priyom: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
  
    <div className="w-full mt-10  ">
      <div className="p-14  mx-20 xl:mx-10 xl:px-5 nb:mx-5 lg:mx-8 priyom md:py-14 rounded-[14px]">
        <div className="flex justify-between items-start gap-10 nb:flex-col nb:items-center nb:gap-3">
          <h2 className="max-w-[536px] font-bold text-[48px] leading-[48px] ms:text-[34px] ms:leading-[34px] ms:text-start text-white nb:text-center">
            Записаться на приём
          </h2>
          
          <p className="max-w-[355px] font-normal text-xl  text-white nb:text-center md:text-lg ms:text-start ">
            Оставьте заявку и мы свяжемся с вами в ближайшее время
          </p>
        </div>
        <div className="grid grid-cols-3 justify-between gap-5 mt-16 nb:mt-10  md:grid-cols-2 nb:grid-cols-1 nb:flex-col  nb:items-center nb:justify-items-center  ">
          {/* First column of inputs */}
          <div className="flex flex-col space-y-4 ">
           <div className="max-w-[350px] min-w-[280px] min-w h-[70px] xl:min-w-[180px]  ">   {/* nb:min-w-[400px] ms:min-w-[260px] */}
              <input
                className="w-full bg-[#F5F5F5]  placeholder:text-black text-black text-sm border border-slate-200 rounded-md px-6 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Ваше имя"
              />
            </div>
            <div className="max-w-[350px] min-w-[280px]  h-[70px] xl:min-w-[180px]">
              <input
                className="w-full bg-[#F5F5F5] placeholder:text-black text-black text-sm border border-slate-200 rounded-md px-6 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Ваш телефон"
              />
            </div>
          </div>

          {/* Second column of inputs */}
          <div className="flex flex-col space-y-4">
            <div className="max-w-[350px] min-w-[280px] h-[70px] xl:min-w-[180px]">
              <input
                className="w-full bg-[#F5F5F5] placeholder:text-black text-black text-sm border border-slate-200 rounded-md px-6 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Email"
              />
            </div>
            <div className="max-w-[350px] min-w-[280px] h-[70px] xl:min-w-[180px]">
              <input
                className="w-full bg-[#F5F5F5] placeholder:text-black text-black text-sm border border-slate-200 rounded-md px-6 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Дата приёма"
              />
            </div>
          </div>

          {/* Third column with button and checkbox */}
          <div className="flex flex-col space-y-4 ">
            <div className="max-w-[350px] min-w-[280px] h-[70px] xl:min-w-[180px]">
              <button className="w-full bg-[#A594F9] text-black text-sm border border-[#b3a6f2] rounded-md px-6 py-5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
                Оставить заявку
              </button>
            </div>
            <div className="flex items-center max-w-[350px] min-w-[280px] space-x-2 xl:min-w-[180px]">
              <input
                id="checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="checkbox" className="text-sm text-gray-700">
                <p>Отправляя заявку, вы соглашаетесь на нашу политику конфиденциальности</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

  

    
  );
};

export default Priyom;
