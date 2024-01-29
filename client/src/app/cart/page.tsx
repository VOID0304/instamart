'use client'
import {useAtomValue} from 'jotai'
import { size } from '@/store/response'
import { MainHeader } from '@/components/header'
import { Container, Flex, Grid, Box, Text} from '@radix-ui/themes'
import { LikedCard, MainLikedCard } from '@/components/cart components/liked_cards'
import { MobileHeader } from '@/components/header'
import { Carousel } from '@/components/carousel'
import Image from 'next/image'
import { MainFooter } from '@/components/foot'
import { MainTotalCartSum } from '@/components/cart components/total_summary'

export default function Home() {
    const mob = useAtomValue(size)
    return (
            <>
            {
                (!mob) && <div className="min-h-screen bg-primarybgcolor" >
                    <MainHeader/>
                    <Container size={'4'} p={'2'}>
                        <h1 className='font-bold text-xl'>Your Cart</h1>
                        <MainLikedCard></MainLikedCard>
                        <MainLikedCard></MainLikedCard>
                        <MainLikedCard></MainLikedCard>
                        <MainLikedCard></MainLikedCard>
                        <MainTotalCartSum/>
                    </Container>
                    
                    <MainFooter/>
                    
                </div>
                    
            }


                    {
                        (mob) &&
                        <>
                        <Box className='flex justify-between items-center p-3'>
                            <Box className='flex justify-between'>
                            <Image src={'/logo.png'} alt="logo" height={25} width={25}/>
                            <h3 className='font-bold text-xl ml-2'>VoidMart</h3>
                            </Box>
                            <MobileHeader/>
                        </Box>
                        <LikedCard/>
                        
                        </>
                    }
                </>
      )
                }