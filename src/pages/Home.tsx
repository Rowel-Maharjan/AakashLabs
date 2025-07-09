import { AboutUs } from "../components/Home/About-us";
import { Navbar } from "../components/Home/Navbar";
import { Slider } from "../components/Home/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <AboutUs />
    </div>
  );
};

export { Home };
