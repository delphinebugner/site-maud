import React from "react";

interface Props {
  h?: number;
  w?: number;
}

export const Spacer: React.FC<Props> = ({ w, h }) => (
  <div className={h !== undefined ? `w-full h-${h}` : `h-full w-${w}`} />
);
