import { NextPage } from "next";
import React from "react";
import ReactMarkdown from "react-markdown";
import { EN, Language } from "../../lib/LanguageContext";
import { RoundImage } from "../atoms/RoundImage";
import { Layout } from "../Layout";

export interface ResearchProps {
  body: string;
  language: Language;
}

export const Research: NextPage<ResearchProps> = ({ body, language }) => {
  return (
    <Layout>
      <div className="flex flex-col">
        <span
          className="text-4xl lg:text-7xl 
          text-primary text-center font-serif 
          mt-8 lg:mt-12"
        >
          {language === EN ? "Research work" : "Travaux de recherche"}
        </span>
        <div className="flex lg:flex-row flex-col p-4 lg:p-12 overflow-hidden items-center">
          <div className="flex-1 flex flex-col items-center">
            <ReactMarkdown className="prose my-6">{body}</ReactMarkdown>
          </div>
          <RoundImage
            src="/images/salzburg.jpg"
            sizeDesktop={500}
            className="my-4 lg:my-0 lg:-mr-44"
            position="top"
          />
        </div>
      </div>
    </Layout>
  );
};
