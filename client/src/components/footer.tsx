import { Box } from "@radix-ui/themes"
import { FaCartShopping } from "react-icons/fa6";

export const FooterNavBar = () =>{
    return(
        <Box width={'100%'} height={'6'} className="bg-black">
            <Box className="flex justify-between">
                <Box>
                    <FaCartShopping className="text-white" />
                </Box>
                <Box>
                <FaCartShopping className="text-white" />
                </Box>
                <Box>
                <FaCartShopping className="text-white" />
                </Box>
                <Box>
                <FaCartShopping className="text-white" />
                </Box>
            </Box>
        </Box>
    );
}