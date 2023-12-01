import Image from "next/image"

function Patterns(){
    return(
        <>
        <Image
        src="/ringsgroup.png"
        width={188}
        height={129}
        alt="Arrow"
        className="absolute left-0 top-[124px] md:top-[86px] xl:hidden"   
        />

         <Image
        src="/ringsgroupxl.png"
        width={430}
        height={129}
        alt="Arrow"
        className=" hidden absolute left-0 xl:block xl:top-[133px]"
        priority={true}   
        />

        <Image
        src="/oval.png"
        width={64}
        height={129}
        alt="Arrow"
        className="absolute right-0 top-[254px] md:top-[471px] xl:hidden"   
        />
         <Image
        src="/ovalxl.png"
        width={129}
        height={129}
        alt="Arrow"
        className="absolute hidden right-[545px] z-10 top-[521px] xl:block"   
        />
        
        </>
    )
}
export default Patterns