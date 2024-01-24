"use client"
import { ItemCard } from "../card"
import { Avatar, Box, Container, ScrollArea, Flex, Text } from "@radix-ui/themes"
import { useAtomValue, useSetAtom } from "jotai";
import Image from "next/image";
import { ItemCategory } from "@/store/response";

const subcatlist = ['Pens', 'Pencils', 'Books', 'Geometry Box']

export const MainSubCatgry = (props: any) => {

    // const category = useAtomValue<String>(ItemCategory)
    // const setCategory = useSetAtom(ItemCategory)
    // function updateCategory(s:any){
    //     setCategory(s)
    // }

    return (
        <>
            
        </>
    )
}


export const MobileSubCategoryItem = (props: any) =>{

    const setCategory = useSetAtom(ItemCategory)
    function updateCategory(s:any){
        setCategory(s)
    }

    return(
        <>
            <Flex className="flex flex-col mt-3">
                <Flex className="ml-3">
                    <h1 className="font-semibold text-lg">Top Pens</h1>
                </Flex>
                <Flex>
                <ScrollArea className="ml-2">
                <Flex mb={'4'} gap={'4'}>
            {
                subcatlist.map((e,i)=>{
                    return(
                        <Flex key={i} align={'center'} direction={'column'}>
                            <ItemCard/>
                        </Flex >
                    )
                    
                })
            }
                </Flex>
            </ScrollArea>
                </Flex>
            </Flex>
        </>
    )
}