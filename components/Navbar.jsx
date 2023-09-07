import React, { useState, useEffect } from "react";
import Link from "next/link";

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
