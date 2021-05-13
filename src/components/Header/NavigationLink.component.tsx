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
        className={`ml-7 transition-color text-gray-500 active:text-gray-600 hover:text-gray-600 duration-300`}
      >
        {label}
      </a>
    </Link>
  );
};
