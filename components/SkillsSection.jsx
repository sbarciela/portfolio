import Image from "next/image"

function SkillsSection (){
    return(
        <div className="px-4 relative md:px-8 xl:px-36">
            <div className="h-px bg-white"></div>
            <div className="grid grid-cols-1 gap-6 py-10 md:py-[52px] md:grid-cols-2 md:gap-[52px] xl:py-[72px] xl:grid-cols-3 xl:gap-[58px]">
                <div className="text-center md:text-left ">
                    <h2 className="text-white text-[32px] font-bold leading-[40px] tracking-[-1px] md:text-hl ">HTML</h2>
                    <p className="text-mobm text-grey md:text-m">4 Years Experience</p>
                </div>
                <div className="text-center md:text-left ">
                    <h2 className="text-white text-[32px] font-bold leading-[40px] tracking-[-1px] md:text-hl ">CSS</h2>
                    <p className="text-mobm text-grey md:text-m">4 Years Experience</p>
                </div>
                <div className="text-center md:text-left ">
                    <h2 className="text-white text-[32px] font-bold leading-[40px] tracking-[-1px] md:text-hl ">Javascript</h2>
                    <p className="text-mobm text-grey md:text-m">4 Years Experience</p>
                </div>
                <div className="text-center md:text-left ">
                    <h2 className="text-white text-[32px] font-bold leading-[40px] tracking-[-1px] md:text-hl ">Accesibility</h2>
                    <p className="text-mobm text-grey md:text-m">4 Years Experience</p>
                </div>
                <div className="text-center md:text-left ">
                    <h2 className="text-white text-[32px] font-bold leading-[40px] tracking-[-1px] md:text-hl ">React</h2>
                    <p className="text-mobm text-grey md:text-m">4 Years Experience</p>
                </div>
                <div className="text-center md:text-left ">
                    <h2 className="text-white text-[32px] font-bold leading-[40px] tracking-[-1px] md:text-hl ">Sass</h2>
                    <p className="text-mobm text-grey md:text-m">4 Years Experience</p>
                </div>
            </div>

            <div className="h-px bg-white md:hidden"></div>

            <Image
            src="/ringsgroup2.png"
            width={188}
            height={129}
            alt="Arrow"
            className="absolute right-0 bottom-[-67px] xl:hidden"   
            />

            <Image
            src="/ringsgroupxl.png"
            width={430}
            height={129}
            alt="Arrow"
            className=" hidden rotate-180 absolute xl:block xl:right-[-200px] xl:bottom-0"   
            />

        </div>
    )
}

export default SkillsSection