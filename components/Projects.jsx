import Image from "next/image"

function Projects(){
    return(
        <>
       {/**project1 */}
        <div className="md:mb-10">
            <div className="projectContainer relative">
                <Image
                src="/weatherproject.png"
                width={1080}
                height={800}
                alt="Arrow"
                className="imageProject"
                            
                />
                
                <div className="linksContainer absolute">
                    <a href="https://weather-report-sb.vercel.app/" target="_blank"><span className="hover:text-green cursor-pointer text-mobm font-bold leading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px]">VIEW PROJECT</span></a>
                    <a href="https://github.com/sbarciela/weather-app/" target="_blank"><span className=" hover:text-green cursor-pointer text-mobm font-bold lehover:text-green cursor-pointerading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px] ">VIEW CODE</span></a>
                </div>
            </div>
            

            <h2 className="text-hm text-white mt-5">WEATHER REPORT</h2>
            <div className="mt-[7px]">
                <span className="text-m text-grey">HTML</span>
                <span className="text-m text-grey ml-[18px]">CSS</span>
                <span className="text-m text-grey ml-[18px]">JS</span>
            </div>
            <div className="flex mt-5 xl:hidden">
                <a href="https://weather-report-sb.vercel.app/" target="_blank"><span className=" text-mobm font-bold leading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px]">VIEW PROJECT</span></a>
                <a href="https://github.com/sbarciela/weather-app/" target="_blank"><span className=" text-mobm font-bold leading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px] ml-8">VIEW CODE</span></a>
            </div>
        </div>

        {/**project2 */}
        <div className="md:mb-10">
            <div className="projectContainer relative">
                <Image
                src="/bmiproject.png"
                width={1080}
                height={800}
                alt="Arrow"
                className="imageProject"
                            
                />
                
                <div className="linksContainer absolute">
                    <a href="https://bmi-calculator-sb.vercel.app/" target="_blank"><span className="hover:text-green cursor-pointer text-mobm font-bold leading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px]">VIEW PROJECT</span></a>
                    <a href="https://github.com/sbarciela/bmi-calculator" target="_blank"><span className=" hover:text-green cursor-pointer text-mobm font-bold lehover:text-green cursor-pointerading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px] ">VIEW CODE</span></a>
                </div>
            </div>
            

            <h2 className="text-hm text-white mt-5">BMI CALCULATOR</h2>
            <div className="mt-[7px]">
                <span className="text-m text-grey">HTML</span>
                <span className="text-m text-grey ml-[18px]">CSS</span>
                <span className="text-m text-grey ml-[18px]">JS</span>
            </div>
            <div className="flex mt-5 xl:hidden">
                <a href="https://bmi-calculator-sb.vercel.app/" target="_blank"><span className=" text-mobm font-bold leading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px]">VIEW PROJECT</span></a>
                <a href="https://github.com/sbarciela/bmi-calculator" target="_blank"><span className=" text-mobm font-bold leading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px] ml-8">VIEW CODE</span></a>
            </div>
        </div>

       {/**project3 */}
       <div className="md:mb-10">
            <div className="projectContainer relative">
                <Image
                src="/movflix-project.png"
                width={1080}
                height={800}
                alt="Arrow"
                className="imageProject"
                            
                />
                
                <div className="linksContainer absolute">
                    <a href="https://movflix.vercel.app/" target="_blank"><span className="hover:text-green cursor-pointer text-mobm font-bold leading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px]">VIEW PROJECT</span></a>
                    <a href="https://github.com/sbarciela/movflix" target="_blank"><span className=" hover:text-green cursor-pointer text-mobm font-bold lehover:text-green cursor-pointerading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px] ">VIEW CODE</span></a>
                </div>
            </div>
            

            <h2 className="text-hm text-white mt-5">MOVFLIX DATABASE</h2>
            <div className="mt-[7px]">
                <span className="text-m text-grey">HTML</span>
                <span className="text-m text-grey ml-[18px]">CSS</span>
                <span className="text-m text-grey ml-[18px]">JS</span>
            </div>
            <div className="flex mt-5 xl:hidden">
                <a href="https://movflix.vercel.app/" target="_blank"><span className=" text-mobm font-bold leading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px]">VIEW PROJECT</span></a>
                <a href="https://github.com/sbarciela/movflix" target="_blank"><span className=" text-mobm font-bold leading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px] ml-8">VIEW CODE</span></a>
            </div>
        </div>

       {/**project4 */}
       <div className="md:mb-10">
            <div className="projectContainer relative">
                <Image
                src="/todoproject.png"
                width={1080}
                height={800}
                alt="Arrow"
                className="imageProject"
                            
                />
                
                <div className="linksContainer absolute">
                    <a href="https://todo-list-sb.vercel.app/" target="_blank"><span className="hover:text-green cursor-pointer text-mobm font-bold leading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px]">VIEW PROJECT</span></a>
                    <a href="https://github.com/sbarciela/todo_list" target="_blank"><span className=" hover:text-green cursor-pointer text-mobm font-bold lehover:text-green cursor-pointerading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px] ">VIEW CODE</span></a>
                </div>
            </div>
            

            <h2 className="text-hm text-white mt-5">TO DO APP</h2>
            <div className="mt-[7px]">
                <span className="text-m text-grey">HTML</span>
                <span className="text-m text-grey ml-[18px]">CSS</span>
                <span className="text-m text-grey ml-[18px]">JS</span>
            </div>
            <div className="flex mt-5 xl:hidden">
                <a href="https://todo-list-sb.vercel.app/" target="_blank"><span className=" text-mobm font-bold leading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px]">VIEW PROJECT</span></a>
                <a href="https://github.com/sbarciela/todo_list" target="_blank"><span className=" text-mobm font-bold leading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px] ml-8">VIEW CODE</span></a>
            </div>
        </div>
        </>
    )
}
export default Projects