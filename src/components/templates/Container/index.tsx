import { Header } from "../../organism";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className="w-full min-h-full bg-[#2c3e50]">
      {/* Gradient background effect */}
      <div className="w-full h-[400px] absolute top-0 z-0 bg-gradient-to-b from-[#010918] to-[#2c3e50]"></div>
      <Header />
      {children}
    </main>
  );
};

export default Container;
