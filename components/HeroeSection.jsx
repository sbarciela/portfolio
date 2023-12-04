import Image from "next/image"
import IconSection from "./IconSection"
import Patterns from "./Patterns"
import profileImage from '../public/profilesb.png'


function HeroeSection(){
    return(
        <div className="relative pt-5 pb-20 px-4 md:px-8 md:pt-8 md:pb-[60px] xl:pt-10 xl:px-36 xl:pb-[231px]">
            <Patterns />
            <IconSection margin="30px" />

            
            <div className=" flex items-end justify-center absolute top-0 left-0 right-0 m-auto  md:left-auto md:bg-dark-grey xl:right-[144px]">
                <div className="grid grid-cols-12 grid-rows-[383px] md:grid-rows-[600px] xl:grid-rows-[720px] ">
                    <div className="col-span-6 col-start-4 gradient flex items-end content-end  overflow-hidden z-0 md:col-span-12">
                        <div className="grid grid-cols-1 grid-rows-[minmax(242px,_280px)] items-end relative md:grid-rows-[minmax(450px,_450px)] xl:grid-rows-[minmax(618px,_618px)] ">
                                <Image
                                        src={profileImage}
                                        priority={true}
                                        alt="Arrow"
                                        layout="responsive"
                                        className="max-h-full" 
                                        blurDataURL="/profilesb.png"
                                        placeholder="blur"                                   
                                        
                                />
                        </div>
                    </div>
                </div>
            </div>     
            
            {/*<div className="h-[383px] max-w-[174px] gradient flex items-end absolute top-0 left-0 right-0 m-auto md:h-[600px] md:max-w-[322px] md:left-auto md:bg-dark-grey">
                <Image
                        src={profileImage}
                        alt="Arrow"
                        layout="intrinsec"
                />
            </div>*/}
            
            <div className="h-[331px] md:hidden"></div>
            <div className="text-center md:text-left md:max-w-[443px] md:relative md:z-10 md:mt-[90px] xl:mt-[127px] xl:max-w-[709px]">
                <p className="text-mobh text-white md:text-[72px] md:leading-[72px] md:tracking-[-2.05px] xl:text-hxl "><span className="md:block xl:inline">Nice to</span> meet you! I'm <span className="underline decoration-green decoration-4 underline-offset-4">Sebastián Barciela.</span></p>
                <p className="text-mobm text-grey my-6 md:text-m xl:mt-[43px] xl:mb-[66px] xl:max-w-[445px]"> I'm a front-end developer from Argentina, and I absolutely love creating web apps that are user-friendly and accessible.</p>
                <a href="#contact"><span className=" text-mobm font-bold leading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px] cursor-pointer xl:hover:text-green">CONTACT ME</span></a>
            </div>
            
        </div>
    )
}

export default HeroeSection