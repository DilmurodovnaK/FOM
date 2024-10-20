"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import usluga from '../img/usluga.png'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import usluga2 from '../img/usluga2.png'; 
import usluga3 from '../img/usluga3.png'; 
interface Service {
  src: string;
  description: string;
}

// Define the services array with correct types
const services: Service[] = [
  {
    src: usluga.src,
    description: 'Магнитно-резонансная томография (МРТ)',
  },
  {
    src: usluga2.src,
    description: 'Компьютерная томография (КТ)',
  },
  {
    src: usluga3.src,
    description: 'Ультразвуковое исследование (УЗИ)',
  },
  {
    src: usluga.src,
    description: 'Магнитно-резонансная томография (МРТ)',
  },
  {
    src: usluga3.src,
    description: 'Компьютерная томография (КТ)',
  },
  {
    src: usluga2.src,
    description: 'Ультразвуковое исследование (УЗИ)',
  },
  {
    src: usluga3.src,
    description: 'Магнитно-резонансная томография (МРТ)',
  },
  {
    src: usluga.src,
    description: 'Компьютерная томография (КТ)',
  },
];

const Xizmatkorsatish: React.FC = () => {
  const swiperRef = useRef<any>(null); // Reference for controlling Swiper

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev(); // Move to the previous slide
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext(); // Move to the next slide
  };

  return (
    <div className="w-full mt-24">
      <div className="px-20 xl:px-12 lg:px-8 md:px-5 flex flex-col items-center gap-8">
        <div className="flex w-full justify-between items-center gap-5 flex-wrap text-center md:flex-col md:items-start">
          <h3 className="font-nunito font-bold text-[44px] xl:text-[40px] md:text-[34px] leading-tight text-black max-w-[550px]">
          <span className='text-[#6A0572]'>Популярные</span>  услуги
          </h3>
            {/* Back and Next Buttons */}
              <div className="flex justify-center gap-4">
            <button
              className="border-[#6A0572] border-2 text-white p-6 rounded-full hover:bg-[#004a6f] transition-all"
              onClick={handlePrev}
            >
            </button>
            <button
              className="border-[#6A0572] border-2 text-white p-6 rounded-full hover:bg-[#004a6f] transition-all"
              onClick={handleNext}
            >
            
            </button>
          </div>
        </div>

        {/* Swiper container */}
        <div className="relative w-full items-center justify-between">
          <Swiper className='swip'
            spaceBetween={30} // Space between slides
            slidesPerView={4} // Show 4 slides by default
            autoplay={{ delay: 3000 }} // Enable autoplay with 3 seconds delay
            pagination={{ clickable: true }} // Enable clickable pagination
            modules={[Navigation, Pagination, Autoplay]} // Import Swiper modules including Autoplay
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance in ref
            breakpoints={{
              // Mobile (up to 768px wide) - Show 1 slide
              200: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // Tablet (768px wide and up) - Show 2 slides
              660: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // Small desktops (1024px wide and up) - Show 3 slides
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // Large desktops (1200px wide and up) - Show 4 slides
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {services.map((usluga, index) => (
              <SwiperSlide className='swip' key={index}>
                <div className="max-w-[300px] bg-[#F5F5F5] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <Image
                    src={usluga.src}
                    alt={usluga.description}
                    width={300}
                    height={250}
                    className="rounded-t-lg object-cover"
                  />
                  <div className="p-5">
                    <p className="mb-3 font-normal text-black max-w-[240px] dark:text-gray-400">
                      {usluga.description}
                    </p>
                    <button className="xl:w-[246px] w-full h-[54px] btn text-white font-bold text-base mt-2 bg-[#20C997] rounded-[5px] hover:bg-[#6A0572] transition-colors">
                      Все услуги
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Xizmatkorsatish;
