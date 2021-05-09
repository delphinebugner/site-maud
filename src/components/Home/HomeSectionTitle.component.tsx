import { FunctionComponent } from "react";

interface HomeSectionTitleProps {
  className?: string;
  text: string;
}

export const HomeSectionTitle: FunctionComponent<HomeSectionTitleProps> = ({
  className,
  text,
}) => {
  return (
    <div className={className}>
      <span className="text-8xl font-serif">{text}</span>
    </div>
  );
};
