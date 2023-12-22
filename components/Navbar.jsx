import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


import React, { useState, useEffect } from "react";
import LiNavbarMobile from "./ui/LiNavbarMobile";
import { LogoB, LogoN } from "./svg/index";
import LiNavbar from "./ui/LiNavbar";


const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("black");
  const [textColor, setTextColor] = useState("white");
  const [scrolled, setScrolled] = useState(false);
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === "es" ? es : en;

  // const changeLanguage = (e) => {
  //   const locale = e.target.value;
  //   router.push(router.pathname, router.asPath, { locale });
  // };

  const handleNav = () => {
    setNav(!nav);
  };

  //TODO cambiar color de nav , probar glass effect con blur.
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("white");
        setScrolled(true);
        setTextColor("black");
      } else {
        setColor("black");
        setScrolled(false);
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 w-screen z-20 ease-in duration-300"
      id="navbar"
      style={{ backgroundColor: `${color}` }}
    >
      <div className="w-full px-5 flex justify-between items-center md:justify-end lg:justify-between first-letter:items-center p-1 md:text-sm xl:text-2xl font-antonioBold">
        <div className="w-20">
          {scrolled ? (
            <LogoN className={`h-full w-full`} />
          ) : (
            <LogoB className={`h-full w-full`} />
          )}
        </div>
        <div>
          <ul style={{ color: `${textColor}` }} className="hidden md:flex">
            <LiNavbar customPath="/" tNav="INICIO" textColor={textColor} />
            <LiNavbar
              customPath="/servicios"
              tNav="SERVICIOS"
              textColor={textColor}
            />

            <LiNavbar customPath="/sedes" tNav="SEDES" textColor={textColor} />
            <LiNavbar
              customPath="/distancia"
              tNav="PLAN A DISTANCIA"
              textColor={textColor}
            />
            <LiNavbar
              customPath="/equipo"
              tNav="EQUIPO"
              textColor={textColor}
            />
            <LiNavbar
              customPath="/contacto"
              tNav="CONTACTO"
              textColor={textColor}
            />
            
            <a href="https://api.whatsapp.com/send/?phone=5491157650309&text&type=phone_number&app_absent=0"
              target="_blank" className="bg-[#f37032] p-4 rounded text-black mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ee2967] duration-300">PROBA UNA CLASE 
            </a>
           
            {/* <div className="flex flex-col  justify-around ">
            <div className="">
            <LanguageSwitcher lang="en"><USA/></LanguageSwitcher>
            </div>
          <div className=""> <LanguageSwitcher lang="es"><ARG/></LanguageSwitcher></div>
           
            </div> */}

            {/* <select
              // onChange={changeLanguage}
              // defaultValue={locale}
              className={`p-3 text-shadow-sm text-lg bg-transparent tracking-wide`}
            >
              <option
                className="text-black"

                value="en"
              >
                
                
              </option>
              <option className="text-black"
                // className={`text-[${
                //   textColor === "white" ? "black" : "white"
                // }]`}
                value="es"
              >
               
              </option>
            </select> */}
          </ul>
        </div>
        <div className="black md:hidden">
          {nav ? (
            <AiOutlineClose
              size={20}
              style={{ color: "white" }}
              onClick={handleNav}
            />
          ) : (
            <AiOutlineMenu
              size={20}
              style={{ color: `${textColor}` }}
              onClick={handleNav}
            />
          )}
        </div>
        <div
          className={
            nav
              ? " md:hidden absolute z-10 top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 "
              : "md:hidden absolute z-10 top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 "
          }
        >
          <div className="absolute top-5 right-5">
            <AiOutlineClose
              size={24}
              style={{ color: "white" }}
              onClick={handleNav}
            />
          </div>
          <ul style={{ color: `${textColor}` }}>
            <LiNavbarMobile customPath="/" tNav="INICIO" />
            <LiNavbarMobile customPath="/servicios" tNav="SERVICIOS" />
            <LiNavbarMobile customPath="/equipo" tNav="EQUIPO" />
            <LiNavbarMobile customPath="/sedes" tNav="SEDES" />
            <LiNavbarMobile customPath="/distancia" tNav="CONTACTO" />
            <LiNavbarMobile customPath="/contacto" tNav="PLAN A DISTANCIA" />
            <li className="p-4">
        
              <button className="bg-[#f37032] p-4 rounded text-black text-4xl">
              <a
                href="https://api.whatsapp.com/send/?phone=5491157650309&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                PROBA UNA CLASE
                </a>
              </button>
             
            </li>
            {/* <li className="p-4">
              <select
                // onChange={changeLanguage}
                // defaultValue={locale}
                className="text-white text-shadow-sm text-4xl bg-transparent tracking-wide cursor-pointer items-center"
              >
                <option className="text-black rounded-xl" value="en">
                <LanguageSwitcher lang="en">EN</LanguageSwitcher>
                </option>
                <option className="text-black" value="es">
                <LanguageSwitcher lang="es">E</LanguageSwitcher>
                </option>
              </select>
            </li> */}
            <div className="flex justify-center gap-20 my-6 p-4">
              <li>
                <a
                  href="https://www.instagram.com/vukova.tc/?hl=es"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition dark:text-white hover:text-white/75"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
