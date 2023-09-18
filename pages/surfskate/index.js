import { useRouter } from "next/router";
import Head from "next/head"; 
import { useEffect,useRef } from "react";
import en from "../../public/locales/en/english.json"
import es from "../../public/locales/es/espanol.json";
import {
  ParallaxBanner,
  Parallax,
} from "react-scroll-parallax";

export default function Surfskate() {
  const router = useRouter();
  const popupRef = useRef(null);
  const { locale } = router;
  const t = locale === "es" ? es : en;

  const handleHorarios = () => {
    const div = document.getElementById("horarios");
    if (div.classList.contains("hidden")) {
      div.classList.remove("hidden");
    } else {
      div.classList.add("hidden");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        const div = document.getElementById("horarios");
        div.classList.add("hidden");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);



  return (
    <>
    <Head>
      <title>{t.seo.surfskatetitle}</title>
      <meta name="description" content={t.seo.surfskateDesc}/>
      <meta property="og:title" content={t.seo.surfskatetitle}/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    
    <section id="top"></section>
      <ParallaxBanner
          layers={[{ image: "/images/prueba1.jpg", speed: -60 }]}
          className="aspect-[2/1] h-screen md:h-none"
        >
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-5xl md:text-8xl text-black font-montBold">
              SURFPARK
            </h1>
            <h1 className="text-xl lg:text-4xl text-black font-montBold">
              {t.surfskate.surfpark1}
            </h1>

            <Parallax speed={22} easing="easeIn">
            
            <p className="mt-20 md:mt-14 lg:mt-4 text-lg md:text-2xl mx-4 md:mx-12 lg:mx-20 text-center font-montSemiBold text-black items-center justify-center">
              {t.surfskate.sen6}
           </p>
      
           </Parallax>
          </div>
        
        </ParallaxBanner>
{/* <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover surfbowl-img" > 
<Parallax speed={-17} easing="easeIn">
  <div className="p-5 text-4xl text-black font-archivoBlack text-center">
    <p>CLASES PARA NIÑOS Y ADULTOS DE TODOS LOS NIVELES</p>
  </div>
  </Parallax>
</header> */}

<section>
<div className="flex flex-col items-center w-full">
      <section
            id="horarios"
            ref={popupRef}
            className="absolute hidden mx-auto popup overflow-hidden rounded-lg top-20 shadow-2xl lg:pb-10 bg-white  z-20 sm:full md:w-2/3"
          >
            <div className="ml-auto p-2 pt-0 text-center sm:px-8 sm:pt-2 sm:pb-8 w-full">
              <div className="flex row items-center font-semibold justify-center w-full">
                <div className="flex sm:w-1/3 justify-end ml-auto">
                  <span
                    className="pb-2 cursor-pointer"
                    onClick={handleHorarios}
                  >
                    X
                  </span>
                </div>
              </div>
              <div className="items-center justify-center flex">
                <img
                  alt="Trainer"
                  src="/images/HORARIOS-2023-surfskate.webp"
                  className="inset-0 rounded-md object-cover w-full"
                />
              </div>
            </div>
          </section>
          </div>
  <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
 
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
        <h2 className="text-3xl  sm:text-4xl text-black font-archivoBlack">SURFKSATE</h2>
        <p className="mt-4  font-montSemiBold text-black ">
          {t.surfskate.sen1}
        </p>
      
        <a
                    href="https://api.whatsapp.com/send/?phone=5491154899448&text&type=phone_number&app_absent=0"
                    className="animate-bounce mt-8 inline-flex items-center rounded border-2 border-[#e33d20] bg-[#e33d20] px-8 py-3 text-black hover:bg-transparent hover:text-[#FF3B18] "
                  >
                    <span className="text-sm font-medium">
                      {" "}
                      {t.reserva.button}{" "}
                    </span>
                   
        </a>
        
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 text-black">
        <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" >
          
          <h2 className="mt-2 font-montSemiBold">{t.surfskate.block1title}</h2>
          <p className="mt-1 block text-sm text-black font-montReg">
            {t.surfskate.block1sen}
          </p>
        </div>
        <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          {/* <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </span> */}
          <h2 className="mt-2  font-montSemiBold">{t.surfskate.block2title}</h2>
           <p className="mt-1 block text-sm text-black font-montReg">
            {t.surfskate.block2sen}
          </p>
        </div>
        <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          {/* <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </span> */}
          <h2 className="mt-2 font-montSemiBold">{t.surfskate.block3title}</h2>
           <p className="mt-1 block text-sm font-montReg text-black">
            {t.surfskate.block3sen}
          </p>
        </div>
        <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant">
          {/* <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </span> */}
          <h2 className="mt-2 font-montSemiBold">{t.surfskate.block4title}</h2>
           <p className="mt-1  block text-sm text-black">
           {t.surfskate.block4sen}
          </p>
        </div>
        <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          {/* <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </span> */}
          <h2 className="mt-2 font-montSemiBold">{t.surfskate.block5title}</h2>
           <p className="mt-1 block text-sm font-montReg text-black">
            {t.surfskate.block5sen}
          </p>
        </div>
        <div className="flex flex-col items-center w-full h-20 my-auto">
          <a href="#top">
          <button
            class="group relative inline-block text-sm font-medium text-[#1b3655] focus:outline-none focus:ring active:text-[#1b3655] rounded-lg"
            onClick={handleHorarios}
          >
            
            <span class="absolute inset-0 translate-x-1 translate-y-1 bg-[#244870] transition-transform group-hover:translate-y-0 group-hover:translate-x-0 rounded-md"></span>

            <span class="relative block border border-current bg-white px-8 py-3 rounded-md font-montBold">
              {t.button.horarios}
            </span>
          </button>
          </a>
        
        </div>
      </div>
      
    </div>
   
  </div>
  
  
</section>


{/* <div className="max-w-lg mx-auto p-2 text-center">
  <p className="mb-4 text-black font-montSemiBold">
   {t.surfskate.sen1}
  </p>
  <p className="mb-4 text-center p-2 text-black font-montSemiBold">
   {t.surfskate.sen2}
  </p>
  <p className="mb-4 text-black font-montSemiBold">
   {t.surfskate.sen3}
  </p>
</div> */}

<section
  className=" flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img2 bg-blend-darken"
>
<Parallax speed={-10} easing="easeIn">
  <div className="p-5 text-4xl text-black font-archivoBlack text-center">
  <Parallax speed={12} easing="easeIn">
  <div className="p-5 text-5xl md:text-8xl text-black font-archivoBlack text-center">
   {t.surfskate.lakesTitle}
  </div>
  <h1 className="text-xl lg:text-4xl text-black font-montBold">
    {t.surfskate.lakesSen1}
  </h1>
  <Parallax speed={13} easing="easeIn">
  <p className="mt-10 md:mt-14 lg:mt-4 text-lg md:text-2xl mx-4 md:mx-12 lg:mx-20 text-center font-montSemiBold text-black items-center justify-center bg-gray-400 bg-opacity-20 rounded-md">
              {t.surfskate.lakesSen2}
  </p>
  </Parallax>
      

  </Parallax>
  </div>
  </Parallax>

</section>
<div className="max-w-lg m-auto">
  
  {/* <p className="mb-4 p-2 text-center text-black font-montSemiBold">
   
  </p>
  <p className="mb-4">
   
  </p>
  <p className="mb-4">

  </p> */}
</div>

    </>
  );
}
