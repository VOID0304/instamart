import { Card, Box, Text, Inset, Strong, Flex } from '@radix-ui/themes'
import Image from 'next/image';
import { FaCartShopping } from "react-icons/fa6";

import { AiOutlineDelete } from "react-icons/ai";

export const MainLikedCard = () => {
    return (
        <>
            <Flex >
                <Card className=''>
                    <Flex direction={'column'} justify={'center'} align={'center'}>
                        <Flex justify={'start'}>
                            <Inset clip="padding-box" side="top" pb="current">
                                <Image src={'/item1.png'} alt="Bold typography" width={'0'} height={'240'} layout='responsive' />
                            </Inset>
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
            <div className="img flex h-auto max-w-xl shadow-xl">
                <div className="flex items-center mb-4 ml-5">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                </div>
                <div className="flex-shrink-0">
                <Image src={'/item1.png'} alt="Bold typography" width={'0'} height={'140'} layout='responsive'/>
                </div>

                <div className="flex flex-col flex-grow p-4">
                <div>
                    <h2 className="font-bold text-lg mb-2">Hershy's Syrup: 623gms</h2>
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
                    <h2 className="font-bold text-lg mb-2">Hershy's Syrup: 623gms</h2>
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