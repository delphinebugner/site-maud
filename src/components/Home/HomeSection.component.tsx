import { FunctionComponent } from "react";

interface HomeSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const HomeSection: FunctionComponent<HomeSectionProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`h-homeCoverSm lg:h-homeCoverLg flex flex-col 
      lg:flex-row items-center justify-center lg:justify-between py-10 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
};
