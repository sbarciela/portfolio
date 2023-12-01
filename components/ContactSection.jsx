import Image from "next/image"
import IconSection from "./IconSection"
import InvalidIcon from '../public/invalidIcon.svg'

function ContactSection(){
    return(
        <div className="bg-dark-grey px-4 py-[60px] relative md:px-8 md:pb-10  xl:px-36 xl:pt-[84px] xl:pb-[92px] ">

            <div className="md:grid md:grid-cols-12 xl:grid-cols-1">
                <div className="grid grid-cols-1 gap-[50px] md:col-span-8 md:col-start-3 xl:col-auto xl:col-start-1 xl:grid-cols-2 xl:gap-[260px]">
                    <Image
                    src="/ringsgroup.png"
                    width={188}
                    height={129}
                    alt="Arrow"
                    className="absolute left-0 top-[436px] md:top-[547px] xl:hidden"   
                    />

                    <Image
                    src="/ringsgroupxl.png"
                    width={430}
                    height={129}
                    alt="Arrow"
                    className=" hidden absolute left-[-100px] xl:block xl:top-[327px]"   
                    />

                    <div className="text-center xl:text-left" id="contact">
                        <h2 className="text-mobh text-white mb-5 md:text-[72px] md:leading-[72px] md:tracking-[-2.05px] ">Contact</h2>
                        <p className="text-mobm text-grey md:text-m">I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
                    </div>

                    <form noValidate className="group">
                        <label>
                            <div className="relative">
                                <input 
                                type="text"
                                name="name"
                                id="name"
                                placeholder="NAME"
                                required
                                autoComplete="on"
                                pattern=".{3,}" 
                                className="peer bg-inherit text-white/[.50] placeholder:text-white/[.50] w-full border-b border-white pl-6 pb-4  outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-light-red valid:border-green  " />
                                <span className="hidden text-right text-sm text-light-red peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                Please enter a valid name
                                </span>
                                <InvalidIcon className="hidden absolute right-0 top-0 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block" />
                            </div>
                        </label>
                        <label>
                            <div className="relative">
                                <input 
                                type="email"
                                name="email"
                                id="email"
                                placeholder="EMAIL"
                                required
                                autoComplete="on"
                                pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                                className="peer bg-inherit text-white/[.50] placeholder:text-white/[.50] w-full border-b border-white pl-6 pb-4 mt-8 outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-light-red valid:border-green   " />
                                <span className="hidden text-right text-sm text-light-red peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                    Please enter a valid email address
                                </span>
                                <InvalidIcon className="hidden absolute right-0 top-[32px] peer-[&:not(:placeholder-shown):not(:focus):invalid]:block" />
                            </div>
                           
                        </label>
                        <label>
                            <textarea
                            name="message"
                            id="message"
                            placeholder="MESSAGE"
                            required
                            pattern=".{7,}" 
                            className="bg-inherit text-white/[.50] placeholder:text-white/[.50] w-full border-b border-white pl-6 pb-[81px] mt-8 resize-none outline-none  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500  " />
                        </label>
                        <div className="text-right mb-[99px] mt-8">
                            <span className=" text-mobm font-bold leading-[26px] tracking-[2.286px] text-white underline decoration-green decoration-2 underline-offset-[10px] cursor-pointer hover:text-green group-invalid:pointer-events-none group-invalid:opacity-30">SEND MESSAGE</span>
                        </div>
                    </form>
                </div>
            </div>
          
            <div className="h-px bg-white"></div>
            <div className="mt-[39px] md:mt-[30px] xl:mt-[47px]">
                <IconSection/>
                
            </div>

        </div>

    )
}

export default ContactSection