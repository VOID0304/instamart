import { Avatar, Box, Container, ScrollArea,Flex,Text } from "@radix-ui/themes"
import Image from "next/image";

const catlist = ['Stationary','Groceries','Dairy','Clothing','Snacks','Personal Care','Frozen Food','Condiments','Fruits','Vegetables','Bevarages','Health Care','Cleaning','Baby Care','pooja Needs','Bags','Candies','Tools']
export const MainCatgry = (props:any) => {
    return(
        <>
            <ScrollArea>
                <Flex mb={'4'} gap={'4'}>
            {
                catlist.map((e,i)=>{
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

export const ItemCategory = () =>{
    return(
        <>
        <ScrollArea>
                <Flex mb={'4'} gap={'4'}>
            {
                catlist.map((e,i)=>{
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
    );
}