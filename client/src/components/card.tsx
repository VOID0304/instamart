import { Card, Text, Inset, Strong, Flex } from '@radix-ui/themes'
import { FaCartShopping } from "react-icons/fa6";

export const ItemCard = () =>{
    return(
        <>
        <Flex justify={'center'} className='mt-3'>
        <Card style={{ maxWidth: 360 }} className='items-center justify-center card shadow-2xl'>
            <Flex direction={'column'} justify={'center'} align={'center'}>

                <Flex justify={'center'}>
                    <Inset clip="padding-box" side="top" pb="current">
                        <img src={'/item1.png'} alt="Bold typography" style={{display: 'block',objectFit: 'cover',width: '100%',height: 140,backgroundColor: 'var(--gray-5)',}}/>
                    </Inset>
                </Flex>
                <Flex className='ml-2 mt-2'>
                    <Text as="p" size="3">
                        Hershy's Syrup: 623gms
                    </Text>
                </Flex>

                <Flex className='flex mt-2 ml-2'>
                    <Flex>
                    MRP: <h1 className="text-red-700 line-through">230₹</h1>
                    </Flex>
                    <Flex className='ml-10'>
                    Discount: <h1 className="text-red-700">205₹</h1>
                    </Flex>
                    <Flex className='ml-10 bg-green-200 rounded-lg w-14' justify={'center'}>
                        <h1 className='text-green-700 text-center'>25% <br></br>Off</h1>
                    </Flex>
                </Flex>

                <Flex className="mt-3 flex items-center">

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

            </Flex>
            
        </Card>
        </Flex>
        </>
    );
}