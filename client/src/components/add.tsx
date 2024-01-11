import { Box } from "@radix-ui/themes";
import Image from "next/image";

export const Advertaisement = () => {
    return(
        <>
        <Box className="">
        <Image src={'/add1.png'} width={'425'} height={'425'} alt="img" className="max-w-lg" />
        </Box>
        </>
    );
}