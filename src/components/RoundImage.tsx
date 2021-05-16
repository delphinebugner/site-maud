import { FunctionComponent } from "react";

interface RoundImageProps {
  className?: string;
  src: string;
  sizeDesktop: number;
  sizeMobile?: number;
  position?: string;
}

export const RoundImage: FunctionComponent<RoundImageProps> = ({
  className,
  src,
  sizeDesktop,
  sizeMobile = sizeDesktop,
  position = "center",
}) => {
  return (
    <img
      src={src}
      className={`${
        className ?? ""
      } h-${sizeMobile} w-${sizeMobile} lg:h-${sizeDesktop} lg:w-${sizeDesktop}
        object-cover object-${position} overflow-hidden rounded-full
        flex-shrink-0`}
    />
  );
};
