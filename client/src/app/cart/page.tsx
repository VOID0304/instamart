'use client'
import {useAtomValue} from 'jotai'
import { size } from '@/store/response'
import { Container, Flex, Grid, Box, Text} from '@radix-ui/themes'
import { MainLikedCard } from '@/components/cart components/liked_cards'

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
                        <></>
                    }
                </>
      )
                }