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
      className={`h-homeCoverLg flex items-center justify-between py-10 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
};
