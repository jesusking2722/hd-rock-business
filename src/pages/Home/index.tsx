import { Hero } from "../../components/sections";
import About from "../../components/sections/About";

const Home = () => {
  return (
    <div className="w-[95%] mx-auto mt-6">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
