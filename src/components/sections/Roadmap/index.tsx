import { RightAngleContainer } from "../../templates";
import "./style.css";

const Roadmap = () => {
  return (
    <>
      {/* Desktop */}
      <section className="xl:w-full xl:px-10 w-[76%] mx-auto mt-24 px-20 hidden xl:block lg:block">
        <div className="home-group24">
          <div className="home-group19">
            <div className="home-image1">
              <RightAngleContainer
                size="xl"
                imageUrl="/assets/pngs/image.png"
              />
            </div>
            <div className="home-image3">
              <RightAngleContainer
                size="xl"
                imageUrl="/assets/pngs/photo_5908780577660717733_y.png"
              />
            </div>
            <img
              src="/assets/svgs/line1.svg"
              alt="Vector36514"
              className="home-vector3"
            />
          </div>
          <div className="home-group23">
            <span className="home-text10">
              We also have additional mobile equipment at other quarries, which
              can be transported to Eydehavn at any time to meet project
              demands.
            </span>
            <div className="home-group20">
              <img
                src="/assets/svgs/line1.svg"
                alt="Vector16514"
                className="home-vector1"
              />
              <div className="home-frame31">
                <div className="home-group181">
                  <img
                    src="/assets/svgs/checked.svg"
                    alt="Ellipse146515"
                    className="home-ellipse141"
                  />
                </div>
                <span className="home-text11">
                  <span>2 conveyor belts</span>
                  <br></br>
                  <span>— Telestack TCL 1031</span>
                </span>
              </div>
              <div className="home-frame32">
                <div className="home-group182">
                  <img
                    src="/assets/svgs/checked.svg"
                    alt="Ellipse146515"
                    className="home-ellipse142"
                  />
                </div>
                <span className="home-text15">2 Keestrack feeders</span>
              </div>
              <div className="home-frame33">
                <div className="home-group183">
                  <img
                    src="/assets/svgs/checked.svg"
                    alt="Ellipse146516"
                    className="home-ellipse143"
                  />
                </div>
                <span className="home-text16">3 Volvo L250H wheel loaders</span>
              </div>
              <div className="home-frame38">
                <div className="home-group184">
                  <img
                    src="/assets/svgs/checked.svg"
                    alt="Ellipse146516"
                    className="home-ellipse144"
                  />
                </div>
                <span className="home-text17">
                  3 Volvo excavators (EC 480, EC 380)
                </span>
              </div>
              <div className="home-frame34">
                <div className="home-group185">
                  <img
                    src="/assets/svgs/checked.svg"
                    alt="Ellipse146517"
                    className="home-ellipse145"
                  />
                </div>
                <span className="home-text18">3 Volvo L180H wheel loaders</span>
              </div>
              <div className="home-frame36">
                <div className="home-group186">
                  <img
                    src="/assets/svgs/checked.svg"
                    alt="Ellipse146517"
                    className="home-ellipse146"
                  />
                </div>
                <span className="home-text19">2 Volvo excavators (EC 250)</span>
              </div>
              <div className="home-frame37">
                <span className="home-text20">Volvo A40 GFC dumper</span>
                <div className="home-group187">
                  <img
                    src="/assets/svgs/checked.svg"
                    alt="Ellipse146518"
                    className="home-ellipse147"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="home-group22">
            <span className="home-text21 text-white font-extrabold text-5xl font-titillium tracking-wider leading-tight">
              Loading Facilities at Eidehavn
            </span>
            <div className="home-group21">
              <span className="home-text22 ">
                Our loading setup is built for speed and scale:
              </span>
              <img
                src="/assets/svgs/line2.svg"
                alt="Vector26518"
                className="home-vector2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="block xl:hidden lg:hidden w-full mt-10 space-y-6">
        <h1 className="text-white font-extrabold text-[28px] font-titillium tracking-wider leading-tight">
          Loading Facilities
          <br />
          at Eidehavn
        </h1>
        <img
          src="/assets/pngs/Group 19.png"
          alt="Group 19"
          className="w-full h-auto object-cover"
        />
        <ul className="w-full flex flex-col items-start gap-4">
          <li className="w-full flex flex-row items-center gap-4">
            <img
              src="/assets/svgs/checked.svg"
              alt="Radio"
              className="w-8 h-8"
            />
            <p className="text-white text-lg font-semibold">
              2 conveyor belts
              <br />— Telestack TCL 1031
            </p>
          </li>
          <li className="w-full flex flex-row items-center gap-4">
            <img
              src="/assets/svgs/checked.svg"
              alt="Radio"
              className="w-8 h-8"
            />
            <p className="text-white text-lg font-semibold">
              2 Keestrack feeders
            </p>
          </li>
          <li className="w-full flex flex-row items-center gap-4">
            <img
              src="/assets/svgs/checked.svg"
              alt="Radio"
              className="w-8 h-8"
            />
            <p className="text-white text-lg font-semibold">
              3 Volvo L250H wheel loaders
            </p>
          </li>
          <li className="w-full flex flex-row items-center gap-4">
            <img
              src="/assets/svgs/checked.svg"
              alt="Radio"
              className="w-8 h-8"
            />
            <p className="text-white text-lg font-semibold">
              3 Volvo excavators (EC 480, EC 380)
            </p>
          </li>
          <li className="w-full flex flex-row items-center gap-4">
            <img
              src="/assets/svgs/checked.svg"
              alt="Radio"
              className="w-8 h-8"
            />
            <p className="text-white text-lg font-semibold">
              3 Volvo L180H wheel loaders
            </p>
          </li>
          <li className="w-full flex flex-row items-center gap-4">
            <img
              src="/assets/svgs/checked.svg"
              alt="Radio"
              className="w-8 h-8"
            />
            <p className="text-white text-lg font-semibold">
              2 Volvo excavators (EC 250)
            </p>
          </li>
          <li className="w-full flex flex-row items-center gap-4">
            <img
              src="/assets/svgs/checked.svg"
              alt="Radio"
              className="w-8 h-8"
            />
            <p className="text-white text-lg font-semibold">
              Volvo A40 GFC dumper
            </p>
          </li>
        </ul>
        <p className="text-[#E0E0E0] font-normal text-base">
          We also have additional mobile equipment at other quarries, which can
          be transported to Eydehavn at any time to meet project demands.
        </p>
      </section>
    </>
  );
};

export default Roadmap;
