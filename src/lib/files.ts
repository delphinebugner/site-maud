import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yaml from "js-yaml";
import { ArticleAttributes } from "../components/pages/Article";

const contentRoot = path.join(process.cwd(), "content/");

let articlesCache: ArticleAttributes[] | undefined;

export const getArticlesAttributes = (
  directory: string
): ArticleAttributes[] => {
  if (articlesCache) {
    return articlesCache;
  }
  const fullRootPath = path.join(contentRoot, directory);
  const fileNames = fs.readdirSync(fullRootPath);
  const articleAttributesList = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(fullRootPath, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });
      const articleAttributes = matterResult.data as ArticleAttributes; // markdown is stored in matterResult.content ; data contains only attributes

      // Validate slug string
      const slug = fileName.replace(/\.md$/, "");
      if (articleAttributes.slug !== slug) {
        throw new Error(
          "slug field not match with the path of its content source"
        );
      }

      return articleAttributes;
    });
  return articleAttributesList.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};
