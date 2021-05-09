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
      <a className="font-bold text-primary text-2xl hover:text-primary-dark whitespace-nowrap font-serif mt-1 lg:text-4xl lg:mt-2">
        MaudHaering
      </a>
    </Link>
  );
};
