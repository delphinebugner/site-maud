import React, { useContext, useState } from "react";
import { LanguageContext } from "../../lib/LanguageContext";
import Burger from "./Burger.component";
import { HeaderTitle } from "./HeaderTitle.component";
import { NavigationLinks } from "./NavigationLinks.component";

interface Props {
  isTranslationAvailable: boolean;
}

export const Header: React.FC<Props> = ({ isTranslationAvailable }) => {
  const { language } = useContext(LanguageContext);
  const [isBurgerActive, setBurgerActive] = useState(false);
  return (
    <>
      <div className="h-12 lg:h-20 shadow-md flex space-between items-center px-3 lg:px-7 sticky w-full top-0 bg-cream z-20">
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
          <div className="bg-white w-3/4 shadow-md relative">
            <NavigationLinks
              language={language}
              className="flex flex-col text-lg space-y-3 sticky top-6"
              isTranslationAvailable
            />
          </div>
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
