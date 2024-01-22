'use client'
import Image from 'next/image'
import {useAtomValue} from 'jotai'
import { size } from '@/store/response'
import { MainHeader, MobileHeader} from '@/components/header'
import { MainSubCatgry } from '@/components/subcategory components/subcatgry'
import { Container } from '@radix-ui/themes'


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
            <></>
    }
    </>
      )
      }