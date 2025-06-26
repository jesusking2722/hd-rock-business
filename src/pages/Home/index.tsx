import {
  Hero,
  About,
  Roadmap,
  Offer,
  TrackRecord,
} from "../../components/sections";

const Home = () => {
  return (
    <div className="w-[95%] mx-auto mt-6">
      <Hero />
      <About />
      <Roadmap />
      <Offer />
      <TrackRecord />
    </div>
  );
};

export default Home;
