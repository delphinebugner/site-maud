import { FunctionComponent } from "react";

interface HomeCoverProps {
  className?: string;
  title: string;
  subtitle: string;
  image: string;
}

export const HomeCover: FunctionComponent<HomeCoverProps> = ({
  className,
  title,
}) => {
  return (
    <div
      className={`${className ?? ""} relative h-homeCoverSm lg:h-homeCoverLg`}
    >
      <div
        style={{ backgroundImage: `url(images/024c.jpg)` }}
        className="absolute top-0 h-full w-full bg-cover bg-center z-0 bg-fixed"
      />
      <div className="flex flex-col items-center justify-center z-10 h-full relative pl-50percent pr-20 lg:pr-200">
        <span className="text-5xl lg:text-8xl text-primary font-serif text-center">
          {title}
        </span>
      </div>
    </div>
  );
};
