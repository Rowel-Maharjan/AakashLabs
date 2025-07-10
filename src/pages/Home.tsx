import { AboutUs } from "../components/Home/About-us";
import { Contact } from "../components/Home/Contact";
import { Slider } from "../components/Home/Slider";
import { Team } from "../components/Home/Team";

const Home = () => {
  return (
    <div>
      <Slider />
      <AboutUs />
      <Team />
      <Contact />
    </div>
  );
};

export { Home };
