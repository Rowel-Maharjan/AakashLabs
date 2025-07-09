import { AboutUs } from "../components/Home/About-us";
import { Contact } from "../components/Home/Contact";
import { Footer } from "../components/Home/Footer";
import { Navbar } from "../components/Home/Navbar";
import { Slider } from "../components/Home/Slider";
import { Team } from "../components/Home/Team";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <AboutUs />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export { Home };
