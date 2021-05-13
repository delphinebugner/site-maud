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
      className={`lg:h-homeCoverLg flex flex-col overflow-x-auto max-h-full
      lg:flex-row items-center justify-center lg:justify-between py-10 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
};
