import '@/styles/globals.css'
import { Space_Grotesk } from 'next/font/google'
 
const space = Space_Grotesk({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return(

    <>
     <style jsx global>{`
        html {
          font-family: ${space.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
    </>
    
  )
}
