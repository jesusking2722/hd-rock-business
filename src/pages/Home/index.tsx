import {
  Hero,
  About,
  Roadmap,
  Offer,
  TrackRecord,
  Team,
} from "../../components/sections";

const Home = () => {
  return (
    <div className="w-[95%] mx-auto lg:mt-6 xl:mt-6 lg:p-0 xl:p-0 px-4">
      <Hero />
      <About />
      <Roadmap />
      <Offer />
      <TrackRecord />
      <Team />
    </div>
  );
};

export default Home;
