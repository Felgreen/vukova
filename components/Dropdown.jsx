import React from "react";
import { LogoB, LogoN } from "./svg/index";

const Dropdown = () => {
  return (
    <>
      <div id="dropdown" className="space-y-4">
        <details
          className=" group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 className=" font-antonRegular lg:text-3xl">VUKOVA ACASSUSO</h2>
            <LogoN
              className="h-7 w-7  animate-pulse shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            />
          </summary>

          <div class="container mx-auto p-8 flex flex-col md:flex-row">
            <div class="md:w-1/2 pr-4">
              <div class="mb-4">
                <h3 className="text-2xl  font-antonioBold mb-2">
                  Servicios disponibles
                </h3>
              </div>
              <div class="container mx-auto p-8">
                <ul class="list-none p-0 m-0 flex flex-wrap items-center">
                  <li class="flex items-center space-x-2 mb-2 pr-4">
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 6V6m0 6h18M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2m3 16a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m-1 4a5 5 0 0 1-5-5V5a5 5 0 0 1 10 0v9a5 5 0 0 1-5 5z"
                      />
                    </svg>
                    Word1
                  </li>
                  <li class="flex items-center space-x-2 mb-2 pr-4">
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 6V6m0 6h18M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2m3 16a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m-1 4a5 5 0 0 1-5-5V5a5 5 0 0 1 10 0v9a5 5 0 0 1-5 5z"
                      />
                    </svg>
                    Word2
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.828011572484!2d-58.503760324278375!3d-34.48188705107427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1b1deff8bd9%3A0x382bf8890d3b1293!2sATP%20Training%20Acassuso!5e0!3m2!1ses-419!2sar!4v1701351828563!5m2!1ses-419!2sar"
                  width={window.innerWidth > 500 ? "600" : "300"}
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </details>
        <details
          className=" group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 className=" font-antonRegular lg:text-3xl">VUKOVA VILO</h2>

            <LogoN
              className="h-7 w-7 animate-pulse shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            />
          </summary>

          <div className="container mx-auto p-8 flex flex-col md:flex-row">
            <div className="md:w-1/2 pr-4">
              <div className="mb-4">
                <h3 className="text-2xl font-antonioBold mb-2">
                  Servicios disponibles
                </h3>
                {/* <p className="text-gray-600">  <span className="">+54 9 33961371</span></p>
                <p className="text-gray-600">Ubicación: <span className="">Av. Maipú 545, Vicente López, Provincia de Buenos Aires</span></p> */}
              </div>
              <div class="container mx-auto p-8">
                <ul class="list-none p-0 m-0 flex flex-wrap items-center">
                  <li class="flex items-center space-x-2 mb-2 pr-4">
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 6V6m0 6h18M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2m3 16a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m-1 4a5 5 0 0 1-5-5V5a5 5 0 0 1 10 0v9a5 5 0 0 1-5 5z"
                      />
                    </svg>
                    Word1
                  </li>
                  <li class="flex items-center space-x-2 mb-2 pr-4">
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 6V6m0 6h18M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2m3 16a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m-1 4a5 5 0 0 1-5-5V5a5 5 0 0 1 10 0v9a5 5 0 0 1-5 5z"
                      />
                    </svg>
                    Word2
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52612.70292064786!2d-58.53564080482908!3d-34.49543183599423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7234934e42f%3A0xe841d3d092ed6168!2sVukova%20Vilo%20Training%20Club!5e0!3m2!1ses-419!2sar!4v1701347853072!5m2!1ses-419!2sar"
                  width={window.innerWidth > 500 ? "600" : "300"}
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </details>
        <details
          className=" group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 className=" font-antonRegular lg:text-3xl">VUKOVA DEL BAJO</h2>

            <LogoN
              className="h-7 w-7 animate-pulse shrink-0 transition duration-300 group-open:-rotate-180 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            />
          </summary>

          <div class="container mx-auto p-8 flex flex-col md:flex-row">
            <div class="md:w-1/2 pr-4">
              <div class="mb-4">
                <h3 class="text-2xl font-antonioBold mb-2">
                  Servicios disponibles
                </h3>
                {/* <p class="text-gray-600">  <span class="">+54 9 11 5765-0309</span></p>
                <p class="text-gray-600">Ubicación: <span class="">Av. Bartolomé Mitre 1650, B1643 Béccar, Provincia de Buenos Aires</span></p> */}
              </div>
              <div class="container mx-auto p-8">
                <ul class="list-none p-0 m-0 flex flex-wrap items-center">
                  <li class="flex items-center space-x-2 mb-2 pr-4">
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 6V6m0 6h18M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2m3 16a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m-1 4a5 5 0 0 1-5-5V5a5 5 0 0 1 10 0v9a5 5 0 0 1-5 5z"
                      />
                    </svg>
                    Word1
                  </li>
                  <li class="flex items-center space-x-2 mb-2 pr-4">
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 6V6m0 6h18M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2m3 16a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m-1 4a5 5 0 0 1-5-5V5a5 5 0 0 1 10 0v9a5 5 0 0 1-5 5z"
                      />
                    </svg>
                    Word2
                  </li>
                </ul>
              </div>
            </div>

            <div class="md:w-1/2">
              <div class="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.778913028669!2d-58.515193616776116!3d-34.45775968018829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcafdc12a07ba5%3A0x562534122faa1578!2sVUKOVA%20DEL%20BAJO!5e0!3m2!1ses-419!2sar!4v1701352221364!5m2!1ses-419!2sar"
                  width={window.innerWidth > 500 ? "600" : "300"}
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </details>
      </div>
    </>
  );
};

export default Dropdown;
