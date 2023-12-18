import Image from "next/image";

import {
  Aqua,
  Baby,
  LogoN,
  Personal,
  Pool,
  Swim,
  WL,
  WOD,
  Yoga,
} from "./svg/index";
import ModalSchedule from "./ui/ModalSchedule";

const Dropdown = ({ t }) => {
  return (
    <div id="dropdown" className="space-y-4">
      <details
        className="relative group [&_summary::-webkit-details-marker]:hidden"
        closed
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className=" font-antonRegular lg:text-3xl">VUKOVA ACASSUSO</h2>
          <LogoN
            className="h-7 w-7  animate-pulse shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          />
        </summary>

        <ul className="mt-8 grid  gap-4 grid-cols-3 mx-2 ">
          <li>
            <div className="group relative block">
              <Image
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                src="/images/acc2.webp"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                title="Vukova Acassuso barbell squat"
                alt="barbell squat"
              />

              <div classname="absolute inset-0 flex flex-col items-start justify-end p-6"></div>
            </div>
          </li>

          <li>
            <div className="group relative block">
              <Image
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                src="/images/acc3.webp"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                title="Vukova Acassuso kettblebells"
                alt="deep kb squat VUKOVA training"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6"></div>
            </div>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="group relative block">
              <Image
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                src="/images/acc1.webp"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                title="Vukova Acassuso Personal Training"
                alt="Vukova Personal training"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                {/* por las dudas si queremos escribir algo
                   <h3 class="text-xl font-medium text-white">
                    Skinny Jeans Blue
                  </h3>

                  <span class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span> */}
              </div>
            </div>
          </li>
        </ul>
        <div className="container mx-auto p-8 flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-4">
            <div className="mb-4">
              <h3 className="text-2xl  font-antonioBold mb-2">
              {t("servicios.header")}
              </h3>
            </div>
            <div className="container mx-auto px-4 py-8">
              <ul className="list-none p-0 m-0 flex flex-wrap justify-evenly items-center">
                <li className="flex items-center mb-2">
                  <WL className="h-8 w-8" />
                  {t("servicios.WL")}
                </li>
                <li className="flex items-center space-x-2 mb-2">
                  <Yoga className="h-8 w-8 mr-1" />
                  {t("servicios.YOGA")}
                </li>
                <li className="flex items-center space-x-2 mb-2">
                  <WOD className="h-8 w-8 mr-1" />
                  {t("servicios.WOD")}
                </li>
                <li className="flex items-center space-x-2 mb-2">
                  <Swim className="h-8 w-8 mr-1" />
                  {t("servicios.NATACION")}
                </li>
                <li className="flex items-center space-x-2 mb-2">
                  <Baby className="h-7 w-7 mr-1" />
                  {t("servicios.BABY")}
                </li>
                <li className="flex items-center space-x-2 mb-2">
                  <Aqua className="h-7 w-7 mr-1" />
                  {t("servicios.AQUAGYM")}
                </li>
                <li className="flex items-center space-x-2 mb-2">
                  <Pool className="h-7 w-7 mr-1" />
                  {t("servicios.PILETA")}
                </li>
                <li className="flex items-center space-x-2 mb-2">
                  <Personal className="h-7 w-7 mr-1" />
                  {t("servicios.PERSONAL")}
                </li>
              </ul>
            </div>
            <ModalSchedule sede="Aca" t={t} />
          </div>

          <div className="md:w-1/2">
            <div className="relative aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.828011572484!2d-58.503760324278375!3d-34.48188705107427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1b1deff8bd9%3A0x382bf8890d3b1293!2sATP%20Training%20Acassuso!5e0!3m2!1ses-419!2sar!4v1701351828563!5m2!1ses-419!2sar"
                width={window.innerWidth > 500 ? "500" : "300"}
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
        className="relative group [&_summary::-webkit-details-marker]:hidden"
        closed
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className=" font-antonRegular lg:text-3xl">VUKOVA VILO</h2>

          <LogoN
            className="h-7 w-7 animate-pulse shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          />
        </summary>
        <ul className="mt-8 grid  gap-4 grid-cols-3 mx-2">
          <li>
            <div className="group relative block">
              <Image
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                src="/images/vilo1.webp"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                title="Vukova Vicente Lopez"
                alt="gym vicente lopez"
              />

              <div classname="absolute inset-0 flex flex-col items-start justify-end p-6"></div>
            </div>
          </li>

          <li>
            <div className="group relative block">
              <Image
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                src="/images/vilo2.webp"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                title="Vukova Vicente lopez box"
                alt="Vicente Lopez gimnasio"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6"></div>
            </div>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="group relative block">
              <Image
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                src="/images/vilo3.webp"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                title="Vukova racks"
                alt="Equipamiento gym vicente lopez"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                {/* por las dudas si queremos escribir algo
                   <h3 class="text-xl font-medium text-white">
                    Skinny Jeans Blue
                  </h3>

                  <span class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span> */}
              </div>
            </div>
          </li>
        </ul>
        <div className="container mx-auto p-8 flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-4">
            <div className="mb-4">
              <h3 className="text-2xl font-antonioBold mb-2">
                   {t("servicios.header")}
              </h3>
              {/* <p className="text-gray-600">  <span className="">+54 9 33961371</span></p>
                <p className="text-gray-600">Ubicación: <span className="">Av. Maipú 545, Vicente López, Provincia de Buenos Aires</span></p> */}
            </div>
            <div className="container mx-auto px-4 py-8">
              <ul className="list-none p-0 m-0 flex flex-wrap justify-evenly items-center">
                <li className="flex items-center space-x-2 mb-2">
                  <Personal className="h-7 w-7 mr-1" />
                  {t("servicios.PERSONAL")}
                </li>
                <li className="flex items-center space-x-2 mb-2">
                  <WL className="h-8 w-8" />
                  {t("servicios.WL")}
                </li>
                <li className="flex items-center space-x-2 mb-2">
                  <WOD className="h-8 w-8 mr-1" />
                  {t("servicios.WOD")}
                </li>
              </ul>
            </div>
            <ModalSchedule sede="Vilo" t={t} />
          </div>

          <div className="md:w-1/2">
            <div className="relative aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52612.70292064786!2d-58.53564080482908!3d-34.49543183599423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7234934e42f%3A0xe841d3d092ed6168!2sVukova%20Vilo%20Training%20Club!5e0!3m2!1ses-419!2sar!4v1701347853072!5m2!1ses-419!2sar"
                width={window.innerWidth > 500 ? "500" : "300"}
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
        className="relative group [&_summary::-webkit-details-marker]:hidden"
        closed
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className=" font-antonRegular lg:text-3xl">VUKOVA DEL BAJO</h2>

          <LogoN
            className="h-7 w-7 animate-pulse shrink-0 transition duration-300 group-open:-rotate-180 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          />
        </summary>
        <ul className="mt-8 grid  gap-4 grid-cols-3 mx-2">
          <li>
            <div className="group relative block">
              <Image
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                src="/images/bajo2.webp"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                title="Vukova Acassuso barbell squat"
                alt="barbell squat"
              />

              <div classname="absolute inset-0 flex flex-col items-start justify-end p-6"></div>
            </div>
          </li>

          <li>
            <div className="group relative block">
              <Image
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                src="/images/bajo3.webp"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                title="Vukova Acassuso kettblebells"
                alt="deep kb squat VUKOVA training"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6"></div>
            </div>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="group relative block">
              <Image
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                src="/images/bajo1.webp"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                title="Vukova Acassuso Personal Training"
                alt="Vukova Personal training"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                {/* por las dudas si queremos escribir algo
                   <h3 class="text-xl font-medium text-white">
                    Skinny Jeans Blue
                  </h3>

                  <span class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span> */}
              </div>
            </div>
          </li>
        </ul>
        <div className="container mx-auto p-8 flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-4">
            <div className="mb-4">
              <h3 className="text-2xl font-antonioBold mb-2">
              {t("servicios.header")}
              </h3>
              {/* <p class="text-gray-600">  <span class="">+54 9 11 5765-0309</span></p>
                <p class="text-gray-600">Ubicación: <span class="">Av. Bartolomé Mitre 1650, B1643 Béccar, Provincia de Buenos Aires</span></p> */}
            </div>
            <div className="container mx-auto px-4 py-8">
              <ul className="list-none p-0 m-0 flex flex-wrap justify-between items-center">
                <li className="flex items-center space-x-2 mb-2">
                  <Personal className="h-7 w-7 mr-1" />
                  {t("servicios.PERSONAL")}
                </li>
                <li className="flex items-center space-x-2 mb-2">
                  <WL className="h-8 w-8" />
                  {t("servicios.WL")}
                </li>
                <li className="flex items-center space-x-2 mb-2">
                  <WOD className="h-8 w-8 mr-1" />
                  {t("servicios.WOD")}
                </li>
              </ul>
            </div>
            <ModalSchedule sede="Bajo" t={t} />
          </div>

          <div className="md:w-1/2">
            <div className="relative aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.778913028669!2d-58.515193616776116!3d-34.45775968018829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcafdc12a07ba5%3A0x562534122faa1578!2sVUKOVA%20DEL%20BAJO!5e0!3m2!1ses-419!2sar!4v1701352221364!5m2!1ses-419!2sar"
                width={window.innerWidth > 500 ? "500" : "300"}
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
  );
};

export default Dropdown;
