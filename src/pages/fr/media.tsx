import { GetStaticProps } from "next";
import path from "path";
import {
  Media,
  MediaContent,
  Props as MediaProps,
} from "../../components/pages/Media";
import { fetchMdx } from "../../lib/fetchUtils";
import { FR } from "../../lib/LanguageContext";

export const getStaticProps: GetStaticProps<MediaProps> = async () => {
  const fullRootPath = path.join(process.cwd(), "content/pages/media.md");
  const data = fetchMdx(fullRootPath);
  return { props: { content: data as MediaContent, language: FR } };
};
export default Media;
