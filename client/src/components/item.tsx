import Image from "next/image";

export const ItemCategory = () =>{
    return(
        <>
        <div className="mt-3 flex flex-col items-center justify-between">
            <div className="h-24 w-28 relative">
            <Image className="rounded-full " src={'/grocery2.png'} alt="image description" objectFit="cover" fill/>
            </div>
            <div className="">
                <h1 className="font-medium">Grocery</h1>
            </div>
        </div>
        </>
    );
}