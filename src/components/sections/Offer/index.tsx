const Offer = () => {
  return (
    <>
      {/* Desktop */}
      <div className="w-full mt-20 relative xl:block lg:block hidden">
        <img
          src="/assets/pngs/group26.png"
          alt="Group 26"
          className="w-full h-auto z-0"
        />
        <div className="absolute inset-0 z-10">
          <div className="w-[76%] translate-y-1/2 xl:translate-y-[150px] mx-auto bg-[#2C3E50BF] rounded-2xl p-6 xl:p-4 flex justify-center gap-6">
            <div className="w-2/5 flex flex-col justify-between gap-6">
              <div className="w-full bg-[#364C6280] rounded-xl border-2 border-[#364C62] p-8">
                <span className="font-normal text-xl xl:text-base text-white">
                  High-density rock materials (over 3.1 t/m³)
                </span>
              </div>
              <div className="w-full bg-[#364C6280] rounded-xl border-2 border-[#364C62] p-4 space-y-4">
                <div className="bg-[#364C6280] rounded-xl p-6">
                  <span className="font-normal text-xl xl:text-base text-white">
                    Wide range of standard gradings,
                    <br />
                    including:
                  </span>
                </div>
                <div className="w-full space-y-4">
                  <div className="bg-[#4F6D8C80] p-4 rounded-lg">
                    <span className="font-normal text-xl xl:text-base text-white">
                      Gravel gradings all mm gradings
                    </span>
                  </div>
                  <div className="w-full grid grid-cols-4 gap-2 justify-between">
                    <div className="bg-[#4F6D8C80] px-4 py-2 rounded-lg">
                      <span className="font-normal text-xl xl:text-base text-white">
                        1–3 inch
                      </span>
                    </div>
                    <div className="bg-[#4F6D8C80] px-4 py-2 rounded-lg">
                      <span className="font-normal text-xl xl:text-base text-white">
                        1–5 inch
                      </span>
                    </div>
                    <div className="bg-[#4F6D8C80] px-4 py-2 rounded-lg">
                      <span className="font-normal text-xl xl:text-base text-white">
                        2–8 inch
                      </span>
                    </div>
                    <div className="bg-[#4F6D8C80] px-4 py-2 rounded-lg">
                      <span className="font-normal text-xl xl:text-base text-white">
                        3–9 inch
                      </span>
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-3 gap-2">
                    <div className="bg-[#4F6D8C80] px-4 py-2 rounded-lg flex items-center justify-center">
                      <span className="font-normal text-xl xl:text-base text-white">
                        2–20 kilo
                      </span>
                    </div>
                    <div className="bg-[#4F6D8C80] px-4 py-2 rounded-lg flex items-center justify-center">
                      <span className="font-normal text-xl xl:text-base text-white">
                        5–40 kilo
                      </span>
                    </div>
                    <div className="bg-[#4F6D8C80] px-4 py-2 rounded-lg flex items-center justify-center">
                      <span className="font-normal text-xl xl:text-base text-white">
                        10–60 kilo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-3/5 flex flex-col gap-6">
              <div className="w-full bg-[#364C6280] rounded-xl border-2 border-[#364C62] p-8">
                <span className="font-normal text-xl xl:text-base text-white">
                  Hydrotechnical rock and gravel solutions for offshore energy,
                  marine infrastructure, and coastal defense
                </span>
              </div>
              <div className="w-full bg-[#364C6280] rounded-xl border-2 border-[#364C62] p-8">
                <span className="font-normal text-xl xl:text-base text-white">
                  Custom gradings made to order — with our mobile crushing and
                  screening machines, we can produce any grading the customer
                  requires, no matter how specialized.
                </span>
              </div>
              <div className="w-full bg-[#364C6280] rounded-xl border-2 border-[#364C62] p-8">
                <span className="font-normal text-xl xl:text-base text-white">
                  Seamless integration with Eydehavn quay and advanced conveyor
                  loading systems, ensuring fast and efficient vessel loading at
                  rates of 800 ton per hr to 1,200 tons per hour.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute xl:top-15 top-20 w-full flex items-center justify-center">
          <h1 className="absolute text-white font-extrabold text-5xl font-titillium tracking-wider leading-tight">
            What We Offer
          </h1>
        </div>
      </div>

      {/* Mobile */}
      <section className="lg:hidden xl:hidden block space-y-6 w-full mt-14">
        <h1 className="text-white font-extrabold text-[28px] font-titillium tracking-wider leading-tight">
          What We Offer
        </h1>
        <div className="w-full mx-auto bg-[#2C3E50BF] rounded-2xl flex flex-col gap-6">
          <div className="w-full flex flex-col justify-between gap-6">
            <div className="w-full bg-[#364C6280] rounded-xl border-2 border-[#364C62] p-8">
              <span className="font-normal text-base text-white">
                High-density rock materials (over 3.1 t/m³)
              </span>
            </div>
            <div className="w-full bg-[#364C6280] rounded-xl border-2 border-[#364C62] p-4 space-y-4">
              <div className="bg-[#364C6280] rounded-xl p-6">
                <span className="font-normal text-base text-[#F2F2F2]">
                  Wide range of standard gradings, including:
                </span>
              </div>
              <div className="w-full space-y-4">
                <div className="bg-[#4F6D8C80] p-4 rounded-lg">
                  <span className="font-normal text-base text-white">
                    Gravel gradings all mm gradings
                  </span>
                </div>
                <div className="w-full grid grid-cols-4 gap-2">
                  <div className="bg-[#4F6D8C80] text-center p-2 rounded-lg">
                    <span className="font-normal text-base text-white">
                      1–3 inch
                    </span>
                  </div>
                  <div className="bg-[#4F6D8C80] text-center p-2 rounded-lg">
                    <span className="font-normal text-base text-white">
                      1–5 inch
                    </span>
                  </div>
                  <div className="bg-[#4F6D8C80] text-center p-2 rounded-lg">
                    <span className="font-normal text-base text-white">
                      2–8 inch
                    </span>
                  </div>
                  <div className="bg-[#4F6D8C80] text-center p-2 rounded-lg">
                    <span className="font-normal text-base text-white">
                      3–9 inch
                    </span>
                  </div>
                </div>
                <div className="w-full grid grid-cols-3 gap-2">
                  <div className="bg-[#4F6D8C80] w-full p-2 rounded-lg flex items-center justify-center">
                    <span className="font-normal text-base text-white">
                      2–20 kilo
                    </span>
                  </div>
                  <div className="bg-[#4F6D8C80] p-2 rounded-lg flex items-center justify-center">
                    <span className="font-normal text-base text-white">
                      5–40 kilo
                    </span>
                  </div>
                  <div className="bg-[#4F6D8C80] p-2 rounded-lg flex items-center justify-center">
                    <span className="font-normal text-base text-white">
                      10–60 kilo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
            <div className="w-full bg-[#364C6280] rounded-xl border-2 border-[#364C62] p-4">
              <span className="font-normal text-base text-white">
                Hydrotechnical rock and gravel solutions for offshore energy,
                marine infrastructure, and coastal defense
              </span>
            </div>
            <div className="w-full bg-[#364C6280] rounded-xl border-2 border-[#364C62] p-4">
              <span className="font-normal text-base text-white">
                Custom gradings made to order — with our mobile crushing and
                screening machines, we can produce any grading the customer
                requires, no matter how specialized.
              </span>
            </div>
            <div className="w-full bg-[#364C6280] rounded-xl border-2 border-[#364C62] p-4">
              <span className="font-normal text-base text-white">
                Seamless integration with Eydehavn quay and advanced conveyor
                loading systems, ensuring fast and efficient vessel loading at
                rates of 800 ton per hr to 1,200 tons per hour.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
