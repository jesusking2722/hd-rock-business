interface LeftAngleContainerProps {
  imageUrl?: string;
  children?: React.ReactNode;
}

const LeftAngleContainer: React.FC<LeftAngleContainerProps> = ({
  imageUrl,
  children,
}) => {
  return (
    <section className="relative">
      <section className="relative overflow-hidden">
        {/* Background SVG Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Folder-shaped background */}
          <svg
            className="w-full h-auto max-w-[1810px] max-h-[920px]"
            viewBox="0 0 1810 920"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient
                id="paint0_linear_65_58"
                x1="1810"
                y1="460"
                x2="0"
                y2="460"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0.44" />
                <stop offset="0.53605" stopOpacity="0.8" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <image
              href={imageUrl}
              width="1810"
              height="920"
              preserveAspectRatio="xMidYMid meet"
              clipPath="url(#paint0_linear_65_58)"
            />
            <path
              d="M1810 179C1810 159.118 1793.88 143 1774 143H528.422C507.205 143 487.368 132.485 475.458 114.927L416.542 28.073C404.632 10.5146 384.795 0 363.578 0H36C16.1178 0 0 16.1178 0 36V884C0 903.882 16.1178 920 36 920H1774C1793.88 920 1810 903.882 1810 884V179Z"
              fill="url(#paint0_linear_65_58)"
              className="opacity-80"
            />
          </svg>
        </div>

        {/* Content Container */}
        <div className="absolute inset-0">{children}</div>
      </section>
    </section>
  );
};

export default LeftAngleContainer;
