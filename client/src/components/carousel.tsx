import React, { useState } from 'react';
import Image from 'next/image';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showItem = (index:any) => {
    const items = document.querySelectorAll('[data-carousel-item]');
    items.forEach((item, i) => {
      item.classList.toggle('duration-700', i === index);
      item.classList.toggle('ease-in-out', i === index);
      item.classList.toggle('opacity-0', i !== index);
    });
  };

  const updateCarousel = () => {
    showItem(currentIndex);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 2); // Assuming 5 items in the carousel
    updateCarousel();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2); // Assuming 5 items in the carousel
    updateCarousel();
  };

  return (
    <>
      <div id="controls-carousel" className="relative w-full" data-carousel="static">
        <div className="relative h-44 overflow-hidden rounded-lg">
          
          <div className="duration-700 ease-in-out w-full" data-carousel-item>
            <Image src={'/pic2.png'} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-fit" width={'100'} height={'0'} layout='responsive' alt="image" />
          </div>
          <div className="duration-700 ease-in-out w-full" data-carousel-item>
            <Image src={'/pic3.png'} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-fit" width={'100'} height={'0'} layout='responsive' alt="image" />
          </div>
          {/* <div className="duration-700 ease-in-out" data-carousel-item>
            <Image src={pic1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="image" />
          </div> */}
          

          {/* Buttons */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={prevSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>

          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={nextSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>

          </button>
        </div>
      </div>
    </>
  );
};
