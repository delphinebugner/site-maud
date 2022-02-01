import Link from "next/link";
import React, { FunctionComponent, useContext } from "react";
import { getUrlPrefix, LanguageContext } from "../../lib/LanguageContext";

interface Props {
  label: string;
  path: string;
}

export const NavigationLink: FunctionComponent<Props> = ({ label, path }) => {
  const { language } = useContext(LanguageContext);
  return (
    <Link href={`${getUrlPrefix(language)}${path}`}>
      <a
        className={`ml-7 text-secondary hover:text-primary transition-color duration-300`}
      >
        {label}
      </a>
    </Link>
  );
};
