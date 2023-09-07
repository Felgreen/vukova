import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ScrollLink from "../components/ui/ScrollLink";
import en from "./../public/locales/en/english.json";
import es from "./../public/locales/es/espanol.json";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const path = router.pathname;
  const { locale } = router;
  const t = locale === "es" ? es : en;

  const MyButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        Click Me
      </a>
    );
  });

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  const [color, setColor] = useState("transparent");

  const [textColor, setTextColor] = useState("white");

  const handleColor = () => {
    setColor(!color);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    console.log(path);
    const changeColor = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 90) {
        setColor("#081B33");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 w-screen z-20 ease-in duration-300"
      style={{ backgroundColor: `${color}` }}
    >
      <div className="w-full m-auto flex justify-end md:justify-end lg:justify-start  first-letter:items-center p-4 md:text-sm xl:text-base font-archivoBlack">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="fill-cyan-500"
        class="h-6 w-6"
        ><path class="cls-1" d="m219.68,242.68h23.29l12.11,36.81,12.11-36.81h22.94l-25.16,63.48h-20.15l-25.16-63.48Z"/><path class="cls-1" d="m428.28,274.48v-.23c0-17.94,14.67-32.96,34.94-32.96s34.71,14.79,34.71,32.73v.23c0,17.94-14.68,32.96-34.94,32.96s-34.71-14.79-34.71-32.73Zm48.1,0v-.23c0-7.69-5.59-14.21-13.39-14.21s-13.16,6.41-13.16,13.98v.23c0,7.69,5.59,14.21,13.39,14.21s13.16-6.41,13.16-13.98Z"/><path class="cls-1" d="m496.65,242.68h23.29l12.11,36.81,12.11-36.81h22.94l-25.16,63.48h-20.15l-25.16-63.48Z"/><path class="cls-1" d="m334.75,297.08l22.13-31.28v-23.11h-22.13v34.13c0,6.87-3.96,10.6-9.2,10.6s-8.97-3.73-8.97-10.6v-34.13h-22.13v41.23c0,14.33,8.04,23.18,21.43,23.18,8.97,0,14.79-4.78,18.87-10.02Z"/><polygon class="cls-1" points="408.83 267.96 430.72 242.68 405.68 242.68 388.56 263.77 388.56 221.27 379.36 234.25 366.43 252.48 366.43 305.69 388.56 305.69 388.56 290.9 394.27 284.26 406.96 305.69 431.31 305.69 408.83 267.96"/><path class="cls-1" d="m583.27,242.68h20.89l26.56,63.48h-22.87l-3.33-8.46h-22.06l-3.24,8.46h-22.51l26.56-63.48Zm16.03,40.07l-5.76-15.31-5.76,15.31h11.52Z"/><path class="cls-1" d="m329.44,333.48v10.04h-2.77v-10.04h-3.83v-2.56h10.44v2.56h-3.83Z"/><path class="cls-1" d="m347.73,343.53l-2.7-4.03h-2.18v4.03h-2.77v-12.6h5.76c1.5,0,2.67.37,3.5,1.1.83.73,1.25,1.75,1.25,3.06v.04c0,1.02-.25,1.85-.75,2.49-.5.64-1.15,1.11-1.95,1.41l3.08,4.5h-3.24Zm.05-8.3c0-.6-.19-1.05-.58-1.35-.38-.3-.92-.45-1.6-.45h-2.75v3.62h2.81c.68,0,1.21-.16,1.58-.49.37-.32.55-.76.55-1.3v-.04Z"/><path class="cls-1" d="m367.15,343.53l-1.15-2.83h-5.33l-1.15,2.83h-2.83l5.4-12.69h2.56l5.4,12.69h-2.9Zm-3.82-9.36l-1.67,4.09h3.35l-1.67-4.09Z"/><path class="cls-1" d="m376.8,343.53v-12.6h2.77v12.6h-2.77Z"/><path class="cls-1" d="m396.24,343.53l-6.1-8.01v8.01h-2.74v-12.6h2.56l5.9,7.76v-7.76h2.74v12.6h-2.36Z"/><path class="cls-1" d="m406.42,343.53v-12.6h2.77v12.6h-2.77Z"/><path class="cls-1" d="m425.86,343.53l-6.1-8.01v8.01h-2.74v-12.6h2.56l5.9,7.76v-7.76h2.74v12.6h-2.36Z"/><path class="cls-1" d="m445.06,343.16c-.89.39-1.92.58-3.07.58-.98,0-1.88-.16-2.69-.49-.81-.32-1.51-.77-2.09-1.35s-1.04-1.26-1.36-2.05c-.32-.79-.49-1.66-.49-2.59v-.04c0-.9.17-1.74.5-2.53s.79-1.48,1.38-2.07c.59-.59,1.28-1.06,2.09-1.4s1.69-.51,2.65-.51c.56,0,1.08.04,1.54.12s.89.19,1.29.33c.4.14.77.32,1.12.54s.68.46,1.01.74l-1.75,2.11c-.24-.2-.48-.38-.72-.54-.24-.16-.49-.29-.75-.4s-.54-.19-.84-.25c-.3-.06-.63-.09-.99-.09-.5,0-.97.11-1.41.32-.44.21-.82.49-1.15.85-.33.35-.59.77-.77,1.24-.19.48-.28.98-.28,1.52v.04c0,.58.09,1.11.28,1.6s.45.91.79,1.27c.34.36.74.64,1.21.84.46.2.97.3,1.54.3,1.03,0,1.9-.25,2.61-.76v-1.81h-2.79v-2.39h5.47v5.47c-.65.55-1.42,1.02-2.31,1.41Z"/><path class="cls-1" d="m474.86,342.43c-.35.28-.73.51-1.14.71-.41.2-.87.35-1.36.45-.49.1-1.04.15-1.66.15-.92,0-1.78-.17-2.57-.5s-1.48-.79-2.05-1.38-1.03-1.27-1.35-2.06c-.32-.79-.49-1.64-.49-2.54v-.04c0-.9.16-1.74.49-2.53.32-.79.77-1.48,1.35-2.07.58-.59,1.27-1.06,2.07-1.4.8-.34,1.69-.51,2.66-.51.59,0,1.12.05,1.61.14.49.1.93.23,1.32.4.4.17.76.37,1.1.61s.65.5.94.79l-1.76,2.03c-.49-.44-.99-.79-1.5-1.04-.51-.25-1.08-.38-1.72-.38-.53,0-1.02.1-1.47.31s-.84.49-1.16.85c-.32.36-.58.78-.76,1.25-.18.47-.27.98-.27,1.52v.04c0,.54.09,1.05.27,1.53.18.48.43.9.75,1.26.32.36.7.64,1.15.85.45.21.94.32,1.48.32.72,0,1.33-.13,1.83-.4.5-.26.99-.62,1.49-1.08l1.76,1.78c-.32.35-.66.66-1.01.94Z"/><path class="cls-1" d="m482.76,343.53v-12.6h2.77v10.1h6.28v2.5h-9.05Z"/><path class="cls-1" d="m508.98,340.54c-.26.71-.63,1.3-1.11,1.77-.48.47-1.06.83-1.75,1.06-.68.23-1.45.35-2.29.35-1.69,0-3.02-.47-4-1.4-.97-.94-1.46-2.33-1.46-4.19v-7.2h2.77v7.13c0,1.03.24,1.81.72,2.33.48.52,1.15.78,2,.78s1.52-.25,2-.76c.48-.5.72-1.26.72-2.27v-7.22h2.77v7.11c0,.96-.13,1.79-.39,2.5Z"/><path class="cls-1" d="m527.23,341.58c-.22.43-.54.79-.95,1.08s-.91.5-1.49.65c-.58.14-1.22.22-1.93.22h-5.98v-12.6h5.84c1.29,0,2.31.29,3.04.88.74.59,1.11,1.38,1.11,2.38v.04c0,.36-.04.68-.13.95-.09.28-.21.52-.36.75-.15.22-.32.42-.52.59-.2.17-.41.31-.63.43.73.28,1.3.65,1.72,1.12.42.47.63,1.13.63,1.97v.04c0,.58-.11,1.08-.33,1.51Zm-3.11-6.93c0-.42-.16-.74-.47-.96s-.76-.33-1.35-.33h-2.74v2.66h2.56c.61,0,1.1-.11,1.46-.32.36-.21.54-.55.54-1.02v-.04Zm.7,5.04c0-.42-.16-.75-.49-1-.32-.25-.85-.37-1.57-.37h-3.2v2.77h3.29c.61,0,1.09-.11,1.44-.33.35-.22.52-.57.52-1.04v-.04Z"/></svg>
        {/* svg is glack, need white
         <div className="w-full">
        
          <Image
          className="landscape:hidden"
          src="/images/logoVukovalISO.svg"
          width="590"
          height="500"
          alt=""
        />
        </div> */}
        <ul
          style={{ color: `${textColor}` }}
          className="hidden md:flex  hover:underline-offset-2 "
        >
          <li
            className={
              path === "/"
                ? "p-4 text-[#e33d20]"
                : "p-4 hover:text-[#e33d20] text-white"
            }
          >
            <Link href="/">HOME</Link>
          </li>
          <li
            className={
              path === "/surfskate"
                ? "p-4 text-[#e33d20] "
                : "p-4 hover:text-[#e33d20] text-white"
            }
          >
            <Link href="/surfskate">SURFSKATE</Link>
          </li>
          <li
            className={
              path === "/entrenamiento"
                ? "p-4  text-[#e33d20]"
                : "p-4 hover:text-[#e33d20] text-white"
            }
          >
            <Link href="/entrenamiento">{t.nav.training}</Link>
          </li>
          <li
            className={
              path === "/wellness"
                ? "p-4 text-[#e33d20]"
                : "p-4 hover:text-[#e33d20] text-white"
            }
          >
            <Link href="/wellness">AP WELLNESS</Link>
          </li>
          <li
            className={
              path === "/#FAQ"
                ? "p-4 text-[#e33d20]"
                : "p-4 hover:text-[#e33d20] text-white"
            }
          >
            <a href="/#FAQ">FAQ</a>
          </li>
          <li
            className={
              path === "/nosotros"
                ? "p-4 text-[#e33d20]"
                : "p-4 hover:text-[#e33d20] text-white"
            }
          >
            <Link href="/nosotros">{t.nav.nosotros}</Link>
          </li>
          <li
            className={
              path === "/contact"
                ? "p-4  text-[#e33d20]"
                : "p-4 hover:text-[#e33d20] text-white"
            }
          >
            <Link href={"/contact"}>{t.nav.contact}</Link>
          </li>
          <li className="p-4 hover:text-[#e33d20] text-white">
            <a href="https://www.thesurfhouseshop.com.ar/">SURF SHOP</a>
          </li>
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-[#e33d20] text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="en">
              EN
            </option>
            <option className="text-black" value="es">
              ES
            </option>
          </select>
        </ul>
        <div className="hidden md:flex flex-row gap-4 align-middle items-center ml-2 justify-end w-1/6">
          {/* <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-white transition  hover:text-[#e33d20]  items-center hover:scale-125"
              >
                <span className="sr-only">Facebook</span>
           
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg> 
              </a> */}

          <a
            href="https://www.instagram.com/thesurfhouse.ar/?hl=es"
            rel="noreferrer"
            target="_blank"
            className="text-white transition hover:text-[#e33d20] hover:scale-125"
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
            <li
              className={
                path === "/"
                  ? "p-4 text-4xl mt-4 text-[#e33d20]"
                  : "p-4 text-4xl"
              }
            >
              <Link href="/">HOME</Link>
            </li>
            <li
              className={
                path === "/surfskate"
                  ? "p-4 text-4xl text-[#e33d20]"
                  : "p-4 text-4xl"
              }
            >
              <Link href="/surfskate">SURFSKATE</Link>
            </li>
            <li
              className={
                path === "/entrenamiento"
                  ? "p-4 text-4xl text-[#e33d20]"
                  : "p-4 text-4xl"
              }
            >
              <Link href="/entrenamiento">{t.nav.training}</Link>
            </li>
            <li
              className={
                path === "/wellness"
                  ? "p-4 text-4xl text-[#e33d20]"
                  : "p-4 text-4xl"
              }
            >
              <Link href="/wellness">AP WELLNESS</Link>
            </li>
            <li className="p-4 text-4xl" onClick={handleNav}>
              <a href="/#FAQ">FAQ</a>
            </li>
            <li
              className={
                path === "/nosotros"
                  ? "p-4 text-4xl text-[#e33d20]"
                  : "p-4 text-4xl"
              }
            >
              <Link href="/nosotros">{t.nav.nosotros}</Link>
            </li>
            <li
              className={
                path === "/contact"
                  ? "p-4 text-4xl text-[#e33d20]"
                  : "p-4 text-4xl"
              }
            >
              <Link href={"/contact"}>CONTACT</Link>
            </li>
            <li className="p-4 text-4xl">
              <a href="https://www.thesurfhouseshop.com.ar/">SURF SHOP</a>
            </li>
            <select
              onChange={changeLanguage}
              defaultValue={locale}
              className="text-white text-shadow-sm text-lg bg-transparent tracking-wide cursor-pointer items-center"
            >
              <option className="text-black rounded-xl" value="en">
                EN
              </option>
              <option className="text-black" value="es">
                ES
              </option>
            </select>
            <div className="flex justify-center gap-20 my-6 p-4">
              {/* <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-white transition dark:text-white hover:text-white/75"
              >
                <span className="sr-only">Facebook</span>
           
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg> 
              </a>
            </li> */}
              <li>
                <a
                  href="https://www.instagram.com/thesurfhouse.ar/?hl=es"
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
