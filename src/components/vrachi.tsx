"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import usluga from '../img/usluga.png'; // Update to the correct image path
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import necessary modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import vrach1 from "../img/vrach1.png";
import vrach2 from "../img/vrach2.png";
import vrach3 from "../img/vrach3.png";
import vrach4 from "../img/vrach4.png";
// Define a type for doctor items
interface Vrach {
  src: string;
  name: string; 
  about: string; // About the doctor and their work
}

// Define the doctors array with correct types
const vrach: Vrach[] = [
  {
    src: vrach1.src,
    name: 'Доктор Иванов',
    about: 'Специалист в области радиологии с 10-летним стажем работы.',
  },
  {
    src: vrach2.src,
    name: 'Доктор Петров',
    about: 'Эксперт в области компьютерной томографии, работающий в ведущих клиниках.',
  },
  {
    src: vrach3.src,
    name: 'Доктор Сидоров',
    about: 'Профессионал в области ультразвуковой диагностики с большим опытом.',
  },
  {
    src: vrach4.src,
    name: 'Доктор Сидоров',
    about: 'Профессионал в области ультразвуковой диагностики с большим опытом.',
  },

];

const Vrachi: React.FC = () => {
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
          <h3 className="font-nunito font-bold text-[44px] xl:text-[38px] text-start md:text-[34px] leading-tight text-black max-w-[550px]">
           <span className='text-[#6A0572] '>Врачи</span>  медицинского центра
          </h3>
          {/* Back and Next Buttons */}
          <div className="flex justify-center gap-4 ">
            <button
              className="border-[#6A0572] hidden xl:block border-2 text-white p-6 rounded-full hover:bg-[#004a6f] transition-all"
              onClick={handlePrev}
            >
            </button>
            <button
              className="border-[#6A0572] hidden xl:block border-2 text-white p-6 rounded-full hover:bg-[#004a6f] transition-all"
              onClick={handleNext}
            >
            
            </button>
          </div>
        </div>

        {/* Swiper container */}
        <div className="relative w-full items-center justify-between">
          <Swiper
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
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // Small desktops (1024px wide and up) - Show 3 slides
              850: {
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
            {vrach.map((doctor, index) => (
              <SwiperSlide className='swip2 items-center' key={index}>
                <div className="max-w-[300px] card rounded-lg   dark:bg-gray-800 dark:border-gray-700 ">
                  <Image
                    src={doctor.src}
                    alt={doctor.name} // Update alt attribute
                    width={300}
                    height={250}
                    className="rounded-t-lg object-cover cardimage"
                  />
                  <div className="p-5">
                    <h4 className="font-bold text-[#6A0572] text-lg mb-1">{doctor.name}</h4> 
                    <p className="font-normal text-[#3a3939]  dark:text-gray-400">
                      {doctor.about} 
                    </p>
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

export default Vrachi;
