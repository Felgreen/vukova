import Dropdown from '../../components/Dropdown'
import en from "../../public/locales/en/english.json"
import es from "../../public/locales/es/espanol.json";
import { useRouter } from "next/router";

const Sedes = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;

  return (
    <>
    <section id='Sedes' className='py-24 px-5 lg:p-40'>
      <Dropdown t={t}/>
    </section>
    </>
  )
}

export default Sedes
