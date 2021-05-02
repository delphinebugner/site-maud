import { Article, RawArticle } from "./interface";

export const adaptRawArticle = (
  rawArticle: RawArticle,
  body: string
): Article => ({
  ...rawArticle,
  body,
});
