import { Card, Box, Text, Inset, Strong, Flex } from '@radix-ui/themes'
import Image from 'next/image';
import { FaCartShopping } from "react-icons/fa6";

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

        </>
    );
}