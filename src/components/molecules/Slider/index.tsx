import { useState } from "react";
import Slide, { ISlide } from "../../common/Slide";
import RadioGroup from "../RadioGroup";

interface SliderProps {
  slides: ISlide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="w-full flex items-center justify-between lg:gap-10 xl:gap-10 gap-4">
        {/* Left button */}
        <button
          className="flex items-center justify-center cursor-pointer"
          onClick={prevSlide}
        >
          <img
            src="/assets/svgs/narrow_left.svg"
            alt="Narrow left"
            className="w-8 h-8"
          />
        </button>

        {/* Slides container */}
        <div className="w-full overflow-hidden">
          <div
            className="xl:hidden lg:hidden flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full px-3 sm:px-2 md:px-3"
              >
                <Slide {...slide} />
              </div>
            ))}
          </div>
          <div className="xl:grid lg:grid hidden grid-cols-3 gap-4">
            {slides.map((slide, index) => (
              <Slide key={index} {...slide} />
            ))}
          </div>
        </div>

        {/* Right button */}
        <button
          className="flex items-center justify-center cursor-pointer"
          onClick={nextSlide}
        >
          <img
            src="/assets/svgs/narrow_right.svg"
            alt="Narrow right"
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* Radio group below */}
      <div className="w-full flex items-center justify-center mt-10">
        <RadioGroup
          totalSlides={slides.length}
          currentSlide={currentSlide}
          onSlideChange={setCurrentSlide}
        />
      </div>
    </>
  );
};

export default Slider;
