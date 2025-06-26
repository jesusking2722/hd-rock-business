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
      imageUrl: "/assets/pngs/slide2.png",
      title: "Viking Link",
      description: "Energy Interconnector",
      date: "12-01-2021",
    },
    {
      imageUrl: "/assets/pngs/slide1.png",
      title: "Baltic Pipe",
      description: "Gas Pipeline",
      date: "10-01-2023",
    },
  ];

  return (
    <>
      {/* Desktop */}
      <div
        id="track-record"
        className="w-[76%] mx-auto px-20 flex-col items-center justify-center lg:flex xl:flex hidden"
      >
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
      <div className="w-[76%] mx-auto px-10 mt-14 lg:block xl:block hidden">
        <Slider slides={slides} />
      </div>
      <div className="text-center mt-10 lg:block xl:block hidden">
        <p className="text-[#E0E0E0] text-center">
          Our reputation is built on quality, flexibility, and speed — providing
          reliable rock
          <br />
          solutions that help our partners deliver critical infrastructure with
          <br />
          confidence and precision.
        </p>
      </div>

      {/* Mobile */}
      <div
        id="track-record"
        className="mt-10 w-full space-y-6 xl:hidden lg:hidden block"
      >
        <h1 className="text-white font-extrabold text-[28px] font-titillium tracking-wider leading-tight">
          Our Project Track Record
        </h1>
        <p className="text-base font-normal text-[#E0E0E0]">
          We have proudly supplied materials to some of Europe’s largest and
          most demanding offshore and energy projects, including:
        </p>
        <Slider slides={slides} />
        <p className="text-[#E0E0E0]">
          Our reputation is built on quality, flexibility, and speed — providing
          reliable rock solutions that help our partners deliver critical
          infrastructure with confidence and precision.
        </p>
      </div>
    </>
  );
};

export default TrackRecord;
