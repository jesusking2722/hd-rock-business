const Offer = () => {
  return (
    <div className="w-full mt-20 relative">
      <img
        src="/assets/pngs/group26.png"
        alt="Group 26"
        className="w-full h-auto z-0"
      />
      <div className="absolute inset-0 z-10">
        <div className="w-[76%] translate-y-1/2 mx-auto bg-[#2C3E50BF] rounded-2xl p-6 flex justify-center gap-6">
          <div className="w-2/5 flex flex-col justify-between gap-6">
            <div className="w-full bg-[#364C6280] rounded-xl border-2 border-[#364C62] p-8">
              <span className="font-normal text-xl text-white">
                High-density rock materials (over 3.1 t/m³)
              </span>
            </div>
            <div className="w-full bg-[#364C6280] rounded-xl border-2 border-[#364C62] p-4 space-y-4">
              <div className="bg-[#364C6280] rounded-xl p-6">
                <span className="font-normal text-xl text-white">
                  Wide range of standard gradings,
                  <br />
                  including:
                </span>
              </div>
              <div className="w-full space-y-4">
                <div className="bg-[#4F6D8C80] p-4 rounded-lg">
                  <span className="font-normal text-xl text-white">
                    Gravel gradings all mm gradings
                  </span>
                </div>
                <div className="w-full flex flex-row items-center justify-between">
                  <div className="bg-[#4F6D8C80] px-4 py-2 rounded-lg">
                    <span className="font-normal text-xl text-white">
                      1–3 inch
                    </span>
                  </div>
                  <div className="bg-[#4F6D8C80] px-4 py-2 rounded-lg">
                    <span className="font-normal text-xl text-white">
                      1–5 inch
                    </span>
                  </div>
                  <div className="bg-[#4F6D8C80] px-4 py-2 rounded-lg">
                    <span className="font-normal text-xl text-white">
                      2–8 inch
                    </span>
                  </div>
                  <div className="bg-[#4F6D8C80] px-4 py-2 rounded-lg">
                    <span className="font-normal text-xl text-white">
                      3–9 inch
                    </span>
                  </div>
                </div>
                <div className="w-full flex flex-row items-center justify-between gap-4">
                  <div className="bg-[#4F6D8C80] px-4 py-2 rounded-lg w-1/3 flex items-center justify-center">
                    <span className="font-normal text-xl text-white">
                      2–20 kilo
                    </span>
                  </div>
                  <div className="bg-[#4F6D8C80] px-4 py-2 rounded-lg w-1/3 flex items-center justify-center">
                    <span className="font-normal text-xl text-white">
                      5–40 kilo
                    </span>
                  </div>
                  <div className="bg-[#4F6D8C80] px-4 py-2 rounded-lg w-1/3 flex items-center justify-center">
                    <span className="font-normal text-xl text-white">
                      10–60 kilo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/5 flex flex-col gap-6">
            <div className="w-full bg-[#364C6280] rounded-xl border-2 border-[#364C62] p-8">
              <span className="font-normal text-xl text-white">
                Hydrotechnical rock and gravel solutions for offshore energy,
                marine infrastructure, and coastal defense
              </span>
            </div>
            <div className="w-full bg-[#364C6280] rounded-xl border-2 border-[#364C62] p-8">
              <span className="font-normal text-xl text-white">
                Custom gradings made to order — with our mobile crushing and
                screening machines, we can produce any grading the customer
                requires, no matter how specialized.
              </span>
            </div>
            <div className="w-full bg-[#364C6280] rounded-xl border-2 border-[#364C62] p-8">
              <span className="font-normal text-xl text-white">
                Seamless integration with Eydehavn quay and advanced conveyor
                loading systems, ensuring fast and efficient vessel loading at
                rates of 800 ton per hr to 1,200 tons per hour.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-20 w-full flex items-center justify-center">
        <h1 className="absolute text-white font-extrabold text-5xl font-titillium tracking-wider leading-tight">
          What We Offer
        </h1>
      </div>
    </div>
  );
};

export default Offer;
