import { Box } from "@radix-ui/themes"
import { FaCartShopping,FaAddressCard, FaMoneyBillTrendUp } from "react-icons/fa6";
import { TbShoppingBagCheck } from "react-icons/tb";

export const FooterNavBar = () =>{
    return(
        <Box width={'100%'} height={'8'} className="bg-black sticky bottom-0">
            <Box className="flex justify-between p-3">
                <Box>
                    <FaCartShopping className="text-white text-2xl" />
                </Box>
                <Box>
                <FaAddressCard className="text-white text-2xl" />
                </Box>
                <Box>
                <TbShoppingBagCheck className="text-white text-2xl" />
                </Box>
                <Box>
                <FaMoneyBillTrendUp className="text-white text-2xl" />
                </Box>
            </Box>
        </Box>
    );
}