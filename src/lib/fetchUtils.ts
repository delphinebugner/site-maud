import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";

export const fetchMdx = (fullPath: string) => {
  const fileContent = fs.readFileSync(fullPath, "utf8");
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContent, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });
  return matterResult.data; // markdown is stored in matterResult.content ; data contains only attributes
};
