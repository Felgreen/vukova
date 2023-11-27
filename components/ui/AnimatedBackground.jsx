
import Image from 'next/image'; 
import { useRouter } from "next/router";
import AnimatedTextWord from './AnimatedTextCharacter'; 
import AnimatedTextCharacter from './AnimatedTextCharacter';

import en from "../../public/locales/en/english.json";
import es from "../../public/locales/es/espanol.json";

import Marquee from './Marquee';



const AnimatedBackground = () => {

const router = useRouter();
const { locale } = router;
const t = locale === "es" ? es : en;



  return (
    <div section id='animatedbackground' className=' relative h-screen w-screen bg-center bg-cover object-cover '>
      
        <div className='absolute inset-0'>
   
            <Image
                src="/images/snatch.jpg"
                alt="Background image"
                style={{objectFit:"cover"}}
                fill
                 />
                      
                <div className=' text-white font-antonioBold text-9xl '>
                <Marquee/>
                </div>
           
        </div>
        
    </div>
    
  )
}

export default AnimatedBackground;  