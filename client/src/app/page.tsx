'use client'
import Image from 'next/image'
import {useAtomValue} from 'jotai'
import { size } from '@/store/response'
import { MainHeader, MobileHeader } from '../components/header'
import { Carousel } from '../components/carousel'
import { Box, Container } from '@radix-ui/themes'
import { MainCatgry } from '@/components/categories'

export default function Home() {
  const mob = useAtomValue(size)
  return (
    <>
    {
      (!mob)&&<div className="min-h-screen bg-primarybgcolor">
          <MainHeader Name={'Eswar'} /> 
          <Carousel />
          <Box my={'7'}></Box>
          <Container size={'4'} p={'2'}>
            <MainCatgry />
          </Container>
      </div>
    } 

    {
      (mob) && 
      <>
      <MobileHeader/>
      <Carousel/>
      </>
    }
    </>
  )
}
