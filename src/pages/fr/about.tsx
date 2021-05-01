import { GetStaticProps } from "next";
import { About } from "../../components/pages/About";
import { SECONDARY_LANGUAGE } from "../../components/pages/utils";

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(
    `../../../content/pages/about_${SECONDARY_LANGUAGE}.md`
  );
  return { props: { content: content.default } };
};
export default About;
