import fs from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { Article, Props as ArticleProps } from "../../components/pages/Article";
import { getArticlesAttributes } from "../../lib/files";
import { EN, FR } from "../../lib/language";
import { ARTICLES } from "../../lib/routes";

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}) => {
  const id = params.article as string;
  const content = await import(`../../../content/articles_${EN}/${id}.md`);
  const isTranslationAvailable = fs.existsSync(
    `../../../content/articles_${FR}/${id}.md`
  );
  return {
    props: {
      content: content.default,
      language: EN,
      isTranslationAvailable,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticlesAttributes("articles_en").map(
    (article) => `${ARTICLES}/${article.id}`
  );
  return {
    paths,
    fallback: false,
  };
};

export default Article;
