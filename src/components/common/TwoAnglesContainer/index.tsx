import React from "react";

interface TwoAnglesContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  imageUrl?: string;
}

const TwoAnglesContainer: React.FC<TwoAnglesContainerProps> = ({
  children,
  backgroundColor,
  imageUrl,
}) => {
  return (
    <div className="relative">
      {/* Custom shaped container */}
      <div className="relative overflow-hidden">
        {/* SVG Shape Container */}
        <svg
          className="w-full h-auto max-w-full"
          viewBox="0 0 1810 920"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ aspectRatio: "1810/920" }}
        >
          <defs>
            {imageUrl && (
              <pattern
                id="heroImagePattern"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <image
                  href={imageUrl}
                  x="0"
                  y="-0.16"
                  width="1"
                  height="1.32"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            )}
            <clipPath id="heroClip">
              <path d="M0 129.655C0 109.773 16.1177 93.655 36 93.655H1302.54C1314.96 93.655 1326.5 87.2572 1333.07 76.7269L1370.43 16.9281C1377 6.39776 1388.54 0 1400.96 0H1774C1793.88 0 1810 16.1178 1810 36V884C1810 903.882 1793.88 920 1774 920H1644C1624.12 920 1608 903.882 1608 884V844C1608 824.118 1591.88 808 1572 808H252C232.118 808 216 824.118 216 844V884C216 903.882 199.882 920 180 920H36C16.1178 920 0 903.882 0 884V129.655Z" />
            </clipPath>
          </defs>

          {/* Background shape with conditional fill */}
          <path
            d="M0 129.655C0 109.773 16.1177 93.655 36 93.655H1302.54C1314.96 93.655 1326.5 87.2572 1333.07 76.7269L1370.43 16.9281C1377 6.39776 1388.54 0 1400.96 0H1774C1793.88 0 1810 16.1178 1810 36V884C1810 903.882 1793.88 920 1774 920H1644C1624.12 920 1608 903.882 1608 884V844C1608 824.118 1591.88 808 1572 808H252C232.118 808 216 824.118 216 844V884C216 903.882 199.882 920 180 920H36C16.1178 920 0 903.882 0 884V129.655Z"
            fill={imageUrl ? "url(#heroImagePattern)" : backgroundColor}
            stroke="#e5e7eb"
            strokeWidth="2"
          />
        </svg>

        {/* Content overlay */}
        <div className="absolute inset-0">{children}</div>
      </div>
    </div>
  );
};

export default TwoAnglesContainer;
