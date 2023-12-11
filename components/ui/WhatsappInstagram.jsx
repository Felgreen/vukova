import Image from "next/image";

const WhatsappInstagram = ({ celular, black }) => {
  return (
    <div className="flex items-center justify-center sm:justify-start">
      <a
        href={`https://api.whatsapp.com/send/?phone=${celular}&text&type=phone_number&app_absent=0`}
        target="_blank"
      >
        <Image
          src="/images/icon-whatsapp.svg"
          width={42}
          height={42}
          className="mr-2"
        />
      </a>
      <a
        href="https://www.instagram.com/vukova.tc/?hl=es"
        rel="noreferrer"
        target="_blank"
        className="ml-2"
      >
        <a
          href="https://www.instagram.com/vukova.cl/?hl=es"
          rel="noreferrer"
          target="_blank"
        >
         <Image src={`/images/icono-instagram${black ? '-bl' : ''}.png`} width={40} height={40} className=""/>
        </a>
      </a>
    </div>
  );
};

export default WhatsappInstagram;
