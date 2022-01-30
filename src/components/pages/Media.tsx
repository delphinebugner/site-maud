import React, { FunctionComponent } from "react";
import { EN, Language } from "../../lib/LanguageContext";
import ReactPlayer from "react-player/youtube";
import { Content } from "../../lib/types";
import { Layout } from "../Layout";

interface MediaAttributes {
  body_fr: string;
  body_en: string;
}

export interface Props {
  content: Content<MediaAttributes>;
  language: Language;
}

export const Media: FunctionComponent<Props> = ({ content, language }) => {
  return (
    <Layout>
      <div className="p-20">
        <span className="text-xl">
          {language === EN
            ? content.attributes.body_en
            : content.attributes.body_fr}
        </span>
        <ReactPlayer url="https://www.youtube.com/watch?v=QaiP5TMsczw&ab_channel=EnsembleParnassoinFesta" />
      </div>
    </Layout>
  );
};
