import { Avatar, Text, Box, Heading, Flex, TextField } from "@radix-ui/themes"
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from "next/image";
import { FaHeart,FaShoppingCart,FaSearch } from "react-icons/fa";
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon
  } from '@radix-ui/react-icons';
  
export const MainHeader = (props:any) =>{
  return(
    
      <Box className='sticky top-0 flex justify-between items-center p-3'>
        <Box className='flex justify-between'>
          <Avatar fallback='VM' src={'/logo1.png'} alt="logo" size={'3'}/>
          <Heading size={'7'} as="h1">VoidMart</Heading>
        </Box>
      <Flex align={'center'} gap={'5'}>
        <TextField.Root>
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input placeholder="Search…" />
        </TextField.Root>
        <Flex align={'center'} direction={'column'}>
          <FaHeart className='wishlist'></FaHeart>
          <Text>Wishlist</Text>
        </Flex>
        <Flex align={'center'} direction={'column'}>
          <FaShoppingCart className='cart'></FaShoppingCart>
          <Text>Cart</Text>
        </Flex>
        <Avatar fallback='E' src="/logo1.png" />
        <Text>{props.Name}</Text>
      </Flex>
      </Box>
  )
}

export const MobileHeader = () => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');
  
    return (
      <Box className='flex justify-between items-center p-3'>
        <Box className='flex justify-between'>
        <Image src={'/logo.png'} alt="logo" height={20} width={20}/>
        <h3 className='font-semibold ml-2'>VoidMart</h3>
        </Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
            aria-label="Customise options"
          >
            <HamburgerMenuIcon />
          </button>
        </DropdownMenu.Trigger>
  
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[220px] bg-white rounded-md p-[5px] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
          >
            <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
              Profile{' '}
              
            </DropdownMenu.Item>
            <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
              Your Address{' '}
              
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
              disabled
            >
              Orders{' '}
              
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
              disabled
            >
              Payments & Refunds{' '}
              
            </DropdownMenu.Item>
  
            
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
      </Box>
    );
};

  