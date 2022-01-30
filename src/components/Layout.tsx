import Head from "next/head";
import React from "react";
import { MyFooter } from "../Footer/MyFooter";
import { Header } from "./Header/Header.component";

type Props = {
  children: React.ReactNode;
  isTranslationAvailable?: boolean;
};
export const Layout: React.FC<Props> = ({
  children,
  isTranslationAvailable = true,
}) => {
  return (
    <div className="relative w-full bg-cream">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="shortcut icon" href="/icon20.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Header isTranslationAvailable={isTranslationAvailable} />
      <div>{children}</div>
      <MyFooter />
    </div>
  );
};
