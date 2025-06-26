import Slide, { ISlide } from "../../common/Slide";
import RadioGroup from "../RadioGroup";

interface SliderProps {
  slides: ISlide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <>
      <div className="w-full flex items-center justify-between gap-10">
        <div className="">
          <button className="flex items-center justify-center cursor-pointer">
            <img
              src="/assets/svgs/narrow_left.svg"
              alt="Narrow left"
              className="w-8 h-8"
            />
          </button>
        </div>
        <div className="w-full relative overflow-hidden flex items-center gap-6">
          {slides.map((slide, index) => (
            <Slide key={index} {...slide} />
          ))}
        </div>
        <div className="">
          <button className="flex items-center justify-center cursor-pointer">
            <img
              src="/assets/svgs/narrow_right.svg"
              alt="Narrow right"
              className="w-8 h-8"
            />
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <RadioGroup />
      </div>
    </>
  );
};

export default Slider;
