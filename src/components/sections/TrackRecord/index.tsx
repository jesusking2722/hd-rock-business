import { ISlide } from "../../common/Slide";
import { Slider } from "../../molecules";

const TrackRecord = () => {
  const slides: ISlide[] = [
    {
      imageUrl: "/assets/pngs/slide1.png",
      title: "DolWin kappa",
      description: "Energy Infrastructure",
      date: "2-01-2020",
    },
    {
      imageUrl: "/assets/pngs/slide1.png",
      title: "DolWin kappa",
      description: "Energy Infrastructure",
      date: "2-01-2020",
    },
    {
      imageUrl: "/assets/pngs/slide1.png",
      title: "DolWin kappa",
      description: "Energy Infrastructure",
      date: "2-01-2020",
    },
  ];

  return (
    <>
      <div className="w-[76%] mx-auto px-20 flex flex-col items-center justify-center">
        <div className="space-y-6 text-center">
          <h1 className="text-white font-extrabold text-5xl font-titillium tracking-wider leading-tight">
            Our Project Track Record
          </h1>
          <p className="text-2xl font-normal text-[#E0E0E0]">
            We have proudly supplied materials to some of Europe’s largest and
            <br />
            most demanding offshore and energy projects, including:
          </p>
        </div>
      </div>
      <div className="w-[76%] mx-auto px-10 mt-14">
        <Slider slides={slides} />
      </div>
      <div className="text-center mt-10">
        <p className="text-[#E0E0E0] text-center">
          Our reputation is built on quality, flexibility, and speed — providing
          reliable rock
          <br />
          solutions that help our partners deliver critical infrastructure with
          <br />
          confidence and precision.
        </p>
      </div>
    </>
  );
};

export default TrackRecord;
