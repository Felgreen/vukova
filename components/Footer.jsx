import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import en from "./../public/locales/en/english.json";
import es from "./../public/locales/es/espanol.json";


const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;
  return (
    <div>
      <footer
        aria-label="Site Footer"
        className="  font-montSemiBold"
      >
        <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="mx-auto">
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-black dark:text-black">
                  Partners
                </p>
                <nav aria-label="Footer Navigation - Services" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href="https://peppersarg.com"
                        target="_blank"
                        className="text-gray-200 transition hover:opacity-75 dark:text-gray-200"
                      >
                        Peppers
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.volcom.com.ar"
                        target="_blank"
                        className="text-gray-200 transition hover:opacity-75 dark:text-gray-200"
                      >
                        Volcom
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.jugoscitric.com/"
                        target="_blank"
                        className="text-gray-200 transition hover:opacity-75 dark:text-gray-200"
                      >
                        Citric
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.vulcanowod.com.arbra"
                        target="_blank"
                        className="text-gray-200 transition hover:opacity-75 dark:text-gray-200"
                      >
                        Vulcano
                      </a>
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
                        href="https://apsurf.com/"
                        target="_blank"
                        className="text-gray-200 transition hover:opacity-75 dark:text-gray-200"
                      >
                        AP Surf trips
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://thesurfhouse.com.ar/surfshop/"
                        target="_blank"
                        className="text-gray-200 transition hover:opacity-75 dark:text-gray-200"
                      >
                        Surf shop
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </nav>
              </div>
              <div>
                <p className="font-medium text-black dark:text-black">
                  Telefono
                </p>
                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a className="text-gray-200 transition hover:opacity-75 dark:text-gray-200">
                        +54 9 11 5489-9448
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <p className="font-medium text-black dark:text-black">Mails</p>
                <nav aria-label="Footer Navigation - Legal" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a className="text-gray-200 transition hover:opacity-75 dark:text-gray-200 ">
                        info@thesurfhouse.com.ar
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-200 transition hover:opacity-75 dark:text-gray-200">
                        surfshop@thesurfhouse.com.ar
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 md:pl-20">
            © 2023. The Surf House. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
