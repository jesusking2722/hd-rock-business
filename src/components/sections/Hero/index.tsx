import { Button } from "../../common";
import { TwoAnglesContainer } from "../../templates";

const Hero = () => {
  return (
    <>
      <TwoAnglesContainer imageUrl="/assets/pngs/freepik_edit_The-style-is-candid-image-photography-with-natural (17).png">
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-[80%] mx-auto flex items-center justify-between">
            <div className="px-8 space-y-8">
              <h1 className="text-white font-extrabold text-7xl font-titillium tracking-wider leading-tight">
                High-Density Offshore
                <br />
                Norway Rock Supply
              </h1>
              <p className="font-normal text-xl text-[#E0E0E0]">
                We are a leading offshore supplier specializing in
                hydrotechnical rock of high-density materials exceeding
                <br />
                3.1 tons per cubic meter. With years of industry expertise, we
                proudly support major marine, offshore wind,
                <br />
                and energy infrastructure projects across Europe and beyond.
              </p>

              <Button
                type="primary"
                label="Request Specs"
                iconUrl="/assets/svgs/open_in_full.svg"
                className="font-semibold"
              />
            </div>
            <button>
              <img
                src="/assets/svgs/play.svg"
                alt="Play"
                className="w-48 h-48 transition-all duration-200 hover:scale-105"
              />
            </button>
          </div>
        </div>
      </TwoAnglesContainer>

      <div className="w-full block lg:hidden xl:hidden">
        <div className="space-y-8">
          <h1 className="text-white font-extrabold text-4xl font-titillium tracking-wider leading-tight">
            High-Density Offshore
            <br />
            Norway Rock Supply
          </h1>
          <p className="font-normal text-xl text-[#E0E0E0]">
            We are a leading offshore supplier specializing in hydrotechnical
            rock of high-density materials exceeding
            <br />
            3.1 tons per cubic meter. With years of industry expertise, we
            proudly support major marine, offshore wind,
            <br />
            and energy infrastructure projects across Europe and beyond.
          </p>
          <Button
            type="primary"
            label="Request Specs"
            iconUrl="/assets/svgs/open_in_full.svg"
            className="font-semibold"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
