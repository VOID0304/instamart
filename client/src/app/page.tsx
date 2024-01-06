'use client'
import Image from 'next/image'
import {useAtomValue} from 'jotai'
import { size } from '@/store/response'

export default function Home() {
  const mob = useAtomValue(size)
  return (
    <>
    {
      (!mob)&&<div className="min-h-screen bg-primarybgcolor">
          hello bro
      </div>
    } 
    </>
  )
}
