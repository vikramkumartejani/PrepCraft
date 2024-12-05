import React from "react";

interface OrbitingCirclesProps {
  duration: number;
  delay: number;
  radius: number;
  reverse?: boolean;
  children: React.ReactNode;
}

const OrbitingCircles: React.FC<OrbitingCirclesProps> = ({
  duration,
  delay,
  radius,
  reverse = false,
  children,
}) => {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{
        animation: `orbit ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        transformOrigin: `${radius}px`,
        transform: `rotate(${reverse ? 180 : 0}deg)`,
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
      }}
    >
      <div
        className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-500 text-white"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default OrbitingCircles;
