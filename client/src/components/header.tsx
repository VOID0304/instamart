import { Avatar, Text, Box, Heading, Flex, TextField } from "@radix-ui/themes"
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from "next/image";
import { FaHeart,FaShoppingCart,FaSearch } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon
  } from '@radix-ui/react-icons';
  
export const MainHeader = (props:any) =>{
  return(
    
      <Box className='sticky top-0 z-10 bg-slate-500 flex justify-between items-center p-3'>
        <Box className='flex justify-between'>
          <Avatar fallback='VM' src={'/logo1.png'} alt="logo" size={'3'}/>
          <Heading className="ms-3" size={'7'} as="h1">VoidMart</Heading>
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
        <Box className=''>
        <a href="#" className="font-normal text-sm">Sign In/ Register</a>
        </Box>
        <Box className="ml-2">
        <BsPersonCircle className="text-xl"/>
        </Box>
      </Box>
    );
};

  