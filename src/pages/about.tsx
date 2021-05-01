import { GetStaticProps } from "next";
import { About, Props as AboutProps } from "../components/pages/About";
import { EN } from "../components/pages/utils";

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  const content = await import(`../../content/pages/about_${EN}.md`);
  return { props: { content: content.default, language: EN } };
};
export default About;
