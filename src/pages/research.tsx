import { GetStaticProps } from "next";
import path from "path";
import { Research, ResearchProps } from "../components/pages/Research";
import { fetchMdx } from "../lib/fetchUtils";
import { EN } from "../lib/LanguageContext";

const language = EN;

export const getStaticProps: GetStaticProps<ResearchProps> = async () => {
  const fullRootPath = path.join(process.cwd(), "content/pages/research.md");
  const data = fetchMdx(fullRootPath);
  return { props: { language, body: data.body_en } };
};
export default Research;
