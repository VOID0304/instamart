'use client'
import {useAtomValue} from 'jotai'
import { size } from '@/store/response'
import { MainHeader } from '@/components/header'
import { Container, Flex, Grid, Box, Text} from '@radix-ui/themes'
import { MainLikedCard } from '@/components/cart components/liked_cards'
import { MainFooter } from '@/components/foot'

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
                    </Container>
                    <MainFooter/>
                </div>
                    
            }


                    {
                        (mob) &&
                        <></>
                    }
                </>
      )
                }