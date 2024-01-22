import { ItemCategory } from '@/store/response';
import { Card, Text, Inset, Strong, Flex, Box, Heading } from '@radix-ui/themes'
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import { FaCartShopping } from "react-icons/fa6";

export const MainSubCatgryItemCard = () => {

    const category = useAtomValue(ItemCategory);

    return (
        <>
            <Flex className='mt-4 justify-center'>
                <Card className='items-center justify-center card shadow-2xl'>
                    <Image className='ms-2' src={'/grocery1.png'} alt='pen' width={'200'} height={'150'} />
                    <Flex direction={'column'} align={'center'}>
                        <Text className='text-center'>Hauser</Text>
                        <Text className='text-green-700 text-center'>Limited Time Deal</Text>
                    </Flex>

                </Card>
            </Flex>
            <Heading size={'7'}>{category}</Heading>

        </>
    )
}