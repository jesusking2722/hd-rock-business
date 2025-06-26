export interface ISlide {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
}

const Slide: React.FC<ISlide> = ({ imageUrl, title, description, date }) => {
  return (
    <div className="w-full flex gap-4 bg-[#364C62] rounded-xl xl:px-6 xl:py-2 lg:px-6 lg:py-2 px-4 py-1">
      <div className="w-2/5 h-auto">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="w-3/5 flex flex-col py-4">
        <h2 className="text-xl font-black text-white font-titillium leading-tight">
          {title}
        </h2>
        <p className="text-[#BDBDBD] font-normal text-base leading-relaxed">
          {description}
        </p>
        <div className="flex items-center gap-2 mt-auto">
          <img
            src="/assets/svgs/calendar.svg"
            alt="Calendar"
            className="w-5 h-5"
          />
          <span className="text-[#BDBDBD] font-normal text-base">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
