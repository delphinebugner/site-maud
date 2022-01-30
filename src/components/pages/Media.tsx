import React, { FunctionComponent } from "react";
import ReactPlayer from "react-player/youtube";
import { EN, Language } from "../../lib/LanguageContext";
import { Layout } from "../Layout";

export interface MediaContent {
  body_fr: string;
  body_en: string;
}

export interface Props {
  content: MediaContent;
  language: Language;
}

export const Media: FunctionComponent<Props> = ({ content, language }) => {
  return (
    <Layout>
      <div className="p-20">
        <span className="text-xl">
          {language === EN ? content.body_en : content.body_fr}
        </span>
        <ReactPlayer url="https://www.youtube.com/watch?v=QaiP5TMsczw&ab_channel=EnsembleParnassoinFesta" />
      </div>
    </Layout>
  );
};
