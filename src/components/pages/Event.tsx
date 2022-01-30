import React from "react";
import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { Layout } from "../Layout";
import { Language } from "../../lib/LanguageContext";
import { MyEvent } from "../../lib/Event/interface";
import { formatDate } from "../../lib/dateUtils";
import { RoundImage } from "../atoms/RoundImage";

export interface Props {
  event: MyEvent;
  language: Language;
}

export const EventPage: NextPage<Props> = ({ event, language }) => {
  const { name, place, date, hour, body } = event;
  return (
    <Layout>
      <div className="flex flex-col">
        <span
          className="text-3xl lg:text-5xl 
          text-primary text-center font-serif 
          mt-8 px-4 lg:px-25percent lg:py-12"
        >
          {name}
        </span>
        <div className="flex lg:flex-row flex-col pl-4 lg:pl-36 overflow-hidden items-center">
          <div className="mt-4 flex-1">
            <p className="text-lg font-extralight text-sand">{place}</p>
            <p className="font-bold text-secondary text-2xl">
              {formatDate(date, language)}
            </p>
            <p className="text-xl font-bold text-primary">{hour}</p>
            <ReactMarkdown className="prose my-6">{body}</ReactMarkdown>
          </div>
          <RoundImage
            src="/images/055c.jpg"
            sizeDesktop={500}
            sizeMobile={300}
            className="-mr-36 -mb-12 lg:-mr-20 lg:-mb-16"
            position="top"
          />
        </div>
      </div>
    </Layout>
  );
};
