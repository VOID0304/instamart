import { Card, Box, Text, Inset, Strong, Flex } from '@radix-ui/themes'
import Image from 'next/image';
import { FaCartShopping } from "react-icons/fa6";

export const MainLikedCard = () => {
    return (
        <>
            <Flex justify={'start'} className='ms-3 mt-3'>
                <Card className=''>
                    <Flex className='flex'>
                        <Flex>
                            <Image src={'/item1.png'} alt="Bold typography" width={'0'} height={'240'} layout='responsive' />
                        </Flex>
                        <Flex className='flex flex-col'>
                            <Flex className='ml-3'>
                                <h1 className='text-black-800 font-bold text-xl'>Hershy's Syrup: 623gms</h1>
                            </Flex>
                            <Flex className='flex mt-3 ml-2'>
                                <Flex className='flex mt-4'>
                                    <Flex>
                                        MRP: <h1 className="text-red-700 line-through">230₹</h1>
                                    </Flex>
                                    <Flex className='ml-10'>
                                        Discount: <h1 className="text-red-700">205₹</h1>
                                    </Flex>
                                </Flex>
                                <Flex className='ml-5 bg-green-200 rounded-lg w-14' justify={'center'}>
                                    <h1 className='text-green-700 text-center'>25% <br /> Off</h1>
                                </Flex>
                            </Flex>
                            <Flex>
                                <form className="max-w-xs">
                                    <label htmlFor="counter-input" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
                                    <div className="relative flex items-center">
                                        <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                            <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <input type="text" id="counter-input" data-input-counter className="flex-shrink-0 text-gray-900 dark:text-black border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" value="12" required></input>
                                        <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                            <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </Flex>
                        </Flex>
                    </Flex>
                </Card>
            </Flex>
        </>
    );
}

export const LikedCard = () => {
    return (
        <>

        </>
    );
}