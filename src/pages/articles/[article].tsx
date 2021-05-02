import fs from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import {
  ArticlePage,
  Props as ArticleProps,
} from "../../components/pages/Article";
import {
  fetchArticle,
  fetchArticlesPaths,
  getArticlesContentRoot,
} from "../../lib/Article/api";
import { EN, FR } from "../../lib/language";

const language = EN;

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}) => {
  const articleId = params.article as string;
  const article = fetchArticle(language, articleId);
  const isTranslationAvailable = fs
    .readdirSync(getArticlesContentRoot(FR))
    .some((fileName) => fileName === `${articleId}.md`);
  return {
    props: {
      article,
      language,
      isTranslationAvailable,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchArticlesPaths(language);
  return {
    paths,
    fallback: false,
  };
};

export default ArticlePage;
