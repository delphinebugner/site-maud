import { GetStaticProps } from "next";
import {
  ArticleList,
  Props as ArticleListProps,
} from "../../../components/pages/ArticleList";
import { fetchArticles } from "../../../lib/Article/api";
import { FR } from "../../../lib/language";

const language = FR;

export const getStaticProps: GetStaticProps<ArticleListProps> = async () => {
  const articles = fetchArticles(language);
  return { props: { language, articles } };
};
export default ArticleList;
