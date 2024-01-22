'use client'
import Image from 'next/image'
import {useAtomValue} from 'jotai'
import { size } from '@/store/response'
import { MainHeader, MobileHeader} from '@/components/header'
import { MainSubCatgry, MobileSubCategory } from '@/components/subcategory components/subcatgry'
import { Container, Flex, Grid, Box} from '@radix-ui/themes'
import { Carousel } from '@/components/carousel'
import { MainItemCard } from '@/components/card'
import { MainSubCatgryItemCard } from '@/components/subcategory components/subcatgrycard'


export default function Home() {
    const mob = useAtomValue(size)
    return (
      <>
      {
        (!mob)&&<div className="min-h-screen bg-primarybgcolor">
            <MainHeader Name={'Eswar'} />
            <Container>
                <MainSubCatgry />
                <Grid columns={'4'} flow={'row'}>
                  <MainSubCatgryItemCard />
                  <MainSubCatgryItemCard />
                  <MainSubCatgryItemCard />
                  <MainSubCatgryItemCard />
                  <MainSubCatgryItemCard />
                  <MainSubCatgryItemCard />
                  <MainSubCatgryItemCard />
                </Grid>
                
                  {/* <Box className='flex flex-col'>
                    <Box className='font-bold text-xl'><h1>Pens</h1></Box>
                    <Box className='mt-4 flex justify-between'>
                      <Box>
                      <MainItemCard /> 
                      </Box>
                      <Box>
                      <MainItemCard /> 
                      </Box>
                      <Box>
                      <MainItemCard /> 
                      </Box>
                    </Box>
                  </Box> */}
                  
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