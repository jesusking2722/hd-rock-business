import Slide, { ISlide } from "../../common/Slide";
import RadioGroup from "../RadioGroup";

interface SliderProps {
  slides: ISlide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <>
      <div className="w-full flex items-center justify-between lg:gap-10 xl:gap-10 gap-4">
        {/* Left button */}
        <button className="flex items-center justify-center cursor-pointer">
          <img
            src="/assets/svgs/narrow_left.svg"
            alt="Narrow left"
            className="w-8 h-8"
          />
        </button>

        {/* Slides container */}
        <div className="w-full overflow-hidden">
          <div className="xl:hidden lg:hidden flex transition-transform duration-500 ease-in-out gap-6 sm:gap-4 md:gap-6">
            {slides.map((slide, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <Slide {...slide} />
              </div>
            ))}
          </div>
          <div className="xl:grid lg:grid hidden grid-cols-3 gap-4">
            {slides.map((slide, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <Slide {...slide} />
              </div>
            ))}
          </div>
        </div>

        {/* Right button */}
        <button className="flex items-center justify-center cursor-pointer">
          <img
            src="/assets/svgs/narrow_right.svg"
            alt="Narrow right"
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* Radio group below */}
      <div className="w-full flex items-center justify-center mt-10">
        <RadioGroup />
      </div>
    </>
  );
};

export default Slider;
