import { Card, Box, Text, Strong, Flex } from '@radix-ui/themes'
import Image from 'next/image';
import { FaCartShopping } from "react-icons/fa6";

import { AiOutlineDelete } from "react-icons/ai";

export const MainLikedCard = () => {
    return (
        <>
            <Flex justify={'start'} className='ms-3 mt-3'>
                <Card className=''>
                    <Flex>
                        <Flex>
                            <Image src={'/item1.png'} alt="Bold typography" width={'0'} height={'240'} layout='responsive' />
                        </Flex>
                        <Flex direction={'column'}>
                            <Flex className='ml-3 ms-3'>
                                <Text as="p" size="3" className="text-black-800 font-bold text-xl mb-2">
                                    {"Hershy's Syrup: 623gms"}
                                </Text>
                            </Flex>
                            <Flex className='mt-3 ml-2'>
                                <Flex className='mt-4'>
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
                            <Flex align={'center'}>
                                <form>
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
                                <div>
                                <button type="button" className="flex items-center text-sm focus:outline-none">
                                    <AiOutlineDelete className="text-2xl"/>
                                    <span className="ml-1">Remove</span>
                                </button>
                            </div>
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
        <h1 className='font-bold text-lg p-3'>My Cart</h1>
        <div>
            {/* 1st item */}
            <div className="img flex h-auto max-w-xl ">
                <div className="flex items-center mb-4 ml-5">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                </div>
                <div className="flex-shrink-0">
                <Image src={'/item1.png'} alt="Bold typography" width={'0'} height={'140'} layout='responsive'/>
                </div>

                    <div className="flex flex-col flex-grow p-4">
                        <div>
                            <Text as="p" size="3" className="font-bold text-lg mb-2">
                                {"Hershy's Syrup: 623gms"}
                            </Text>
                        </div>
                        <Flex className='flex flex-col mt-2 ml-2'>
                            <Flex>
                                MRP: <h1 className="text-red-700 line-through ml-2">230₹</h1>
                                <h1 className='ml-3'>205₹</h1>
                            </Flex>
                        </Flex>

                        <div className="flex items-center mb-2 mt-2">
                            <label htmlFor="quantity" className="mr-2 font-medium">Quantity:</label>
                            <select id="quantity" className="border border-gray-300 rounded-md p-1">
                                <option selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <div>
                            <button type="button" className="flex items-center text-sm focus:outline-none">
                                <AiOutlineDelete className="text-2xl" />
                                <span className="ml-1">Remove</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
            {/* 1st item */}
            <div className="img flex h-auto max-w-xl shadow-xl pt-7">
                <div className="flex items-center mb-4 ml-5">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                </div>
                <div className="flex-shrink-0">
                <Image src={'/item1.png'} alt="Bold typography" width={'0'} height={'140'} layout='responsive'/>
                </div>

                    <div className="flex flex-col flex-grow p-4">
                        <div>
                            <Text as="p" size="3" className="font-bold text-lg mb-2">
                                {"Hershy's Syrup: 623gms"}
                            </Text>
                        </div>
                        <Flex className='flex flex-col mt-2 ml-2'>
                            <Flex>
                                MRP: <h1 className="text-red-700 line-through ml-2">230₹</h1>
                                <h1 className='ml-3'>205₹</h1>
                            </Flex>
                        </Flex>

                        <div className="flex items-center mb-2 mt-2">
                            <label htmlFor="quantity" className="mr-2 font-medium">Quantity:</label>
                            <select id="quantity" className="border border-gray-300 rounded-md p-1">
                                <option selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <div>
                            <button type="button" className="flex items-center text-sm focus:outline-none">
                                <AiOutlineDelete className="text-2xl" />
                                <span className="ml-1">Remove</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* button */}

            <div className='ml-auto p-3 text-center'>
                <div className="flex flex-col justify-end">
                    <div>
                        <h1 className="text-xl font-normal">Subtotal: <b>₹410</b></h1>
                    </div>
                    <div className='mt-3'>
                        <h1 className="font-extralight text-xs">Cart summary will be available after checkout</h1>
                    </div>
                    <div className="mt-4">
                        <button className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 text-white font-medium rounded-lg text-sm px-5 py-2.5">Checkout</button>
                    </div>
                </div>
            </div>
        </>
    );
}