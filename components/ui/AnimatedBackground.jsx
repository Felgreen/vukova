
import Image from 'next/image'; 

const AnimatedBackground = () => {
  return (
    <div section id='animatedbackground' className=' relative h-[130vh] w-screen bg-center bg-cover object-cover '>
        <div className='absolute inset-0'>
            <Image
                src="/images/snatch.jpg"
                alt="Background image"
                style={{objectFit:"cover"}}
                fill
                 />
        </div>
    </div>
    
  )
}

export default AnimatedBackground;  