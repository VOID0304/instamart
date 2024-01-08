import { Avatar, Box, Container, ScrollArea,Flex,Text } from "@radix-ui/themes"

const catlist = ['Stationary','Groceries','Dairy','Clothing','Snacks']
export const MainCatgry = (props:any) => {
    return(
        <>
            <ScrollArea>
                <Flex gap={'4'}>
            {
                catlist.map((e,i)=>{
                    return(
                        <Flex align={'center'} direction={'column'}>
                            <Avatar fallback='.' src="mmmm.jpeg" />
                            <Text>{e}</Text>
                        </Flex >
                    )
                    
                })
            }
                </Flex>
            </ScrollArea>
        </>
    )
}