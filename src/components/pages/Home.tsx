import { NextPage } from "next";
import { Layout } from "../Layout";
import { Language } from "../../lib/language";
import { HomeCover } from "../Home/HomeCover.component";

export interface Props {
  content: { attributes: HomeAttributes };
  language: Language;
}
interface HomeAttributes {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}
export const Home: NextPage<Props> = ({ content, language }) => {
  const { attributes } = content;
  return (
    <Layout language={language}>
      <div className="flex flex-col h-full w-full">
        <HomeCover {...attributes} />
        <div className="h-homeSectionLg bg-indigo" />
      </div>
    </Layout>
  );
};
