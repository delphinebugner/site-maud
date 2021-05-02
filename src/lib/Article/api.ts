import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import path from "path";
import { getUrlPrefix, Language } from "../language";
import { ARTICLES } from "../routes";
import { adaptRawArticle } from "./adapter";
import { Article, RawArticle } from "./interface";

let articlesCache: Partial<Record<Language, Article[]>> = {};

export const getArticlesContentRoot = (language: Language) =>
  path.join(process.cwd(), `content/articles_${language}`);

// This function can only be executed on the server side
export const fetchArticles = (language: Language): Article[] => {
  if (articlesCache[language]) {
    return articlesCache[language];
  }
  const contentRoot = getArticlesContentRoot(language);
  const fileNames = fs.readdirSync(contentRoot);
  const articles = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(contentRoot, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });
      const rawArticle = matterResult.data as RawArticle;
      const body = matterResult.content;
      // Validate id string
      const id = fileName.replace(/\.md$/, "");
      if (matterResult.data.id !== id) {
        throw new Error(
          "id field not match with the path of its content source"
        );
      }
      return adaptRawArticle(rawArticle, body);
    });
  const articlesSorted = articles.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  articlesCache[language] = articlesSorted;
  return articlesSorted;
};

export const fetchArticlesPaths = (language: Language): string[] =>
  fetchArticles(language).map(
    ({ id }) => `${getUrlPrefix(language)}${ARTICLES}/${id}`
  );

export const fetchArticle = (
  language: Language,
  articleId: string
): Article | undefined =>
  fetchArticles(language).find(({ id }) => id === articleId);
