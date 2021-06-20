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
        className={`ml-7 text-sand hover:text-primary transition-color duration-300`}
      >
        {label}
      </a>
    </Link>
  );
};
