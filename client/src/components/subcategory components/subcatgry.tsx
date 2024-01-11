"use client"
import { Avatar, Box, Container, ScrollArea, Flex, Text } from "@radix-ui/themes"
import { useAtomValue, useSetAtom } from "jotai";
import Image from "next/image";
import { ItemCategory } from "@/store/response";

const subcatlist = ['Pens', 'Pencils', 'Books', 'Geometry Box', 'Planks', 'Scales', 'Erasers']
export const MainSubCatgry = (props: any) => {

    // const category = useAtomValue<String>(ItemCategory)
    const setCategory = useSetAtom(ItemCategory)
    function updateCategory(s:any){
        setCategory(s)
    }

    return (
        <>
            <ScrollArea>
                <Flex mb={'5'} gap={'5'}>
                    {
                        subcatlist.map((e, i) => {
                            return (
                                <Flex onClick={()=>updateCategory(e)} key={i} align={'center'} direction={'column'}>
                                    <div className="mt-9 flex flex-col items-center justify-between">
                                        <div className="h-24 w-28 relative">
                                            <Image className="rounded-full " src={'/grocery2.png'} alt="image description" objectFit="cover" fill />
                                        </div>
                                        <Text>{e}</Text>
                                    </div>
                                </Flex >

                            )

                        })
                    }
                </Flex>
            </ScrollArea>
        </>
    )
}