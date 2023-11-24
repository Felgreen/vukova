import Image from "next/image";

export default function Contact() {
  return (
    <section id="contacto" className="flex lg:flex-col py-40 h-auto w-full">
      <div className="flex flex-col lg:flex-row justify-between lg:mb-20 lg:p-10 items-center">
        <div className="text-center lg:text-left m-5 lg:mb-0">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
          </div>

          <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10">
            Vicente Lopez
          </h1>

          <p className="font-normal text-gray-500 text-sm md:text-md xl:text-lg mb-10">
            Hi, I’m Jessica. I’m UI/UX Designer. If you are looking for Designer
            to build your brands and grow your business Let’s shake hands with
            me.
          </p>

        </div>

        <div className="mx-auto lg:mx-0">
          <Image src="/images/afuera_bajo.jpg" alt="Image" width={1000}
          height={1000} className="rounded"/>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:mb-20 lg:p-10 items-center bg-black w-full">
        <div className="text-center lg:text-left m-5 lg:mb-0">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
          </div>

          <h1 className="font-bold text-white text-4xl md:text-6xl xl:text-7xl mb-10">
            Vicente Lopez
          </h1>

          <p className="font-normal text-white text-sm md:text-md xl:text-lg mb-10">
            Hi, I’m Jessica. I’m UI/UX Designer. If you are looking for Designer
            to build your brands and grow your business Let’s shake hands with
            me.
          </p>

        </div>

        <div className="mx-auto lg:mx-0">
          <Image src="/images/afuera_bajo.jpg" alt="Image" width={1000}
          height={1000} className="rounded"/>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:mb-20 lg:p-10 items-center w-full">
        <div className="text-center lg:text-left m-5 lg:mb-0">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
          </div>

          <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10">
            Vicente Lopez
          </h1>

          <p className="font-normal text-gray-500 text-sm md:text-md xl:text-lg mb-10">
            Hi, I’m Jessica. I’m UI/UX Designer. If you are looking for Designer
            to build your brands and grow your business Let’s shake hands with
            me.
          </p>

        </div>

        <div className="mx-auto lg:mx-0">
          <Image src="/images/afuera_bajo.jpg" alt="Image" width={1000}
          height={1000} className="rounded"/>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send/?phone=5491154899448&text&type=phone_number&app_absent=0"
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
  );
}
