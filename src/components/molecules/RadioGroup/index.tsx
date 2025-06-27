interface RadioGroupProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  totalSlides,
  currentSlide,
  onSlideChange,
}) => {
  const handleChange = (slideIndex: number) => {
    onSlideChange(slideIndex);
  };

  return (
    <>
      {/* Radio Group */}
      <div className="flex items-center gap-4 mb-6">
        {Array.from({ length: totalSlides }, (_, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <button
              onClick={() => handleChange(index)}
              className={`lg:w-8 lg:h-8 xl:w-8 xl:h-8 w-6 h-6 rounded-full border-2 border-[#BDBDBD] shadow-sm transition-all duration-200 ease-in-out focus:outline-none focus:border-[#F9A825] ${
                currentSlide === index
                  ? "border-[#F9A825] shadow-[#F9A825]"
                  : "border-[#BDBDBD] shadow-[#BDBDBD]"
              }`}
              aria-label={`Slide ${index + 1}`}
              role="radio"
              aria-checked={currentSlide === index}
            >
              {currentSlide === index ? (
                <div className="lg:w-4 lg:h-4 xl:w-4 xl:h-4 w-3 h-3 bg-[#F9A825] rounded-full mx-auto"></div>
              ) : (
                <div className="lg:w-4 lg:h-4 xl:w-4 xl:h-4 w-3 h-3 bg-[#BDBDBD] rounded-full mx-auto"></div>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="sr-only">
        {Array.from({ length: totalSlides }, (_, index) => (
          <input
            key={index}
            type="radio"
            id={`slide-${index}`}
            name="slideGroup"
            value={index}
            checked={currentSlide === index}
            onChange={() => handleChange(index)}
          />
        ))}
      </div>
    </>
  );
};

export default RadioGroup;
