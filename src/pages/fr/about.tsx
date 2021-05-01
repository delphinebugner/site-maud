import { GetStaticProps } from "next";
import { About, Props } from "../../components/pages/About";
import { FR } from "../../components/pages/utils";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const content = await import(`../../../content/pages/about_${FR}.md`);
  return { props: { content: content.default, language: FR } };
};
export default About;
