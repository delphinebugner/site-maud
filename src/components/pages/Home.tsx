import { NextPage } from "next";
import { Layout } from "../Layout";
import { EN, Language } from "../../lib/language";
import { HomeCover } from "../Home/HomeCover.component";
import { HomeSection } from "../Home/HomeSection.component";
import { HomeSectionTitle } from "../Home/HomeSectionTitle.component";
import { HomeButton } from "../Home/HomeButton.component";
import { ABOUT, ARTICLES, EVENTS } from "../../lib/routes";
import { Spacer } from "../Spacer";

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
        <HomeSection>
          <img
            src="/images/044c.jpg"
            className="h-full w-96 object-cover object-center ml-10"
          />
          <div className="flex flex-col items-center flex-1">
            <span>{attributes.description}</span>
            <Spacer h={2} />
            <HomeButton
              text={language === EN ? "Read more" : "En savoir plus..."}
              language={language}
              path={ABOUT}
              color="primary"
            />
          </div>
        </HomeSection>
        <HomeSection className="bg-primary">
          <div className="ml-10 flex flex-col items-center">
            <HomeSectionTitle
              className="text-white"
              text={language === EN ? "Next concerts" : "Prochains concerts"}
            />
            <Spacer h={4} />
            <HomeButton
              text={language === EN ? "See all" : "Tout voir"}
              language={language}
              path={EVENTS}
              color="white"
            />
          </div>
        </HomeSection>
        <HomeSection className="justify-end">
          <div className="ml-10 flex flex-col items-center">
            <HomeSectionTitle text={"Articles"} className="text-primary" />
            <HomeButton
              text={language === EN ? "Read all" : "Tout voir"}
              language={language}
              path={ARTICLES}
              color="primary"
            />
          </div>
        </HomeSection>
      </div>
    </Layout>
  );
};
