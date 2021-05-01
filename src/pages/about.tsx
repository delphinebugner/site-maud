import { GetStaticProps } from "next";
import { About } from "../components/pages/About";
import { DEFAULT_LANGUAGE } from "../components/pages/utils";

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(
    `../../content/pages/about_${DEFAULT_LANGUAGE}.md`
  );
  return { props: { content: content.default } };
};
export default About;
