import React from "react";

interface RightAngleContainerProps {
  children?: React.ReactNode;
  imageUrl?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  backgroundColor?: string;
  borderColor?: string;
  showPlaceholder?: boolean;
  className?: string;
}

const RightAngleContainer: React.FC<RightAngleContainerProps> = ({
  className,
  children,
  imageUrl,
  alt = "Container content",
  size = "md",
  backgroundColor,
  borderColor,
  showPlaceholder = true,
  ...props
}) => {
  const sizeClasses = {
    sm: "w-full max-w-xs h-auto aspect-[593/395]",
    md: "w-full max-w-md h-auto aspect-[593/395]",
    lg: "w-full max-w-2xl h-auto aspect-[593/395]",
    xl: "w-full max-w-4xl h-auto aspect-[593/395]",
  };

  const hasContent = children || imageUrl;

  return (
    <div
      className={`relative w-full aspect-[593/395] ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 593 395"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Main container shape */}
        <path
          d="M12 76.5294C12 63.2746 22.7452 52.5294 36 52.5294H356.572C364.753 52.5294 372.37 48.3624 376.783 41.4735L388.579 23.0559C392.991 16.167 400.608 12 408.789 12H557C570.255 12 581 22.7452 581 36V359C581 372.255 570.255 383 557 383H36C22.7452 383 12 372.255 12 359V76.5294Z"
          fill={backgroundColor || "#e2e8f0"}
          className={
            !backgroundColor ? "fill-slate-200 dark:fill-slate-700" : ""
          }
        />

        {/* Border stroke */}
        <path
          d="M557 6C573.569 6 587 19.4315 587 36V359C587 375.569 573.569 389 557 389H36C19.4315 389 6 375.569 6 359V76.5293C6.00006 59.9608 19.4315 46.5293 36 46.5293H356.572C362.708 46.5293 368.421 43.404 371.73 38.2373L383.526 19.8203C389.042 11.2092 398.563 6 408.789 6H557Z"
          stroke={borderColor || "#64748b"}
          className={
            !borderColor
              ? "stroke-[#C4C4C4] opacity-20 dark:stroke-slate-600"
              : ""
          }
          strokeOpacity="0.5"
          strokeWidth="12"
        />

        {/* Content area mask */}
        <defs>
          <mask
            id="containerMask"
            maskUnits="userSpaceOnUse"
            x="12"
            y="12"
            width="569"
            height="371"
          >
            <path
              d="M12 76.5294C12 63.2746 22.7452 52.5294 36 52.5294H356.572C364.753 52.5294 372.37 48.3624 376.783 41.4735L388.579 23.0559C392.991 16.167 400.608 12 408.789 12H557C570.255 12 581 22.7452 581 36V359C581 372.255 570.255 383 557 383H36C22.7452 383 12 372.255 12 359V76.5294Z"
              fill="white"
            />
          </mask>
        </defs>

        {/* Content area */}
        <g mask="url(#containerMask)">
          {imageUrl ? (
            <foreignObject x="12" y="12" width="569" height="371">
              <div className="w-full h-full">
                <img
                  src={imageUrl}
                  alt={alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </foreignObject>
          ) : children ? (
            <foreignObject x="12" y="12" width="569" height="371">
              <div className="w-full h-full overflow-hidden">{children}</div>
            </foreignObject>
          ) : (
            <rect
              x="12"
              y="12"
              width="569"
              height="371"
              fill="#f1f5f9"
              className="fill-slate-100 dark:fill-slate-800"
            />
          )}
        </g>

        {/* Placeholder icon when no content and showPlaceholder is true */}
        {!hasContent && showPlaceholder && (
          <g mask="url(#containerMask)">
            <rect
              x="12"
              y="12"
              width="569"
              height="371"
              fill="#f8fafc"
              className="fill-slate-50 dark:fill-slate-900"
            />
            <g transform="translate(296.5, 197.5)">
              <rect
                x="-20"
                y="-20"
                width="40"
                height="30"
                rx="4"
                fill="#cbd5e1"
                className="fill-slate-300 dark:fill-slate-600"
              />
              <circle
                cx="-8"
                cy="-8"
                r="4"
                fill="#94a3b8"
                className="fill-slate-400 dark:fill-slate-500"
              />
              <path
                d="M-20 5 L-5 -8 L5 0 L20 -12 L20 10 L-20 10 Z"
                fill="#94a3b8"
                className="fill-slate-400 dark:fill-slate-500"
              />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};

export default RightAngleContainer;
