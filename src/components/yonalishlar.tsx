"use client";
import React from 'react';

const Yonalishlar: React.FC = () => {
  const directions = [
    { description: "Акушерство" },
    { description: "Мануальная терапия" },
    { description: "Акушерство" },
    { description: "Мануальная терапия" },
    { description: "Акушерство" },
    { description: "Мануальная терапия" },
  ];

  return (
    <div id='#napravleniya' className="relative top-[-40px] w-full px-20 2xl:px-16 xl:px-12 lg:px-8 md:px-6 sm:px-4 nb:px-2">
      <div className="grid grid-cols-4 gap-x-10 justify-between lg:gap-y-6 md:gap-y-4 nb:gap-y-3 xl:grid-cols-2 xl:justify-items-center xl:gap-10 sm:grid-cols-1 sm:gap-8">
        <div className="max-w-[306px] sm:w-full w-full py-6 rounded-[5px] flex flex-col items-start px-5 gap-4 bg-[#F0F6F9]  ms:max-w-[300px] ">
          <h3 className="font-bold text-[22px] leading-[22px] sm:text-[18px] text-black sm:leading-[20px]">Направления</h3>
          <span className="border-[1px] xl:w-[245px] max-w-[230px] min-w-[190px]  sm:w-[200px] ms:w-[330px] border-[#C6D9E2]"></span>
          {directions.map((item, index) => (
            <p className="flex flex-col text-black" key={index}>{item.description}</p>
          ))}
          <button className="max-w-[246px] xl:w-[246px]  min-w-[200px] h-[54px] text-white font-bold text-base mt-2 bg-[#712176] rounded-[5px] sm:w-[200px] sm:h-[48px] ms:w-[180px] ms:h-[42px] mm:w-[160px]  ">Все услуги</button>
        </div>

        <div className="max-w-[306px]  w-full py-6 rounded-[5px] flex flex-col items-start px-5 gap-4 bg-[#F0F6F9]  ms:max-w-[300px] ">
          <h3 className="font-bold text-[22px] leading-[22px] sm:text-[18px] text-black sm:leading-[20px]">Направления</h3>
          <span className="border-[1px] xl:w-[245px] max-w-[230px] min-w-[190px]  sm:w-[200px] ms:w-[330px] border-[#C6D9E2]"></span>
          {directions.map((item, index) => (
            <p className="flex flex-col text-black" key={index}>{item.description}</p>
          ))}
          <button className="max-w-[246px] xl:w-[246px] min-w-[200px] h-[54px] text-white font-bold text-base mt-2 bg-[#712176] rounded-[5px] sm:w-[200px] sm:h-[48px] ms:w-[180px] ms:h-[42px] mm:w-[160px] ">Все услуги</button>
        </div>

        <div className="max-w-[306px] w-full py-6 rounded-[5px] flex flex-col items-start px-5 gap-4 bg-[#F0F6F9]  ms:max-w-[300px] ">
          <h3 className="font-bold text-[22px] leading-[22px] sm:text-[18px] text-black sm:leading-[20px]">Направления</h3>
          <span className="border-[1px] xl:w-[245px] max-w-[230px] min-w-[190px]   sm:w-[200px] ms:w-[330px] border-[#C6D9E2]"></span>
          {directions.map((item, index) => (
            <p className="flex flex-col text-black" key={index}>{item.description}</p>
          ))}
          <button className="max-w-[246px] xl:w-[246px] min-w-[200px] h-[54px] text-white font-bold text-base mt-2 bg-[#712176] rounded-[5px] sm:w-[200px] sm:h-[48px] ms:w-[180px] ms:h-[42px] mm:w-[160px] ">Все услуги</button>
        </div>

        <div className="max-w-[306px] w-full py-6 rounded-[5px] flex flex-col items-start px-5 gap-4 bg-[#F0F6F9]  ms:max-w-[300px] ">
          <h3 className="font-bold text-black text-[22px] leading-[22px] sm:text-[18px] sm:leading-[20px]">Направления</h3>
          <span className="border-[1px] xl:w-[245px] max-w-[230px] min-w-[190px] sm:w-[200px] ms:w-[330px] border-[#C6D9E2]"></span>
          {directions.map((item, index) => (
            <p className="flex flex-col text-black" key={index}>{item.description}</p>
          ))}
          <button className="max-w-[246px] xl:w-[246px] min-w-[200px] h-[54px] text-white font-bold text-base mt-2 bg-[#712176] rounded-[5px] sm:w-[200px] sm:h-[48px] ms:w-[180px] ms:h-[42px] mm:w-[160px] ">Все услуги</button>
        </div>
      </div>
    </div>
  );
};

export default Yonalishlar;
