import { GetStaticProps } from "next";
import { Media, Props as MediaProps } from "../../components/pages/Media";
import { FR } from "../../lib/LanguageContext";

export const getStaticProps: GetStaticProps<MediaProps> = async () => {
  const content = await import("../../../content/pages/media.md");
  return { props: { content: content.default, language: FR } };
};
export default Media;
