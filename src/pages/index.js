import Head from 'next/head'
import HeroeSection from '../../components/HeroeSection'
import SkillsSection from '../../components/SkillsSection'
import ProjectsSection from '../../components/ProjectsSection'
import ContactSection from '../../components/ContactSection'



export default function Home() {
  return (
    <>
      <Head>
        <title>sbarciela</title>
        <meta name="description" content="Front-end developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-black' >
        <HeroeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
       
      </main>
    </>
  )
}
