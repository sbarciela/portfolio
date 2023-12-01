import Projects from "./Projects"

function ProjectsSection(){
    return(
        <div className="px-4 py-20  md:pt-[100px] md:pb-[60px] xl:px-36 xl:pt-[85px] xl:pb-[139px]">
            <div className="flex flex-wrap justify-between items-center mb-10 md:mb-[60px] xl:mb-[80px]">
                <h2 className="text-mobh text-white md:text-[72px] md:leading-[72px] md:tracking-[-2.05px] xl:text-hxl ">Projects</h2>
                <a href="#contact"><span className=" text-mobm font-bold leading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px] cursor-pointer hover:text-green">CONTACT ME</span></a>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 xl:gap-6">
                <Projects />
            </div>
            
        </div>
    )
}

export default ProjectsSection