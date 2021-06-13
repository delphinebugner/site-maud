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
  subtitle,
  image,
}) => {
  return (
    <div
      className={`${className ?? ""}relative h-homeCoverSm lg:h-homeCoverLg`}
    >
      <div
        style={{ backgroundImage: `url(images/024c.jpg)` }}
        className="absolute top-0 h-full w-full bg-cover bg-center z-0 bg-fixed"
      />
      <div className="flex flex-col items-center justify-center z-10 h-full relative">
        <span className="text-5xl lg:text-9xl text-primary font-serif">
          {title}
        </span>
      </div>
    </div>
  );
};
