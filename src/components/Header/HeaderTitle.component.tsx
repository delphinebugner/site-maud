import Link from "next/link";
import React, { FunctionComponent } from "react";
import { getUrlPrefix, Language } from "../../lib/language";
import { HOME } from "../../lib/routes";

interface Props {
  language: Language;
}

export const HeaderTitle: FunctionComponent<Props> = ({ language }) => {
  return (
    <Link href={`${getUrlPrefix(language)}${HOME}`}>
      <a className="my-1 lg:my-2">
        <div className="flex flex-col ">
          <p className="text-xl lg:text-4xl text-primary hover:text-primary-dark transition-all duration-500 whitespace-nowrap font-serif">
            Maud Haering
          </p>
          <p className="-mt-2 lg:-mt-2 text-sm lg:text-lg text-secondary">
            Soprano
          </p>
        </div>
      </a>
    </Link>
  );
};
