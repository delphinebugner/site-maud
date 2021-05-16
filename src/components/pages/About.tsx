import { NextPage } from "next";
import parse from "html-react-parser";
import { Layout } from "../Layout";
import { EN, Language } from "../../lib/language";
import { Content } from "../../lib/types";
import { RoundImage } from "../RoundImage";

export interface Props {
  content: Content<AboutAttributes>;
  language: Language;
}
interface AboutAttributes {
  cv: string;
}

export const About: NextPage<Props> = ({ content, language }) => {
  const { attributes, html } = content;
  return (
    <Layout language={language}>
      <div className="flex flex-col">
        <span
          className="text-4xl lg:text-8xl 
          text-primary text-center font-serif 
          mt-8"
        >
          {language === EN ? "Biography" : "Biographie"}
        </span>
        <div className="flex lg:flex-row flex-col p-4 lg:p-12 overflow-hidden">
          <div className="flex-1 flex flex-col items-center">
            <div className="prose">{parse(html)}</div>
            <a
              href={`images/${attributes.cv}`}
              target="_blank"
              className="text-primary hover:text-primary-dark mt-8"
            >
              {language === EN ? "Complete CV (pdf)" : "CV complet (pdf)"}
            </a>
          </div>
          <RoundImage
            src="/images/030.jpg"
            sizeDesktop={750}
            className="my-4 lg:my-0 lg:-mr-72"
            position="top"
          />
        </div>
      </div>
    </Layout>
  );
};
