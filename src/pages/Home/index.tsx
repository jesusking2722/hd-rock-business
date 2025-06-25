import { TwoAnglesContainer } from "../../components/common";

const Home = () => {
  return (
    <div className="w-[95%] mx-auto mt-6">
      <TwoAnglesContainer>
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Industrial
              <span className="block text-amber-300">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Leading the future of maritime logistics and industrial innovation
              with cutting-edge technology and sustainable solutions.
            </p>
          </div>
        </div>
      </TwoAnglesContainer>
    </div>
  );
};

export default Home;
