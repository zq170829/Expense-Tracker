import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import CarouselPage from "./CarouselPage";
import About from "./About";
import Pricing from "./Pricing";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <CarouselPage />
      <About />
      <hr />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Home;
