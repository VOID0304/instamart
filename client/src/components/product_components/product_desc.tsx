import { Box, Flex } from "@radix-ui/themes";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCartShopping } from "react-icons/fa6";
import { Footer } from "../foot";

export const MainProductPage = () =>{

}


export const ProductPage = () =>{

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
  
    return(
        <>
        <Box className="p-4">
            <div id="controls-carousel" className="relative h-full" data-carousel="static">
            <div className="relative h-44 overflow-hidden rounded-lg">
            
            <div className="duration-700 ease-in-out h-full" data-carousel-item>
                <Image src={'/bingo2.jpg'} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-fit" width={'100'} height={'0'} layout='responsive' alt="image" />
            </div>
            <div className="duration-700 ease-in-out h-full" data-carousel-item>
                <Image src={'/bingo1.jpg'} className="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-fit" width={'100'} height={'0'} layout='responsive' alt="image" />
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
        </Box>

        {/* description */}

        <Box className="pt-5 pl-5">
            <h1 className="text-lg"><b>Bingo Chilli sprinkled potato chips</b>: 90gms</h1>
        </Box>

        <Flex className="pt-3 pl-5 flex flex-col">
            <Flex>
            <h1 className="font-extralight">Quantity</h1>
            </Flex>
            <Flex className="flex mt-2">
            <Flex>
            <button type="button" className="text-black bg-green-200 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">90 gms</button>
            </Flex>
            {/* <Flex>
            <button type="button" className="text-black bg-green-200 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">110 gms</button>
            </Flex> */}
            </Flex>
        </Flex>
        <hr/>

        <Flex className='flex mt-2 ml-14 items-center'>
            <Flex>
            MRP: <h1 className="text-red-700 line-through">50₹</h1>
            </Flex>
            <Flex className='ml-10'>
            Discount: <h1 className="text-red-700">40₹</h1>
            </Flex>
            <Flex className='ml-10 bg-green-200 rounded-lg w-14' justify={'center'}>
                <h1 className='text-green-700 text-center'>10% <br/> Off</h1>
            </Flex>
        </Flex>

        <Flex className="mt-5 flex items-center ml-24">
            <button type="button" className="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm w-52 px-5 py-2.5 me-2 mb-2">
                <Flex className='flex items-center' justify={'center'}>
                <Flex>
                    <FaCartShopping/>
                </Flex>
                <Flex className='ml-4'>
                    Add to Cart
                </Flex>
                </Flex>
            </button>
        </Flex>
        <hr/>

        <Box className="pt-4 pl-5">
        <a href="#" className="font-normal text-green-500 underline dark:text-white decoration-green-500">DESCRIPTION</a>
        </Box>
        
        <Flex className="flex flex-col pl-5 pt-2">
            <Flex className="flex flex-col">
                <Flex>
                <span className="font-semibold mr-3">Overview</span>
                </Flex>
                <Flex>
                Bingo! Chips Original Style Chilli Sprinkled potato chips are made in the authentic flat-cut style, gently sprinkled with fiery red chili powder. The thinly sliced potato chips will blow your tastebuds away with their flavour. Bingo! Original Style Chilli Sprinkled potato chips also have a light, and incredibly crispy texture.
                </Flex>
            </Flex>

            <Flex className="flex flex-col mt-3">
                <Flex>
                <span className="font-semibold mr-3">Key Features</span>
                </Flex>
                <Flex>
                The thin-cut, flat style potato chips from Bingo!Yumitos Chilli Sprinkled are made with selective quality potatoes. They are seasoned with salt and spicy chili powder after they are cooked.
                </Flex>
            </Flex>

            <Flex className="flex flex-col mt-3">
                <Flex>
                <span className="font-semibold mr-3">How To Use</span>
                </Flex>
                <Flex>
                Serve Bingo! Chips Original Style Chilli Sprinkled at any time of the day. Mid-day hunger cravings, movie night, or a small house party, Bingo! Chilli Sprinkled is the best way to munch on something light and scrumptious. Enjoy a tasty cold beverage such as cold drinks, fruit juices, or even an iced tea with these spicy potato chips.
                </Flex>
            </Flex>

        </Flex>

        <Flex className="flex flex-col mt-3 pl-5">
                <Flex>
                <span className="font-semibold mr-3">Product Details</span>
                </Flex>
                <Flex>
                <Image src={'/bingo3.png'} className="block object-fit" width={'100'} height={'0'} layout='responsive' alt="image" />
                </Flex>
                
            </Flex>

        <br/>
        <Footer/>
        </>
    );
}

