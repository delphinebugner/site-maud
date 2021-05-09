import Head from "next/head";
import React from "react";
import { Header } from "./Header/Header.component";
import { Language } from "../lib/language";

type Props = {
  children: React.ReactNode;
  language: Language;
  isTranslationAvailable?: boolean;
};
export const Layout: React.FC<Props> = ({
  children,
  language,
  isTranslationAvailable = true,
}) => {
  return (
    <div className="h-full relative">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Header
        language={language}
        isTranslationAvailable={isTranslationAvailable}
      />
      <div className="flex-1">{children}</div>
    </div>
  );
};
