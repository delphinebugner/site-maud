import React, { FunctionComponent } from "react";
import { Language } from "../../lib/LanguageContext";
import { Video } from "../atoms/Video";
import { Layout } from "../Layout";

export interface MediaContent {
  videosYoutube: Video[];
}

export interface Video {
  src: string;
  textEn: string;
  textFr: string;
}

export interface Props {
  content: MediaContent;
  language: Language;
}

export interface Props {
  content: MediaContent;
  language: Language;
}

export const Media: FunctionComponent<Props> = ({ content }) => {
  return (
    <Layout>
      <div className="p-5">
        <p
          className="text-4xl lg:text-7xl 
            text-primary text-center font-serif 
            mt-4 lg:mt-12"
        >
          {"Media"}
        </p>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center lg:items-stretch">
          {[...content.videosYoutube, ...content.videosYoutube].map(
            (video, index) => (
              <Video video={video} key={index} />
            )
          )}
        </div>
      </div>
    </Layout>
  );
};
