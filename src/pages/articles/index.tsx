import { GetStaticProps } from "next";
import {
  ArticleList,
  Props as ArticleListProps,
} from "../../components/pages/ArticleList";
import { getArticlesAttributes } from "../../lib/files";
import { EN } from "../../lib/language";

export const getStaticProps: GetStaticProps<ArticleListProps> = async () => {
  const articles = getArticlesAttributes("articles_en");
  return { props: { language: EN, articles } };
};
export default ArticleList;
