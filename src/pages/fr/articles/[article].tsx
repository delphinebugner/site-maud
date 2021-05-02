import fs from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  Article,
  Props as ArticleProps,
} from "../../../components/pages/Article";
import { getArticlesAttributes } from "../../../lib/files";
import { EN, FR, getUrlPrefix } from "../../../lib/language";
import { ARTICLES } from "../../../lib/routes";

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}) => {
  const id = params.article as string;
  const content = await import(`../../../../content/articles_${FR}/${id}.md`);
  const isTranslationAvailable = fs.existsSync(
    `../../../content/articles_${EN}/${id}.md`
  );
  return {
    props: { content: content.default, language: FR, isTranslationAvailable },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticlesAttributes(`articles_${FR}`).map(
    (article) => `${getUrlPrefix(FR)}${ARTICLES}/${article.id}`
  );
  return {
    paths,
    fallback: false,
  };
};

export default Article;
