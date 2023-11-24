
import Image from 'next/image'; 
import { useRouter } from "next/router";
import AnimatedTextWord from './AnimatedTextCharacter'; 
import AnimatedTextCharacter from './AnimatedTextCharacter';

import en from "../../public/locales/en/english.json";
import es from "../../public/locales/es/espanol.json";



const AnimatedBackground = () => {

const router = useRouter();
const { locale } = router;
const t = locale === "es" ? es : en;

  return (
    <div section id='animatedbackground' className=' relative h-[130vh] w-screen bg-center bg-cover object-cover '>
        <div className='absolute inset-0'>
            <Image
                src="/images/snatch.jpg"
                alt="Background image"
                style={{objectFit:"cover"}}
                fill
                 />
                <div className='relative text-white'>
                  <AnimatedTextWord  className="text-white" text={t.nosotros.title}/>
                
                </div>
        </div>
    </div>
    
  )
}

export default AnimatedBackground;  