import Header from "./section/Header";
import Home from "./section/Home";
import About from "./section/About";
import Services from "./section/Services";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
import ParallaxDivider from "./components/ui/ParallaxDivider";
import ClientsCarousel from "./components/ui/ClientsCarousel";
import Infrastructure from "./section/Infrastructure";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <ParallaxDivider image="/img/soldadura1.jpg" />
      <Services />
      <ClientsCarousel />
      <Infrastructure />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
