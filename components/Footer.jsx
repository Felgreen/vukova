import React from "react";
import { Superacion } from "../components/svg";

const Footer = () => {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-[#f37032] font-montSemiBold"
      id="Footer"
    >
      <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="mx-auto">  <Superacion className="h-full w-full " /></div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            
            <div>
              
              <p className="font-medium text-black dark:text-black">Partners</p>
              <nav aria-label="Footer Navigation - Services" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="https://www.vulcanowod.com.ar/"
                      target="_blank"
                      className="text-gray-200 transition hover:opacity-75 dark:text-gray-200"
                    >Vulcano</a>
                  </li>
                  <li>
                    <a
                      href="https://www.volcom.com.ar"
                      target="_blank"
                      className="text-gray-200 transition hover:opacity-75 dark:text-gray-200"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="http://www.jugoscitric.com/"
                      target="_blank"
                      className="text-gray-200 transition hover:opacity-75 dark:text-gray-200"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.vulcanowod.com.arbra"
                      target="_blank"
                      className="text-gray-200 transition hover:opacity-75 dark:text-gray-200"
                    ></a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <p className="font-medium text-black dark:text-black">Links</p>
              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="https://www.youtube.com/@VukovaTC"
                      target="_blank"
                      className="text-gray-200 transition hover:opacity-75 dark:text-gray-200"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/vukova.tc/"
                      target="_blank"
                      className="text-gray-200 transition hover:opacity-75 dark:text-gray-200"
                    >Instagram</a>
                  </li>
                  <li></li>
                </ul>
              </nav>
            </div>
            <div>
              <p className="font-medium text-black dark:text-black">Telefono</p>
              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a className="text-gray-200 transition hover:opacity-75 dark:text-gray-200">+54 9 11 5765-0309</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
                <p className="font-medium text-black dark:text-black">Mail</p>
                <nav aria-label="Footer Navigation - Legal" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a className="text-gray-200 transition hover:opacity-75 dark:text-gray-200 ">
                       
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-200 transition hover:opacity-75 dark:text-gray-200">
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="">
          
            </div>
          <p className="text-xs text-black-400 md:pl-20">
            © 2023. VUKOVA All rights reserved.
          </p>
        </div>
      </footer>
  );
};

export default Footer;
