import React from "react";

type TitleProps = {
  children: React.ReactNode;
  invertColor?: boolean;
};

const Title: React.FC<TitleProps> = ({ children, invertColor }: TitleProps) => {
  return (
    <span
      className={`mb-2 block text-xl font-semibold text-green-600 ${invertColor ? "text-white" : ""}`}
    >
      {children}
    </span>
  );
};

export { Title };
