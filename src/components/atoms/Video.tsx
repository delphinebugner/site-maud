import parse from "html-react-parser";
import React, { FunctionComponent, useContext } from "react";
import ReactPlayer from "react-player/youtube";
import { EN, LanguageContext } from "../../lib/LanguageContext";
import { Video as VideoType } from "../pages/Media";

interface Props {
  video: VideoType;
}

export const Video: FunctionComponent<Props> = ({ video }) => {
  const { language } = useContext(LanguageContext);
  const text = language === EN ? video.textEn : video.textFr;
  return (
    <div className="p-2 w-full lg:w-600">
      <div className="h-200 lg:h-300">
        <ReactPlayer url={video.src} width="100%" height="100%" />
      </div>
      {!!text && (
        <div className="prose text-sm py-1 lg:py-3 lg:px-2">{parse(text)}</div>
      )}
    </div>
  );
};
