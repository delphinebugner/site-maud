import React, { FunctionComponent } from "react";

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
  sizeMobile = 288,
  position = "center",
}) => {
  return (
    <>
      <img
        src={src}
        className={`${className ?? ""}
        object-cover overflow-hidden rounded-full
        flex-shrink-0`}
      />
      <style jsx>
        {`
          img {
            height: ${sizeMobile}px;
            width: ${sizeMobile}px;
            object-position: ${position};
          }
          @media (min-width: 1024px) {
            img {
              height: ${sizeDesktop}px;
              width: ${sizeDesktop}px;
            }
          }
        `}
      </style>
    </>
  );
};
