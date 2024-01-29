import { Avatar, Text, Box, Heading, Flex, TextField, Table, Button } from "@radix-ui/themes"
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


export const MainTotalCartSum = (props: any) => {
  return (
    <>
      <Flex>
        <Box className=" border-slate-950">
          <Text as="p" size="3" className="text-black-800 font-extrabold text-xl underline mb-2">
            {"Total Check-Out"}
          </Text>
          <Text as="p" size="3" className="text-black-500 font-extralight text-sm mb-2">
            {"Number of Items Selected : 2"}
          </Text>
          <Text as="p" size="3" className="text-black-500 font-bold text-normal mb-2">
            {"Check-Out Price : 400₹"}
          </Text>
          <button type="button" className="focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">BUY</button>
        </Box>
      </Flex>
    </>
  )
}

export const MobileHeader = () => {

  return (
    <></>
  );
};

