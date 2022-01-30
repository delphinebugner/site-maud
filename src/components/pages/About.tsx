import parse from "html-react-parser";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { EN, Language } from "../../lib/LanguageContext";
import { Content } from "../../lib/types";
import { Layout } from "../Layout";
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
  const { basePath } = useRouter();
  return (
    <Layout>
      <div className="flex flex-col">
        <span
          className="text-4xl lg:text-7xl 
          text-primary text-center font-serif 
          mt-8 lg:mt-12"
        >
          {language === EN ? "Biography" : "Biographie"}
        </span>
        <div className="flex lg:flex-row flex-col p-4 lg:p-12 overflow-hidden items-center">
          <div className="flex-1 flex flex-col items-center">
            <div className="prose">{parse(html)}</div>
            <a
              href={`${basePath}/images/${attributes.cv}`}
              target="_blank"
              className="text-primary hover:text-primary-dark mt-8"
            >
              {language === EN ? "Complete CV (pdf)" : "CV complet (pdf)"}
            </a>
          </div>
          <RoundImage
            src="/images/030c.jpg"
            sizeDesktop={750}
            className="my-4 lg:my-0 lg:-mr-72"
            position="top"
          />
        </div>
      </div>
    </Layout>
  );
};
