const Team = () => {
  return (
    <>
      {/* Desktop */}
      <div className="w-full xl:flex lg:flex hidden flex-col items-center justify-center mt-10">
        <div className="w-[30%] relative">
          <img
            src="/assets/pngs/team.png"
            alt="Team"
            className="w-full h-auto"
          />
          <div className="absolute rounded-xl border-4 border-[#314559] space-y-1 py-2 px-4 bg-[#364C62] top-2/3 -left-40">
            <div className="flex items-center gap-2">
              <img
                src="/assets/svgs/line.svg"
                alt="Line"
                className="w-5 h-auto"
              />
              <span className="font-normal text-lg text-white">CEO/Norway</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/assets/svgs/user.svg" alt="User" className="w-5 h-5" />
              <span className="font-normal text-lg text-white">
                Łukasz Szymborski
              </span>
            </div>
          </div>
          <div className="absolute rounded-xl border-4 border-[#314559] space-y-1 py-2 px-4 bg-[#364C62] top-1/4 -right-36">
            <div className="flex items-center gap-2">
              <img
                src="/assets/svgs/line.svg"
                alt="Line"
                className="w-5 h-auto"
              />
              <span className="font-normal text-lg text-white">CEO/Norway</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/assets/svgs/user.svg" alt="User" className="w-5 h-5" />
              <span className="font-normal text-lg text-white">
                Audun Pedersen
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="w-full mx-auto mt-10 block xl:hidden lg:hidden space-y-2">
        <img src="/assets/pngs/team.png" alt="Team" className="w-full h-auto" />
        <div className="w-full rounded-xl border-4 border-[#314559] space-y-1 py-2 px-4 bg-[#364C62] top-2/3 -left-40">
          <div className="flex items-center gap-2">
            <img
              src="/assets/svgs/line.svg"
              alt="Line"
              className="w-5 h-auto"
            />
            <span className="font-normal text-lg text-white">CEO/Poland</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/svgs/user.svg" alt="User" className="w-5 h-5" />
            <span className="font-normal text-lg text-white">
              Łukasz Szymborski
            </span>
          </div>
        </div>
        <div className="w-full rounded-xl border-4 border-[#314559] space-y-1 py-2 px-4 bg-[#364C62] top-1/4 -right-36">
          <div className="flex items-center gap-2">
            <img
              src="/assets/svgs/line.svg"
              alt="Line"
              className="w-5 h-auto"
            />
            <span className="font-normal text-lg text-white">CEO/Poland</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/svgs/user.svg" alt="User" className="w-5 h-5" />
            <span className="font-normal text-lg text-white">
              Audun Pedersen
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
