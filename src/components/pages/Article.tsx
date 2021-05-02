import { NextPage } from "next";
import parse from "html-react-parser";
import { Layout } from "../Layout";
import { Language } from "../../lib/language";
import { DateComponent } from "../Date";
import { Separator } from "../Separator";
import { Article } from "../../lib/Article/interface";
import ReactMarkdown from "react-markdown";

export interface Props {
  article: Article;
  language: Language;
  isTranslationAvailable: boolean;
}

export const ArticlePage: NextPage<Props> = ({
  article,
  language,
  isTranslationAvailable,
}) => {
  const { title, subtitle, date, body } = article;
  return (
    <Layout language={language} isTranslationAvailable={isTranslationAvailable}>
      <div className="flex flex-col h-full px-48">
        <span className="font-bold text-6xl text-blue-600">{title}</span>
        <Separator h={2} />
        <p className="text-2xl">{subtitle}</p>
        <Separator h={4} />
        <DateComponent date={date} language={language} />
        <ReactMarkdown className="prose">{body}</ReactMarkdown>
      </div>
    </Layout>
  );
};
