import { Avatar, Box, Container, ScrollArea,Flex,Text } from "@radix-ui/themes"
import Image from "next/image";

const subcatlist = ['Pens','Pencils','Books','Geometry Box','Planks','Scales','Erasers']
export const MainSubCatgry = (props:any) => {
    return(
        <>
            <ScrollArea>
                <Flex mb={'4'} gap={'4'}>
            {
                subcatlist.map((e,i)=>{
                    return(
                        <Flex key={i} align={'center'} direction={'column'}>
                            <div className="mt-3 flex flex-col items-center justify-between">
                                <div className="h-24 w-28 relative">
                                <Image className="rounded-full " src={'/grocery2.png'} alt="image description" objectFit="cover" fill/>
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


export const MobileSubCategory = () =>{
    return(
        <>
            <ScrollArea className="ml-2">
                <Flex mb={'4'} gap={'4'}>
            {
                subcatlist.map((e,i)=>{
                    return(
                        <Flex key={i} align={'center'} direction={'column'}>
                            <div className="mt-3 flex flex-col items-center justify-between">
                                <div className="h-24 w-28 relative">
                                <Image className="rounded-full " src={'/grocery2.png'} alt="image description" objectFit="cover" fill/>
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