import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { Layout } from "../Layout";
import { Language } from "../../lib/language";
import { DateComponent } from "../Date";
import { Separator } from "../Separator";
import { Event } from "../../lib/Event/interface";

export interface Props {
  event: Event;
  language: Language;
}

export const EventPage: NextPage<Props> = ({ event, language }) => {
  const { name, place, date, hour, body } = event;
  return (
    <Layout language={language}>
      <div className="flex flex-col h-full px-48">
        <span className="font-bold text-6xl text-blue-600">{name}</span>
        <Separator h={2} />
        <p className="text-2xl">{place}</p>
        <Separator h={4} />
        <DateComponent date={date} language={language} />
        <p>{hour}</p>
        <Separator h={12} />
        <ReactMarkdown className="prose">{body}</ReactMarkdown>
      </div>
    </Layout>
  );
};
