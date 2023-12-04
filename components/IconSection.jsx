import Github from '../public/github.svg'
import Twitter from '../public/twitter.svg'
import Linkedin from '../public/linkedin.svg'
import FrontEndMentor from '../public/frontmentor.svg'

function IconSection(props){
    let margin
    if(props.margin){
    margin=`xl:mr-[30px]`}
    else if(!props.margin){
        margin=null
    }
    
   
    return (
            <div className={`relative flex flex-wrap flex-col  justify-center items-center gap-5 z-10 md:flex-row md:justify-between md:relative ${margin}`}>
                <h2 className='text-hm text-white md:text-[32px] md:leading-[32px] md:tracking-[-0.44px]'>sbarciela</h2>
                <div className='flex flex-wrap justify-between w-[154px] md:w-[192.5px]'>
                    <a href="https://github.com/sbarciela"  target="_blank"><Github className="text-icon md:text-iconmd cursor-pointer text-white xl:hover:text-green" /></a>
                    <a href="https://www.linkedin.com/in/sebasti%C3%A1n-barciela/" target='_blank'> <Linkedin className="text-icon md:text-iconmd cursor-pointer text-white xl:hover:text-green" /></a>
                    <a href="https://www.frontendmentor.io/profile/sbarciela" target='_blank'><FrontEndMentor className="text-icon md:text-iconmd cursor-pointer text-white xl:hover:text-green" /></a>
                    <a href="https://twitter.com/barcielaseba" target='_blank'><Twitter className="text-icon md:text-iconmd cursor-pointer text-white xl:hover:text-green" /></a>
                </div>
            </div>    
    )
}

export default IconSection