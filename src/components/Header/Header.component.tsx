import React, { useState } from "react";
import { Language } from "../../lib/language";
import Burger from "./Burger.component";
import { HeaderTitle } from "./HeaderTitle.component";
import { NavigationLinks } from "./NavigationLinks.component";

interface Props {
  language: Language;
  isTranslationAvailable: boolean;
}

export const Header: React.FC<Props> = ({
  language,
  isTranslationAvailable,
}) => {
  const [isBurgerActive, setBurgerActive] = useState(false);
  return (
    <>
      <div className="h-12 lg:h-14 shadow-md flex space-between items-center px-3 lg:px-7 sticky w-full top-0 bg-white z-20">
        <HeaderTitle language={language} />
        <Burger
          active={isBurgerActive}
          onClick={() => setBurgerActive(!isBurgerActive)}
        />
        <NavigationLinks
          language={language}
          isTranslationAvailable={isTranslationAvailable}
          className="flex-1 items-center justify-end hidden lg:flex"
        />
      </div>
      {isBurgerActive && (
        <div className="top-0 left-0 h-full w-full absolute flex lg:hidden z-30">
          <NavigationLinks
            language={language}
            className="flex flex-col bg-white w-3/4 text-lg shadow-md space-y-3 py-6"
            isTranslationAvailable
          />
          <div className="w-1/4 bg-black opacity-20" />
          <Burger
            active={isBurgerActive}
            onClick={() => setBurgerActive(!isBurgerActive)}
          />
        </div>
      )}
    </>
  );
};
