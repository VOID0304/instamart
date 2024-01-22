'use client'
import {useAtomValue} from 'jotai'
import { size } from '@/store/response'
import { Container, Flex, Grid, Box, Text} from '@radix-ui/themes'
import { LikedCard, MainLikedCard } from '@/components/cart components/liked_cards'
import { MobileHeader } from '@/components/header'
import { Carousel } from '@/components/carousel'
import Image from 'next/image'

export default function Home() {
    const mob = useAtomValue(size)
    return (
            <>
            {
                (!mob) && <div className="min-h-screen bg-primarybgcolor" >
                    <MainLikedCard></MainLikedCard>
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