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
  const router = useRouter();
  return (
    <Link href={`${getUrlPrefix(language)}${path}`}>
      <a
        className={`${
          router.pathname === path ? "text-black" : "text-grey"
        } ml-7`}
      >
        {label}
      </a>
    </Link>
  );
};
