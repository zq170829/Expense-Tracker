import CarouselPage from "./CarouselPage/CarouselPage";
import About from "./About/About";
import Pricing from "./Pricing/Pricing";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <CarouselPage />
      <hr />
      <About />
      <hr />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Home;
