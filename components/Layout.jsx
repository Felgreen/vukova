import AnimatedBackground from "./ui/AnimatedBackground";

import TickerComponent from "./ui/TickerComponent";


import Main from "../components/Main";
import Footer from "./Footer";
import Features from "./Features";

const Layout = () => {

  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === "es" ? es : en;
  return (
    <>
      <div className="overflow-hidden" id="Layout">
        <Main />
        {/* <GridLayoutMobile t={t} /> */}
        <AnimatedBackground  />
        <TickerComponent />

        {/* <GridLayout t={t} /> */}
        {/* <CardSection t={t} /> */}
        <Features />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
