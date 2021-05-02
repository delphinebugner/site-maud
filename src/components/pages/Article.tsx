import { NextPage } from "next";
import parse from "html-react-parser";
import { Layout } from "../Layout";
import { Language } from "../../lib/language";
import { Content } from "../../lib/types";
import { DateComponent } from "../Date";

export interface Props {
  content: Content<ArticleAttributes>;
  language: Language;
}

export interface ArticleAttributes {
  title: string;
  subtitle?: string;
  date: string;
  slug: string;
}

export const Article: NextPage<Props> = ({ content, language }) => {
  const { attributes, html } = content;
  console.log(attributes.date, typeof attributes.date);
  return (
    <Layout language={language}>
      <div className="flex flex-col items-center justify-center h-full px-48">
        <span className="font-bold text-6xl text-blue-600">
          {attributes.title}
        </span>
        <div className="h-2 w-full" />
        <p className="text-5xl">{attributes.subtitle}</p>
        <div className="h-2 w-full" />
        <DateComponent date={attributes.date} language={language} />
        <div className="prose">{parse(html)}</div>
      </div>
    </Layout>
  );
};
