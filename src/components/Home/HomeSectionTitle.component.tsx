import React, { FunctionComponent } from "react";

interface HomeSectionTitleProps {
  className?: string;
  text: string;
}

export const HomeSectionTitle: FunctionComponent<HomeSectionTitleProps> = ({
  className,
  text,
}) => {
  return (
    <div className={`${className} w-full lg:w-auto text-center lg:text-left`}>
      <span className="text-5xl lg:text-7xl font-serif">{text}</span>
    </div>
  );
};
