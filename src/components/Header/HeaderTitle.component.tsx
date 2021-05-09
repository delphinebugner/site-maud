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
      <a className="font-extrabold text-blue-500 lg:text-2xl hover:text-blue-700 whitespace-nowrap">
        Maud Haering
      </a>
    </Link>
  );
};
