import Image from "next/image";
import { motion } from "framer-motion";
import Footer from '../../components/Footer';
import en from "../../public/locales/en/english.json";
import es from "../../public/locales/es/espanol.json";

export default function Contact() {

  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;
   
  const boxVariant = {
    offscreen: { opacity: 0, scale: 0 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 1, bounce: 0.3 },
    },
  };

  return (
    <>
    <section id="contacto" className="py-40 h-auto w-full  font-antonioBold">
      <div className="flex flex-col lg:flex-row justify-between lg:mb-20 lg:p-10 items-center">
        <div className="text-center lg:text-left m-5 lg:mb-0 max-w-lg">
          <motion.h1
            className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10"
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxVariant}
          >
            Acassuso
          </motion.h1>

          <motion.p
            className="font-normal text-gray-500 text-sm md:text-md xl:text-lg mb-10"
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxVariant}
          >
            <ul>
              <li>
                +54 9 11 3008-5645
              </li>
              <li>
                Eduardo Costa 1228, B1641 Acassuso, Provincia de Buenos Aires
              </li>
            </ul>
          </motion.p>
        </div>

        <motion.div
          className="mx-auto lg:mx-0"
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={boxVariant}
        >
          <Image
            src="/images/acccon.webp"
            alt="Vukova acassuso"
            width={600}
            height={600}
            className="rounded"
            title="Acassuso gym"
          
          />
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse justify-between lg:mb-20 lg:p-10 items-center bg-black">
        <div className="text-center lg:text-left m-5 lg:mb-0 max-w-lg">
          <motion.h1
            className="font-bold text-white text-4xl md:text-6xl xl:text-7xl mb-10"
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxVariant}
          >
            Vicente Lopez
          </motion.h1>

          <motion.p
            className="font-normal text-white text-sm md:text-md xl:text-lg mb-10"
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxVariant}
          >
           <ul>
              <li>
              +54 9 11 3396-1371
              </li>
              <li>
              Av. Maipú 545, Vicente López, Provincia de Buenos Aires
              </li>
           </ul>
          </motion.p>
        </div>

        <motion.div
          className="mx-auto lg:mx-0"
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={boxVariant}
        >
          <Image
            src="/images/vilocon.webp"
            alt="Gym Vicente Lopez"
            width={600}
            height={600}
            className="rounded"
            title="Vicente Lopez Vukova"
            
          />
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:mb-20 lg:p-10 items-center">
        <div className="text-center lg:text-left m-5 lg:mb-0 max-w-lg">
          <motion.h1
            className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10"
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxVariant}
          >
            Beccar
          </motion.h1>

          <motion.p
            className="font-normal text-gray-500 text-sm md:text-md xl:text-lg mb-10"
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxVariant}
          >
            <ul>
              <li>
                +54 9 11 5765-0309
              </li>
              <li>
                Av. Bartolomé Mitre 1650, B1643 Béccar, Provincia de Buenos Aires
              </li>
            </ul>
          </motion.p>
        </div>

        <motion.div
          className="mx-auto lg:mx-0"
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={boxVariant}
        >
          <Image
            src="/images/afuera_bajo.jpg"
            alt="Image"
            width={600}
            height={600}
            className="rounded"
          />
        </motion.div>
      </div>
      <a
        href="https://api.whatsapp.com/send/?phone=5491157650309&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <button
          title="Contact whatsapp now"
          className="fixed z-90 bottom-10 right-8  bg-green-600 w-10 md:w-20 md:h-20 rounded-full drop-shadow-lg flex justify-center items-center text-black text-4xl hover:drop-shadow-2xl animate-pulse md:animate-none hover:animate-bounce duration-300"
        >
          <Image
            src="/images/icon-whatsapp.svg"
            width={42}
            height={42}
            className=""
          />
        </button>
      </a>
    </section>
    <Footer/>
    </>
  );
}
