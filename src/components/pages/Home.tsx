import { NextPage } from "next";
import { Layout } from "../Layout";
import { Language } from "./utils";

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
      <div className="flex flex-col items-center justify-center h-full">
        <span className="font-bold text-6xl text-blue-600">
          {attributes.title}
        </span>
        <div className="h-2 w-full" />
        <p className="text-5xl">{attributes.subtitle}</p>
        <div className="h-2 w-full" />
        <p>{attributes.description}</p>
        <img src={attributes.image} />
      </div>
    </Layout>
  );
};
