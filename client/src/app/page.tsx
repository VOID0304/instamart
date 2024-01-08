'use client'
import Image from 'next/image'
import {useAtomValue} from 'jotai'
import { size } from '@/store/response'
import { MobileHeader } from '../components/header'
import { Carousel } from '../components/carousel'
import { Box, ScrollArea, Flex, Text, Container } from '@radix-ui/themes'
import {Carasoul} from '@/components/carasoul'
import { ItemCategory } from '@/components/item'
import { ItemCard } from '@/components/card'

export default function Home() {
  const mob = useAtomValue(size)
  return (
    <>
    {
      (!mob)&&<div className="min-h-screen bg-primarybgcolor">
          <Carasoul />
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
      <Container size={'4'}>
      <Box className='mt-3 ml-3 mb-3'>
        <h1 className='font-bold text-xl'>Categories</h1>
        
            <ScrollArea>
              <Flex gap="3" p="2" direction="row" className="whitespace-nowrap">
                <ItemCategory/>
                <ItemCategory/>
                <ItemCategory/>
                <ItemCategory/>
                <ItemCategory/>
                <ItemCategory/>
                <ItemCategory/>
                <ItemCategory/>
              </Flex>
            </ScrollArea>
        
      </Box>
      

      <Box className='ml-3 items-center'>
        <h1 className='font-bold text-xl'>Items on sale</h1>
        <Box className='mt-3 items-center'>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
        </Box>
      </Box>
      </Container>
      </>
    }
    </>
  )
}
