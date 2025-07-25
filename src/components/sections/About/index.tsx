import { LeftAngleContainer, RightAngleContainer } from "../../templates";

const About = () => {
  return (
    <>
      {/* Desktop */}
      <div id="about" className="w-full -mt-14 lg:block xl:block hidden">
        {/* Intro about our business workflow */}
        <div className="w-[76%] mx-auto flex items-center justify-center px-20">
          <div id="materials" className="w-3/5 space-y-10">
            <h1 className="text-white font-extrabold text-5xl font-titillium tracking-wider leading-tight">
              Our Value Highlights
            </h1>

            {/* Workflow steps */}
            <ul className="w-full flex flex-col items-start gap-6 overflow-hidden">
              <li className="w-full flex items-center gap-3 relative after:content-[''] after:absolute after:w-[1px] after:h-6 after:bg-gray-400 after:left-2 after:top-full">
                <img
                  src="/assets/svgs/rock.svg"
                  alt="Rock"
                  className="w-5 h-5 z-10"
                />
                <p className="font-medium text-lg text-white">
                  High-Density Rock 3.1+ t/m³
                </p>
              </li>
              <li className="w-full flex items-center gap-3 relative after:content-[''] after:absolute after:w-[1px] after:h-6 after:bg-gray-400 after:left-2 after:top-full">
                <img
                  src="/assets/svgs/cargo_ship.svg"
                  alt="Cargo Ship"
                  className="w-5 h-5 z-10"
                />
                <p className="font-medium text-lg text-white">
                  Seamless Vessel Loading (up to 1,200 t/h)
                </p>
              </li>
              <li className="w-full flex items-center gap-3 relative after:content-[''] after:absolute after:w-[1px] after:h-6 after:bg-gray-400 after:left-2 after:top-full">
                <img
                  src="/assets/svgs/costal_dock.svg"
                  alt="Costal dock"
                  className="w-5 h-5 z-10"
                />
                <p className="font-medium text-lg text-white">
                  Norway-Based Quarry with Eydehavn Port Access
                </p>
              </li>
              <li className="w-full flex items-center gap-3">
                <img
                  src="/assets/svgs/funnel.svg"
                  alt="Funnel"
                  className="w-5 h-5 z-10"
                />
                <p className="font-medium text-lg text-white">
                  Custom Gradings on Demand
                </p>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="w-2/5">
            <RightAngleContainer
              imageUrl="/assets/pngs/photo_5897946453937080090_y.png"
              size="xl"
            />
          </div>
        </div>

        {/* Intro about location & port */}
        <div id="logistics" className="w-full mt-28">
          <LeftAngleContainer imageUrl="/assets/pngs/freepik_edit_The-style-is-candid-image-photography-with-natural (23).png">
            <div className="absolute xl:top-3 top-10 w-full mx-auto">
              <h1 className="text-white font-extrabold text-5xl font-titillium tracking-wider leading-tight z-10 text-center">
                Location & Port Logistics
              </h1>
            </div>
            <div className="absolute inset-0">
              <div className="w-[76%] xl:w-[90%] xl:px-10 px-20 xl:translate-y-1/2 translate-y-3/4 mx-auto flex items-center justify-center gap-14">
                {/* Image */}
                <div className="w-1/2">
                  {/* <RightAngleContainer
                    imageUrl="/assets/pngs/dji_0136.png"
                    size="xl"
                  /> */}
                  <img
                    src="/assets/pngs/desktop_port.png"
                    alt="Port"
                    className="w-full h-auto"
                  />
                </div>

                {/* Steps */}
                <div className="w-1/2 space-y-10">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-semibold text-white">
                      Our quarry is located in Norway,
                    </h2>
                    <p className="text-xl font-light text-white">
                      we operate with direct access to the Eydehavn seaside
                      enabling efficient maritime logistics and large-scale
                      vessel loading. The quay at Eidehavn has a height above
                      waterline of 2.7 meters and a length of 220 m
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                      The port is equipped to handle vessels up to:
                    </h2>
                    <ul className="w-full flex flex-col items-start gap-2 overflow-hidden">
                      <li className="flex items-center gap-2">
                        <img
                          src="/assets/svgs/vector.svg"
                          alt="Vector"
                          className="w-4 h-4"
                        />
                        <span className="text-lg font-light text-white">
                          <strong>Max LOA:</strong> 220 meters
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <img
                          src="/assets/svgs/vector.svg"
                          alt="Vector"
                          className="w-4 h-4"
                        />
                        <span className="text-lg font-light text-white">
                          <strong>Max BOA:</strong> 40 meters
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <img
                          src="/assets/svgs/vector.svg"
                          alt="Vector"
                          className="w-4 h-4"
                        />
                        <span className="text-lg font-light text-white">
                          <strong>Max draft:</strong> 12 meters
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </LeftAngleContainer>
        </div>
      </div>

      {/* Mobile */}
      <div
        id="mobile-about"
        className="w-full mt-10 space-y-10 lg:hidden xl:hidden block"
      >
        <div className="w-full space-y-6">
          <img
            src="/assets/pngs/mobile_about.png"
            alt="Mobile About"
            className="w-full h-auto object-cover"
          />

          <div id="mobile-materials" className="w-full space-y-4 px-1">
            <h1 className="text-white font-extrabold text-[28px] font-titillium tracking-wider leading-tight">
              Our Value Highlights
            </h1>

            {/* Workflow steps */}
            <ul className="w-full flex flex-col items-start gap-6 overflow-hidden">
              <li className="w-full flex items-center gap-3 relative after:content-[''] after:absolute after:w-[1px] after:h-6 after:bg-gray-400 after:left-2 after:top-full">
                <img
                  src="/assets/svgs/rock.svg"
                  alt="Rock"
                  className="w-5 h-5 z-10"
                />
                <p className="font-normal text-base text-white">
                  High-Density Rock 3.1+ t/m³
                </p>
              </li>
              <li className="w-full flex items-center gap-3 relative after:content-[''] after:absolute after:w-[1px] after:h-6 after:bg-gray-400 after:left-2 after:top-full">
                <img
                  src="/assets/svgs/cargo_ship.svg"
                  alt="Cargo Ship"
                  className="w-5 h-5 z-10"
                />
                <p className="font-normal text-base text-white">
                  Seamless Vessel Loading (up to 1,200 t/h)
                </p>
              </li>
              <li className="w-full flex items-center gap-3 relative after:content-[''] after:absolute after:w-[1px] after:h-6 after:bg-gray-400 after:left-2 after:top-full">
                <img
                  src="/assets/svgs/costal_dock.svg"
                  alt="Costal dock"
                  className="w-5 h-5 z-10"
                />
                <p className="font-normal text-base text-white">
                  Norway-Based Quarry with Eydehavn Port Access
                </p>
              </li>
              <li className="w-full flex items-center gap-3">
                <img
                  src="/assets/svgs/funnel.svg"
                  alt="Funnel"
                  className="w-5 h-5 z-10"
                />
                <p className="font-normal text-base text-white">
                  Custom Gradings on Demand
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full" id="mobile-logistics">
          <h1 className="text-white font-extrabold text-[28px] font-titillium tracking-wider leading-tight px-1">
            Location & Port
            <br />
            Logistics
          </h1>
          <img
            src="/assets/pngs/mobile_port.png"
            alt="Port"
            className="w-full h-auto object-cover -mt-4"
          />
          <div className="w-full space-y-4 mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-[#E0E0E0]">
                Our quarry is located in Norway,
              </h2>
              <p className="text-base font-light text-[#E0E0E0]">
                we operate with direct access to the Eydehavn seaside enabling
                efficient maritime logistics and large-scale vessel loading. The
                quay at Eidehavn has a height above waterline of 2.7 meters and
                a length of 220 m
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-[#E0E0E0]">
                The port is equipped to handle vessels up to:
              </h2>
              <ul className="w-full flex flex-col items-start gap-2 overflow-hidden">
                <li className="flex items-center gap-2">
                  <img
                    src="/assets/svgs/vector.svg"
                    alt="Vector"
                    className="w-4 h-4"
                  />
                  <span className="text-base font-normal text-[#E0E0E0]">
                    <strong>Max LOA:</strong> 220 meters
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/assets/svgs/vector.svg"
                    alt="Vector"
                    className="w-4 h-4"
                  />
                  <span className="text-base font-normal text-[#E0E0E0]">
                    <strong>Max BOA:</strong> 40 meters
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="/assets/svgs/vector.svg"
                    alt="Vector"
                    className="w-4 h-4"
                  />
                  <span className="text-base font-normal text-[#E0E0E0]">
                    <strong>Max draft:</strong> 12 meters
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
