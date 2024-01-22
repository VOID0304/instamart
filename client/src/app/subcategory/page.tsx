'use client'
import Image from 'next/image'
import {useAtomValue} from 'jotai'
import { size } from '@/store/response'
import { MainHeader, MobileHeader} from '@/components/header'
import { MainSubCatgry, MobileSubCategory } from '@/components/subcategory components/subcatgry'
import { Box, Container } from '@radix-ui/themes'
import { Carousel } from '@/components/carousel'


export default function Home() {
    const mob = useAtomValue(size)
    return (
      <>
      {
        (!mob)&&<div className="min-h-screen bg-primarybgcolor">
            <MainHeader Name={'Eswar'} />
            <Container>
                <MainSubCatgry />
            </Container>
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
            <Carousel/>
            <MobileSubCategory/>
            </>
    }
    </>
      )
      }