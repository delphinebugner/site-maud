import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import React, { useState } from "react";
import { EN, getUrlPrefix, Language } from "../lib/language";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ABOUT, ARTICLES, EVENTS, HOME } from "../lib/routes";

interface Props {
  language: Language;
  isTranslationAvailable: boolean;
}

export const Navigation: React.FC<Props> = ({
  language,
  isTranslationAvailable,
}) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container " + (active ? "active" : "")}>
        <ul>
          <li>
            <Link href={`${getUrlPrefix(language)}${HOME}`}>
              <a className={router.pathname === HOME ? "active" : null}>
                {language === EN ? "Home" : "Accueil"}
              </a>
            </Link>
          </li>
          <li>
            <Link href={`${getUrlPrefix(language)}${ABOUT}`}>
              <a className={router.pathname === ABOUT ? "active" : null}>
                {language === EN ? "About" : "A propos"}
              </a>
            </Link>
          </li>
          <li>
            <Link href={`${getUrlPrefix(language)}${EVENTS}`}>
              <a className={router.pathname === EVENTS ? "active" : null}>
                {"Concerts"}
              </a>
            </Link>
          </li>
          <li>
            <Link href={`${getUrlPrefix(language)}${ARTICLES}`}>
              <a className={router.pathname === ARTICLES ? "active" : null}>
                {"Articles"}
              </a>
            </Link>
          </li>
          {isTranslationAvailable && (
            <li>
              <LanguageSwitcher language={language} />
            </li>
          )}
        </ul>
        <style jsx>
          {`
            .container {
              width: 0;
            }
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              text-align: right;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              top: 0;
              background-color: #fff;
              display: flex;
              flex-direction: column;
              justify-content: center;
              z-index: 1;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 1.5rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: #222;
            }

            @media (min-width: 769px) {
              .container {
                width: 7rem;
                display: block;
              }
              ul {
                opacity: 1;
                width: 7rem;
                top: auto;
                display: block;
                transform: translateY(0);
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};
