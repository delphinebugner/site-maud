import { GetStaticProps } from "next";
import path from "path";
import { Research, ResearchProps } from "../../components/pages/Research";
import { fetchMdx } from "../../lib/fetchUtils";
import { FR } from "../../lib/language";

const language = FR;

export const getStaticProps: GetStaticProps<ResearchProps> = async () => {
  const fullRootPath = path.join(process.cwd(), "content/pages/research.md");
  const data = fetchMdx(fullRootPath);
  return { props: { language, body: data.body_fr } };
};
export default Research;
