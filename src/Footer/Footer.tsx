import { FunctionComponent } from "react";

interface FooterProps {
  className?: string;
}

export const Footer: FunctionComponent<FooterProps> = ({ className }) => {
  return (
    <div
      className={`${
        className ?? ""
      } h-100 bg-primary flex flex-col items-center justify-center text-white`}
    >
      <div>
        <span className="font-bold mr-2">{"Contact : "}</span>
        <span className="underline">maud.haering@gmail.com</span>
      </div>
      <div className="text-xs mt-2 text-primary-superdark">
        <span className="font-bold">Website Design & Realisation: @</span>
        <a className="underline" href="https://github.com/phindell">
          dbugner
        </a>
      </div>
    </div>
  );
};
