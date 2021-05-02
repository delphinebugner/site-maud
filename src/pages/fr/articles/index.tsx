import { GetStaticProps } from "next";
import {
  ArticleList,
  Props as ArticleListProps,
} from "../../../components/pages/ArticleList";
import { getArticlesAttributes } from "../../../lib/files";
import { FR } from "../../../lib/language";

export const getStaticProps: GetStaticProps<ArticleListProps> = async () => {
  const articles = getArticlesAttributes("articles_fr");
  return { props: { language: FR, articles } };
};
export default ArticleList;
