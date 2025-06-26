import { LeftAngleContainer, RightAngleContainer } from "../../templates";

const About = () => {
  return (
    <div className="w-full -mt-14">
      {/* Intro about our business workflow */}
      <div className="w-[76%] mx-auto flex items-center justify-center px-20">
        <div className="w-3/5 space-y-10">
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
          <RightAngleContainer imageUrl="/assets/pngs/photo_5897946453937080090_y.png" />
        </div>
      </div>

      {/* Intro about location & port */}
      <div className="w-full mt-28">
        <LeftAngleContainer imageUrl="/assets/pngs/freepik_edit_The-style-is-candid-image-photography-with-natural (23).png">
          <div className="absolute top-10 w-full mx-auto">
            <h1 className="text-white font-extrabold text-5xl font-titillium tracking-wider leading-tight z-10 text-center">
              Location & Port Logistics
            </h1>
          </div>
          <div className="absolute inset-0">
            <div className="w-[80%] translate-y-3/4 mx-auto flex items-center justify-center gap-14">
              {/* Image */}
              <div className="w-2/5">
                <RightAngleContainer imageUrl="/assets/pngs/dji_0136.png" />
              </div>

              {/* Steps */}
              <div className="w-2/5 space-y-10">
                <div className="space-y-4">
                  <h2 className="text-3xl font-semibold text-white">
                    Our quarry is located in Norway,
                  </h2>
                  <p className="text-xl font-light text-white">
                    we operate with direct access to the Eydehavn seaside
                    enabling efficient maritime logistics and large-scale vessel
                    loading. The quay at Eidehavn has a height above waterline
                    of 2.7 meters and a length of 220 m
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
                      <span className="text-xl font-light text-white">
                        Max LOA: 220 meters
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <img
                        src="/assets/svgs/vector.svg"
                        alt="Vector"
                        className="w-4 h-4"
                      />
                      <span className="text-xl font-light text-white">
                        Max BOA: 40 meters
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <img
                        src="/assets/svgs/vector.svg"
                        alt="Vector"
                        className="w-4 h-4"
                      />
                      <span className="text-xl font-light text-white">
                        Max draft: 12 meters
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
  );
};

export default About;
