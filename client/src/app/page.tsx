'use client'
import Image from 'next/image'
import {useAtomValue} from 'jotai'
import { size } from '@/store/response'
import { MobileHeader } from '../components/header'
import { Carousel } from '../components/carousel'
import { Box } from '@radix-ui/themes'

export default function Home() {
  const mob = useAtomValue(size)
  return (
    <>
    {
      (!mob)&&<div className="min-h-screen bg-primarybgcolor">
          hello bro
      </div>
    } 

    {
      (mob) && 
      <>
      <Box className='flex justify-between items-center p-3'>
        <Box className='flex justify-between'>
        <Image src={'/logo.png'} alt="logo" height={20} width={20}/>
        <h3 className='font-semibold ml-2'>VoidMart</h3>
        </Box>
          <MobileHeader/>
      </Box>
      <Carousel/>
      </>
    }
    </>
  )
}
