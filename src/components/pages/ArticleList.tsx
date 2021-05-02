import Link from "next/link";
import { NextPage } from "next";
import { Layout } from "../Layout";
import { getUrlPrefix, Language } from "../../lib/language";
import { ArticleAttributes } from "./Article";

export interface Props {
  articles: ArticleAttributes[];
  language: Language;
}
export const ArticleList: NextPage<Props> = ({ articles, language }) => {
  return (
    <Layout language={language}>
      <div className="flex flex-col items-center justify-center h-full">
        <div>
          {articles.map((article, i) => (
            <Link
              key={i}
              href={`${getUrlPrefix(language)}/articles/${article.id}`}
            >
              <a className="flex flex-col cursor-pointer hover:opacity-80 transition-all duration-500">
                <p className="text-xl">{article.title}</p>
                <p>{article.subtitle}</p>
                <p className="italic">{article.date}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};
