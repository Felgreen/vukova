import AnimatedBackground from "./ui/AnimatedBackground";
import GridLayoutMobile from "./ui/GridLayoutMobile";
import TickerComponent from "./ui/TickerComponent";
import en from "../public/locales/en/english.json";
import es from "../public/locales/es/espanol.json";
import GridLayout from "./ui/GridLayout";
import { useRouter } from "next/router";
import Main from "../components/Main";
import Footer from "./Footer";
import Features from "./Features";

const Layout = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;
  return (
    <>
      <div className="overflow-hidden" id="Layout">
        <Main t={t} />
        {/* <GridLayoutMobile t={t} /> */}
        <AnimatedBackground t={t} />
        <TickerComponent/>

        {/* <GridLayout t={t} /> */}
        {/* <CardSection t={t} /> */}
        <Features t={t}/>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
