import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { getUrlPrefix, Language } from "../../lib/language";

interface Props {
  label: string;
  path: string;
  language: Language;
}

export const NavigationLink: FunctionComponent<Props> = ({
  label,
  path,
  language,
}) => {
  return (
    <Link href={`${getUrlPrefix(language)}${path}`}>
      <a
        className={`ml-7 transition-color text-sand active:text-black hover:text-black duration-300 text-lg`}
      >
        {label}
      </a>
    </Link>
  );
};
