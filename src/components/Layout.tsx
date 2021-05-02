import Head from "next/head";
import React from "react";
import { Navigation } from "./Navigation";
import { Language } from "../lib/language";

type Props = {
  children: React.ReactNode;
  language: Language;
};
export const Layout: React.FC<Props> = ({ children, language }) => {
  return (
    <div className="h-full p-4 lg:p-10 flex flex-col">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation language={language} />
      </nav>
      <main className="flex-1">{children}</main>
    </div>
  );
};
