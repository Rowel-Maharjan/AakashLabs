import { AboutUs } from "../components/Home/About-us";
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
    </div>
  );
};

export { Home };
